import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User as UserIcon, ExternalLink, Tag, FileDown } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'

async function getEntry(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/entries?where[slug][equals]=${slug}&limit=1`,
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

export default async function EntryPage({
  params,
}: {
  params: { slug: string }
}) {
  const entry = await getEntry(params.slug)

  if (!entry) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/entries"
              className="text-sm text-gray-600 hover:text-primary-600"
            >
              ← Back to Archive
            </Link>
          </div>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {entry.category && (
              <Badge variant={entry.category.color}>
                {entry.category.name}
              </Badge>
            )}
            {entry.era && (
              <Badge variant="default">{entry.era.name}</Badge>
            )}
            {entry.tags && entry.tags.map((tag: any) => (
              <Badge key={tag.id} variant="default" className="bg-gray-100">
                {tag.name}
              </Badge>
            ))}
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900">{entry.title}</h1>
          <p className="mb-6 text-xl text-gray-600">{entry.description}</p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            {entry.date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(entry.date)}</span>
              </div>
            )}
            {entry.author && (
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>{entry.author}</span>
              </div>
            )}
            {entry.source && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Source:</span>
                <span>{entry.source}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {entry.featuredImage && (
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-gray-100">
          <Image
            src={entry.featuredImage.url}
            alt={entry.featuredImage.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {entry.featuredImage.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-sm text-white">{entry.featuredImage.caption}</p>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-800"
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />
        </div>

        {/* External Link */}
        {entry.externalUrl && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold text-gray-900">Original Source</h3>
              <a
                href={entry.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                View original document
              </a>
            </CardContent>
          </Card>
        )}

        {/* Attachments */}
        {entry.attachments && entry.attachments.length > 0 && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Attachments & Supporting Materials
              </h3>
              <div className="space-y-3">
                {entry.attachments.map((attachment: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 p-4"
                  >
                    <FileDown className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <div className="flex-1">
                      <a
                        href={attachment.file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {attachment.file.filename || `Attachment ${index + 1}`}
                      </a>
                      {attachment.description && (
                        <p className="mt-1 text-sm text-gray-600">
                          {attachment.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Bios */}
        {entry.relatedBios && entry.relatedBios.length > 0 && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Related People
              </h3>
              <ul className="space-y-2">
                {entry.relatedBios.map((bio: any) => (
                  <li key={bio.id}>
                    <Link
                      href={`/bios/${bio.slug}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {bio.name}
                    </Link>
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

// Generate static params
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/entries?where[status][equals]=published&limit=1000`
    )

    if (!res.ok) return []

    const data = await res.json()

    return (data.docs || []).map((entry: any) => ({
      slug: entry.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
