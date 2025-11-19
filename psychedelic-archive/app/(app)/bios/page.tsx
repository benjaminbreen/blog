import { BioCard } from '@/components/archive/BioCard'

async function getBios() {
  // Fetch from Payload CMS API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/bios?where[status][equals]=published&limit=100`,
    {
      next: { revalidate: 60 },
      cache: 'no-store' // For development - remove in production
    }
  )

  if (!res.ok) {
    console.error('Failed to fetch bios:', res.status)
    return { docs: [] }
  }

  return res.json()
}

export default async function BiosPage({
  searchParams,
}: {
  searchParams: { type?: string }
}) {
  const data = await getBios()
  const bios = data.docs || []

  // Filter by type if specified
  const filteredBios = searchParams.type
    ? bios.filter((bio: any) => bio.type === searchParams.type)
    : bios

  const bioTypes = [
    { value: 'researcher', label: 'Researchers', description: 'Scientists, academics, and clinicians' },
    { value: 'user_patient', label: 'Users & Patients', description: 'People who used psychedelics' },
    { value: 'personal_history', label: 'Personal Histories', description: 'Memoir-style accounts' },
    { value: 'other', label: 'Other', description: 'Other notable figures' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Biographies</h1>
          <p className="text-lg text-gray-600">
            Profiles of researchers, users, patients, and key figures in psychedelic history
          </p>
        </div>

        {/* Filter by Type */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bioTypes.map((type) => (
            <a
              key={type.value}
              href={`/bios?type=${type.value}`}
              className={`rounded-lg border-2 p-4 text-center transition-all hover:shadow-md ${
                searchParams.type === type.value
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-primary-300'
              }`}
            >
              <h3 className="mb-1 font-semibold text-gray-900">{type.label}</h3>
              <p className="text-sm text-gray-600">{type.description}</p>
            </a>
          ))}
        </div>

        {searchParams.type && (
          <div className="mb-6">
            <a
              href="/bios"
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              ← Show all biographies
            </a>
          </div>
        )}

        {/* Results */}
        {filteredBios.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center">
            <p className="text-gray-600">
              No biographies found. {searchParams.type && 'Try viewing all biographies.'}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Add biographical entries through the <a href="/admin" className="text-primary-600 hover:text-primary-700">admin panel</a>.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBios.map((bio: any) => (
              <BioCard key={bio.id} bio={bio} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
