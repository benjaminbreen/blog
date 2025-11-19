import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { User, ExternalLink, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'

async function getBio(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/bios?where[slug][equals]=${slug}&limit=1`,
    {
      next: { revalidate: 60 },
      cache: 'no-store' // For development
    }
  )

  if (!res.ok) {
    return null
  }

  const data = await res.json()
  return data.docs?.[0] || null
}

const typeLabels: Record<string, string> = {
  researcher: 'Researcher',
  user_patient: 'User/Patient',
  personal_history: 'Personal History',
  other: 'Other',
}

const typeColors: Record<string, any> = {
  researcher: 'blue',
  user_patient: 'green',
  personal_history: 'orange',
  other: 'default',
}

export default async function BioPage({
  params,
}: {
  params: { slug: string }
}) {
  const bio = await getBio(params.slug)

  if (!bio) {
    notFound()
  }

  const lifespan = [bio.birthDate, bio.deathDate].filter(Boolean).join(' - ')

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/bios"
              className="text-sm text-gray-600 hover:text-primary-600"
            >
              ← Back to Biographies
            </Link>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {/* Portrait */}
            <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 ring-4 ring-white shadow-lg">
              {bio.portrait ? (
                <Image
                  src={bio.portrait.url}
                  alt={bio.portrait.alt || bio.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                  <User className="h-20 w-20 text-primary-600" />
                </div>
              )}
            </div>

            {/* Name and Details */}
            <div className="flex-1">
              <h1 className="mb-2 text-4xl font-bold text-gray-900">{bio.name}</h1>
              {lifespan && (
                <p className="mb-3 flex items-center gap-2 text-lg text-gray-600">
                  <Calendar className="h-5 w-5" />
                  {lifespan}
                </p>
              )}
              <div className="mb-4">
                <Badge variant={typeColors[bio.type]} className="text-sm">
                  {typeLabels[bio.type]}
                </Badge>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">{bio.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Biography */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-800"
            dangerouslySetInnerHTML={{ __html: bio.biography }}
          />
        </div>

        {/* Related Entries */}
        {bio.relatedEntries && bio.relatedEntries.length > 0 && (
          <Card className="mt-12">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Related Archive Entries
              </h2>
              <ul className="space-y-2">
                {bio.relatedEntries.map((entry: any) => (
                  <li key={entry.id}>
                    <Link
                      href={`/entries/${entry.slug}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {entry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* External Links */}
        {bio.externalLinks && bio.externalLinks.length > 0 && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                External Links & Resources
              </h2>
              <ul className="space-y-3">
                {bio.externalLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

// Generate static params for all published bios (optional, for static generation)
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/bios?where[status][equals]=published&limit=1000`
    )

    if (!res.ok) return []

    const data = await res.json()

    return (data.docs || []).map((bio: any) => ({
      slug: bio.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
