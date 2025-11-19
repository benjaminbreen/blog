'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
              <span className="text-xl font-bold text-white">P</span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-bold leading-tight text-gray-900">
                Psychedelic History
              </span>
              <span className="text-xs text-gray-600">Archive</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              About
            </Link>

            <div className="group relative">
              <button className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600">
                Browse
              </button>
              <div className="absolute left-0 mt-2 hidden w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
                <Link
                  href="/entries?category=text"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Text & Documents
                </Link>
                <Link
                  href="/entries?category=media"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Audio & Video
                </Link>
                <Link
                  href="/bios?type=researcher"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Researchers
                </Link>
                <Link
                  href="/bios?type=user_patient"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Users & Patients
                </Link>
                <Link
                  href="/bios?type=personal_history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Personal Histories
                </Link>
              </div>
            </div>

            <div className="group relative">
              <button className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600">
                By Era
              </button>
              <div className="absolute left-0 mt-2 hidden w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
                <Link
                  href="/entries?era=early-modern"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Early Modern
                </Link>
                <Link
                  href="/entries?era=1800-1950"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  1800-1950
                </Link>
                <Link
                  href="/entries?era=1950s"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  1950s
                </Link>
                <Link
                  href="/entries?era=1960s"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  1960s
                </Link>
                <Link
                  href="/entries?era=1970s-present"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  1970s-Present
                </Link>
              </div>
            </div>

            <Link
              href="/submit"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Submit Entry
            </Link>

            <Link href="/search">
              <Button variant="outline" size="sm" className="gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                About
              </Link>
              <Link
                href="/entries"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                All Entries
              </Link>
              <Link
                href="/bios"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Biographies
              </Link>
              <Link
                href="/submit"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Submit Entry
              </Link>
              <Link
                href="/search"
                className="text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
