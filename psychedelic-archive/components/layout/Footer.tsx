import Link from 'next/link'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Psychedelic History Archive
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              An open educational resource for students, researchers, patients, and others
              interested in the history of psychedelics. A volunteer-based project documenting
              primary sources across four centuries.
            </p>
            <p className="text-xs text-gray-500">
              Sponsored by the Humanities Institute at UC Santa Cruz
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/entries" className="text-gray-600 hover:text-primary-600">
                  Browse Entries
                </Link>
              </li>
              <li>
                <Link href="/bios" className="text-gray-600 hover:text-primary-600">
                  Biographies
                </Link>
              </li>
              <li>
                <Link href="/personal-histories" className="text-gray-600 hover:text-primary-600">
                  Personal Histories
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-600 hover:text-primary-600">
                  Submit Entry
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-primary-600">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Subscribe to our newsletter for updates on new additions to the archive.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              <Mail className="h-4 w-4" />
              Subscribe
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Psychedelic History Archive. Content available under
            open educational use. All rights reserved to original sources.
          </p>
        </div>
      </div>
    </footer>
  )
}
