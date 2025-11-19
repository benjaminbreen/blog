import Link from 'next/link'
import { ArrowRight, FileText, Video, Users, Search, Plus, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              The Psychedelic
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                History Archive
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              An open educational resource documenting four centuries of psychedelic history
              through primary sources, personal narratives, and scholarly research.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/entries">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Explore the Archive
                </Button>
              </Link>
              <Link href="/search">
                <Button variant="outline" size="lg" className="gap-2">
                  <Search className="h-5 w-5" />
                  Search Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Browse the Collection
            </h2>
            <p className="text-lg text-gray-600">
              Explore our archive organized by format, era, and contributors
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Text & Documents */}
            <Link href="/entries?category=text">
              <Card className="group h-full transition-all hover:shadow-xl hover:shadow-primary-100">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-transform group-hover:scale-110">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle>Text & Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Historical documents, research papers, newspaper articles, and primary
                    source materials spanning centuries.
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary-600 group-hover:gap-2">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Audio & Video */}
            <Link href="/entries?category=media">
              <Card className="group h-full transition-all hover:shadow-xl hover:shadow-blue-100">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
                    <Video className="h-6 w-6" />
                  </div>
                  <CardTitle>Audio & Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Interviews, lectures, documentaries, and recorded oral histories from
                    researchers and participants.
                  </p>
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:gap-2">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Biographies */}
            <Link href="/bios">
              <Card className="group h-full transition-all hover:shadow-xl hover:shadow-green-100">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 transition-transform group-hover:scale-110">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Biographies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Profiles of researchers, users, patients, and key figures in psychedelic
                    history and culture.
                  </p>
                  <div className="flex items-center text-sm font-medium text-green-600 group-hover:gap-2">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Era */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Explore by Historical Era
            </h2>
            <p className="text-lg text-gray-600">
              Journey through four centuries of psychedelic history
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/entries?era=early-modern"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-2xl font-bold">Early Modern</h3>
              <p className="text-sm text-purple-100">Pre-1800</p>
            </Link>

            <Link
              href="/entries?era=1800-1950"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-2xl font-bold">1800-1950</h3>
              <p className="text-sm text-blue-100">Industrial & Modern Era</p>
            </Link>

            <Link
              href="/entries?era=1950s"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-green-700 p-6 text-white transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-2xl font-bold">1950s</h3>
              <p className="text-sm text-green-100">Research Renaissance</p>
            </Link>

            <Link
              href="/entries?era=1960s"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-2xl font-bold">1960s-Present</h3>
              <p className="text-sm text-orange-100">Cultural Revolution & Beyond</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-white">
            <CardContent className="p-8 text-center sm:p-12">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600">
                  <Plus className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Contribute to the Archive
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Have historical documents, personal experiences, or materials to share?
                Help us build this comprehensive resource for future generations.
              </p>
              <Link href="/submit">
                <Button size="lg" className="gap-2">
                  Submit an Entry
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            About the Archive
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            The Psychedelic History Archive is a volunteer-based project sponsored by the
            Humanities Institute at UC Santa Cruz. Our mission is to provide an open
            educational resource for students, researchers, patients, and others interested
            in the history of psychedelics.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Through careful curation of primary sources, biographical materials, and
            historical documents, we aim to preserve and share the rich, complex history
            of psychedelic substances and their impact on culture, medicine, and society.
          </p>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
