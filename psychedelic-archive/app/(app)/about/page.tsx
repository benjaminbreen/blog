import { BookOpen, Users, Heart, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            About the Archive
          </h1>
          <p className="text-xl text-gray-600">
            Preserving and sharing the history of psychedelics for education and research
          </p>
        </div>

        {/* Mission */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-lg leading-relaxed text-gray-700">
            The Psychedelic History Archive is a volunteer-based project dedicated to
            collecting, preserving, and sharing primary source materials related to the
            history of psychedelic substances and their impact on culture, medicine,
            science, and society.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to provide an open educational resource for students,
            researchers, patients, and anyone interested in understanding the complex,
            multifaceted history of psychedelics across four centuries—from early modern
            accounts to contemporary research and cultural movements.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            What We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                    <BookOpen className="h-7 w-7 text-primary-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Primary Sources
                </h3>
                <p className="text-sm text-gray-600">
                  Historical documents, research papers, personal accounts, and archival
                  materials spanning centuries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Biographical Profiles
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive biographies of researchers, patients, and key figures in
                  psychedelic history
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Heart className="h-7 w-7 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Community Driven
                </h3>
                <p className="text-sm text-gray-600">
                  Open to contributions from scholars, researchers, and individuals with
                  relevant materials
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Organization */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">How We're Organized</h2>
          <div className="space-y-4 text-gray-700">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">By Format</h3>
              <p>
                Materials are categorized by type: text documents, audio and video
                recordings, biographical profiles, and personal experience reports.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">By Historical Era</h3>
              <p>
                Content spans from early modern period (pre-1800) through the industrial
                era (1800-1950), the research renaissance (1950s), the cultural revolution
                (1960s), and contemporary times (1970s-present).
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">By Topic</h3>
              <p>
                Flexible tagging system allows browsing by specific substances, research
                areas, cultural movements, and thematic connections.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship */}
        <Card className="mb-16 border-primary-200 bg-gradient-to-br from-primary-50 to-white">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Institutional Support
            </h2>
            <p className="mb-4 text-gray-700">
              This project is sponsored by a grant from the{' '}
              <strong>Humanities Institute at UC Santa Cruz</strong>. The archive is
              maintained by a dedicated team of volunteers, scholars, and researchers
              committed to preserving this important aspect of cultural and scientific
              history.
            </p>
            <p className="text-sm text-gray-600">
              All content is made available for educational and research purposes, with
              full attribution to original sources.
            </p>
          </CardContent>
        </Card>

        {/* Get Involved */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Get Involved</h2>
          <p className="mb-8 text-lg text-gray-600">
            We welcome contributions from the community to help build and maintain this
            valuable resource.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/submit">
              <Button size="lg" className="gap-2">
                Submit Materials
              </Button>
            </Link>
            <Link href="/newsletter">
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Subscribe to Updates
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact */}
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mb-6 text-gray-700">
              Have questions, suggestions, or feedback? We'd love to hear from you.
            </p>
            <p className="text-gray-600">
              Email:{' '}
              <a
                href="mailto:contact@psychedelicarchive.com"
                className="font-medium text-primary-600 hover:text-primary-700"
              >
                contact@psychedelicarchive.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
