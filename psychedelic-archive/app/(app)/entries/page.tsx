import { EntryCard } from '@/components/archive/EntryCard'

async function getEntries(category?: string, era?: string) {
  const params = new URLSearchParams()
  params.append('where[status][equals]', 'published')
  params.append('limit', '100')

  if (category) {
    params.append('where[category.slug][equals]', category)
  }
  if (era) {
    params.append('where[era.slug][equals]', era)
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/entries?${params.toString()}`,
    {
      next: { revalidate: 60 },
      cache: 'no-store' // For development
    }
  )

  if (!res.ok) {
    console.error('Failed to fetch entries:', res.status)
    return { docs: [] }
  }

  return res.json()
}

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/categories?limit=100`,
    { next: { revalidate: 300 }, cache: 'no-store' }
  )
  if (!res.ok) return { docs: [] }
  return res.json()
}

async function getEras() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/eras?limit=100&sort=order`,
    { next: { revalidate: 300 }, cache: 'no-store' }
  )
  if (!res.ok) return { docs: [] }
  return res.json()
}

export default async function EntriesPage({
  searchParams,
}: {
  searchParams: { category?: string; era?: string }
}) {
  const [entriesData, categoriesData, erasData] = await Promise.all([
    getEntries(searchParams.category, searchParams.era),
    getCategories(),
    getEras(),
  ])

  const entries = entriesData.docs || []
  const categories = categoriesData.docs || []
  const eras = erasData.docs || []

  const activeCategory = categories.find((c: any) => c.slug === searchParams.category)
  const activeEra = eras.find((e: any) => e.slug === searchParams.era)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Archive Entries</h1>
          <p className="text-lg text-gray-600">
            Explore our collection of historical documents, research, and media
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-700">
            Browse by Category
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category: any) => (
              <a
                key={category.id}
                href={`/entries?category=${category.slug}`}
                className={`rounded-lg border-2 p-4 text-center transition-all hover:shadow-md ${
                  searchParams.category === category.slug
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-primary-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                {category.description && (
                  <p className="mt-1 text-sm text-gray-600">{category.description}</p>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-700">
            Browse by Era
          </h2>
          <div className="flex flex-wrap gap-2">
            {eras.map((era: any) => (
              <a
                key={era.id}
                href={`/entries?era=${era.slug}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  searchParams.era === era.slug
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {era.name}
              </a>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {(searchParams.category || searchParams.era) && (
          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm text-gray-600">Filters:</span>
            {activeCategory && (
              <div className="flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm">
                <span>{activeCategory.name}</span>
                <a
                  href={searchParams.era ? `/entries?era=${searchParams.era}` : '/entries'}
                  className="text-primary-700 hover:text-primary-900"
                >
                  ×
                </a>
              </div>
            )}
            {activeEra && (
              <div className="flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm">
                <span>{activeEra.name}</span>
                <a
                  href={searchParams.category ? `/entries?category=${searchParams.category}` : '/entries'}
                  className="text-primary-700 hover:text-primary-900"
                >
                  ×
                </a>
              </div>
            )}
            <a
              href="/entries"
              className="text-sm text-gray-600 hover:text-primary-600"
            >
              Clear all
            </a>
          </div>
        )}

        {/* Results */}
        {entries.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center">
            <p className="text-gray-600">
              No entries found for the selected filters.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your filters or <a href="/entries" className="text-primary-600 hover:text-primary-700">view all entries</a>.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Add entries through the <a href="/admin" className="text-primary-600 hover:text-primary-700">admin panel</a>.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-gray-600">
              Showing {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {entries.map((entry: any) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
