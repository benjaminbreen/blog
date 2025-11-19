import Link from 'next/link'
import { FileText, Mic, Scale, User, ExternalLink, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function PersonalHistoriesPage() {
  const experienceReports = [
    {
      title: "Betty Eisner's first LSD trip",
      date: 'October 10, 1955',
      person: 'Betty Grover Eisner',
      personSlug: 'betty-eisner',
      description: 'A pioneering clinical psychologist\'s first encounter with LSD-25, documenting her fragmented yet profound initial experience.',
      link: '/entries/betty-eisner-first-lsd-trip-1955',
      tags: ['LSD', '1950s', 'Clinical Psychology'],
    },
    {
      title: "Myron J. Stolaroff's LSD experience",
      date: 'April 16, 1956',
      person: 'Myron Stolaroff',
      personSlug: 'myron-stolaroff',
      description: 'An electrical engineer\'s transformative first LSD session that led him to leave his career at Ampex to found the International Foundation for Advanced Study.',
      link: 'https://erowid.org/experiences/exp.php?ID=35800',
      external: true,
      tags: ['LSD', '1950s', 'Engineers'],
    },
    {
      title: "Al Hubbard's DMT experience",
      date: 'March 23, 1961',
      person: 'Al Hubbard',
      personSlug: null,
      description: 'The legendary "Captain Trips" documents his experience with DMT, providing insight into one of the most enigmatic figures in psychedelic history.',
      link: 'https://erowid.org/experiences/exp.php?ID=8741',
      external: true,
      tags: ['DMT', '1960s'],
    },
  ]

  const testimonies = [
    {
      title: 'Testimony of John Gittinger',
      subtitle: 'Joint Hearing before the Senate Committee on Intelligence and the Subcommittee on Health and Scientific Research',
      date: 'August 3, 1977',
      congress: 'Ninety-Fifth Congress',
      subject: 'Project MKULTRA',
      description: 'CIA psychologist John Gittinger testifies about the CIA\'s mind control experiments, providing rare insider perspective on one of the most controversial government programs.',
      link: '/entries/gittinger-mkultra-testimony-1977',
      tags: ['MKULTRA', '1970s', 'Congressional Hearings'],
    },
    {
      title: 'Prepared Statement of Admiral Stansfield Turner',
      subtitle: 'Director of Central Intelligence',
      date: 'August 3, 1977',
      congress: 'Ninety-Fifth Congress',
      subject: 'Project MKULTRA',
      description: 'The CIA Director\'s official statement acknowledging and explaining the MKULTRA program, marking a watershed moment in the public understanding of government-sponsored psychedelic research.',
      link: '/entries/turner-mkultra-statement-1977',
      tags: ['MKULTRA', '1970s', 'Congressional Hearings', 'CIA'],
    },
  ]

  const otherSources = [
    {
      title: 'Patient narratives and medical case studies',
      description: 'First-hand accounts from psychedelic therapy sessions',
      icon: User,
      color: 'blue',
      link: '/entries?category=experience',
    },
    {
      title: 'Letters and correspondence',
      description: 'Private communications between researchers and subjects',
      icon: FileText,
      color: 'green',
      link: '/entries?category=text',
    },
    {
      title: 'Oral history interviews',
      description: 'Recorded conversations with participants and researchers',
      icon: Mic,
      color: 'orange',
      link: '/entries?category=media',
    },
    {
      title: 'Legal documents and court cases',
      description: 'Trials, depositions, and legal proceedings',
      icon: Scale,
      color: 'purple',
      link: '/entries?category=text',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-gray-200 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Personal Histories
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              First-hand accounts, testimonies, and personal narratives documenting the lived
              experiences of psychedelic research participants, patients, and key witnesses
              to history.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Experience Reports Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                Psychedelic Experience Reports
              </h2>
              <p className="text-gray-600">
                First-person accounts of psychedelic experiences from researchers, therapists, and early participants
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceReports.map((report, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{report.date}</span>
                    </div>
                    {report.external && (
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{report.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {report.personSlug ? (
                    <Link
                      href={`/bios/${report.personSlug}`}
                      className="mb-3 block text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {report.person} →
                    </Link>
                  ) : (
                    <p className="mb-3 text-sm font-medium text-gray-700">{report.person}</p>
                  )}
                  <p className="mb-4 text-sm text-gray-600">{report.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {report.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {report.external ? (
                    <a
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      Read report
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      href={report.link}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      Read report →
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimony & Congressional Hearings */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Testimony & Congressional Hearings
            </h2>
            <p className="text-gray-600">
              Official statements, sworn testimony, and congressional records documenting
              government psychedelic programs and policy debates
            </p>
          </div>

          <div className="space-y-6">
            {testimonies.map((testimony, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <Badge variant="purple">{testimony.subject}</Badge>
                        <span className="text-sm text-gray-600">{testimony.date}</span>
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">
                        {testimony.title}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-gray-700">
                        {testimony.subtitle}
                      </p>
                      <p className="mb-4 text-gray-600">{testimony.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {testimony.tags.map((tag) => (
                          <Badge key={tag} variant="default" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        href={testimony.link}
                        className="inline-flex items-center gap-2 font-medium text-primary-600 hover:text-primary-700"
                      >
                        Read full testimony →
                      </Link>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 lg:w-64">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Congressional Record
                      </h4>
                      <dl className="space-y-1 text-sm text-gray-600">
                        <div>
                          <dt className="inline font-medium">Congress: </dt>
                          <dd className="inline">{testimony.congress}</dd>
                        </div>
                        <div>
                          <dt className="inline font-medium">Date: </dt>
                          <dd className="inline">{testimony.date}</dd>
                        </div>
                        <div>
                          <dt className="inline font-medium">Subject: </dt>
                          <dd className="inline">{testimony.subject}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Primary Sources */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Additional Primary Sources
            </h2>
            <p className="text-gray-600">
              Explore more first-hand accounts and personal narratives across different formats
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {otherSources.map((source, index) => {
              const Icon = source.icon
              return (
                <Link
                  key={index}
                  href={source.link}
                  className="group h-full"
                >
                  <Card className="h-full transition-all hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${source.color}-100`}>
                        <Icon className={`h-8 w-8 text-${source.color}-600`} />
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-primary-600">
                        {source.title}
                      </h3>
                      <p className="text-sm text-gray-600">{source.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Historical Context */}
        <section className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            About Personal Histories
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Personal histories form the human core of the psychedelic archive. These first-hand
              accounts—from experience reports and therapy session notes to congressional testimony
              and oral histories—provide irreplaceable insights into the lived reality of
              psychedelic research and use across different eras.
            </p>
            <p>
              Unlike secondary sources or retrospective analyses, these documents capture immediate
              experiences, contemporary perspectives, and authentic voices from participants,
              patients, researchers, and witnesses to historic events. They reveal not just what
              happened, but how it felt, what people thought at the time, and how they made sense
              of their experiences.
            </p>
            <p>
              This section includes psychedelic experience reports from the 1950s-1970s research
              era, testimony from congressional hearings, patient narratives from therapeutic
              contexts, and other primary source materials that document individual encounters
              with psychedelic substances and the broader social controversies surrounding them.
            </p>
          </div>
        </section>

        {/* Contribute CTA */}
        <section className="mt-12 text-center">
          <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-white">
            <CardContent className="p-8">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Share Personal Histories
              </h3>
              <p className="mb-6 text-gray-700">
                Have experience reports, testimony, or other first-hand accounts to contribute?
                Help us preserve these important historical documents.
              </p>
              <Link href="/submit">
                <button className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700">
                  Submit an Entry
                </button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
