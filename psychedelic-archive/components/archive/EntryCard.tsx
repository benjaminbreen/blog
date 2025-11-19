import Link from 'next/link'
import Image from 'next/image'
import { FileText, Calendar, Tag } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'

interface EntryCardProps {
  entry: {
    id: string
    title: string
    slug: string
    description: string
    date: string
    category: {
      name: string
      color: string
      slug: string
    }
    era: {
      name: string
      slug: string
    }
    featuredImage?: {
      url: string
      alt: string
    }
    tags?: Array<{
      name: string
      slug: string
    }>
  }
}

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <Link href={`/entries/${entry.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        {entry.featuredImage && (
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <Image
              src={entry.featuredImage.url}
              alt={entry.featuredImage.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <CardContent className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant={entry.category.color as any}>
              {entry.category.name}
            </Badge>
            <Badge variant="default">{entry.era.name}</Badge>
          </div>

          <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600">
            {entry.title}
          </h3>

          <p className="mb-4 line-clamp-3 text-sm text-gray-600">
            {entry.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(entry.date)}</span>
            </div>
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                <span>{entry.tags.length} tags</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
