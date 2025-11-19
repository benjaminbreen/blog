import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge, type BadgeProps } from '@/components/ui/Badge'

type BadgeVariant = NonNullable<BadgeProps['variant']>
type BioType = 'researcher' | 'user_patient' | 'personal_history' | 'other'

interface BioCardProps {
  bio: {
    id: string
    name: string
    slug: string
    type: BioType
    summary: string
    birthDate?: string
    deathDate?: string
    portrait?: {
      url: string
      alt: string
    }
  }
}

const typeLabels: Record<BioType, string> = {
  researcher: 'Researcher',
  user_patient: 'User/Patient',
  personal_history: 'Personal History',
  other: 'Other',
}

const typeColors: Record<BioType, BadgeVariant> = {
  researcher: 'blue',
  user_patient: 'green',
  personal_history: 'orange',
  other: 'default',
}

export function BioCard({ bio }: BioCardProps) {
  const lifespan = [bio.birthDate, bio.deathDate].filter(Boolean).join(' - ')

  return (
    <Link href={`/bios/${bio.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex items-start gap-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
              {bio.portrait ? (
                <Image
                  src={bio.portrait.url}
                  alt={bio.portrait.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                  <User className="h-10 w-10 text-primary-600" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <h3 className="mb-1 text-xl font-semibold text-gray-900 group-hover:text-primary-600">
                {bio.name}
              </h3>
              {lifespan && (
                <p className="mb-2 text-sm text-gray-500">{lifespan}</p>
              )}
              <Badge variant={typeColors[bio.type]}>
                {typeLabels[bio.type]}
              </Badge>
            </div>
          </div>

          <p className="line-clamp-3 text-sm text-gray-600">
            {bio.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
