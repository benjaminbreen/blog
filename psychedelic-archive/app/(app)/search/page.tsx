'use client'

import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    era: '',
    dateFrom: '',
    dateTo: '',
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // This will be connected to the actual search API
    console.log('Search query:', query, 'Filters:', filters)
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      era: '',
      dateFrom: '',
      dateTo: '',
    })
  }

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Search Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Search the Archive
          </h1>
          <p className="text-lg text-gray-600">
            Search through thousands of historical documents, biographies, and media
          </p>
        </div>

        {/* Search Box */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search titles, descriptions, authors, tags..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" size="md">
                Search
              </Button>
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge variant="primary" className="ml-1">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-6 border-primary-200">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Advanced Filters
                </h3>
                {activeFilterCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear all
                  </Button>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Category Filter */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) =>
                      setFilters({ ...filters, category: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    <option value="text">Text & Documents</option>
                    <option value="media">Audio/Video</option>
                    <option value="bio">Biography</option>
                    <option value="experience">Personal Experience</option>
                  </select>
                </div>

                {/* Era Filter */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Historical Era
                  </label>
                  <select
                    value={filters.era}
                    onChange={(e) =>
                      setFilters({ ...filters, era: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Eras</option>
                    <option value="early-modern">Early Modern (Pre-1800)</option>
                    <option value="1800-1950">1800-1950</option>
                    <option value="1950s">1950s</option>
                    <option value="1960s">1960s</option>
                    <option value="1970s-present">1970s-Present</option>
                  </select>
                </div>

                {/* Date Range */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    From Year
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 1950"
                    value={filters.dateFrom}
                    onChange={(e) =>
                      setFilters({ ...filters, dateFrom: e.target.value })
                    }
                    min="1500"
                    max="2025"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    To Year
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 1970"
                    value={filters.dateTo}
                    onChange={(e) =>
                      setFilters({ ...filters, dateTo: e.target.value })
                    }
                    min="1500"
                    max="2025"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {query || activeFilterCount > 0
              ? 'Showing results...'
              : 'Enter a search term or select filters to begin'}
          </p>
        </div>

        {/* Results Grid - This will be populated with actual results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder - will be replaced with actual search results */}
          <Card className="border-dashed">
            <CardContent className="flex min-h-[200px] items-center justify-center p-6 text-center">
              <div>
                <Search className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <p className="text-gray-600">
                  {query || activeFilterCount > 0
                    ? 'Search results will appear here'
                    : 'Start searching to see results'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Tips */}
        <Card className="mt-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-gray-900">Search Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use quotes for exact phrases: "LSD research"</li>
              <li>• Search by author name, title, or keywords</li>
              <li>• Combine search with filters for more precise results</li>
              <li>• Use date ranges to narrow down specific time periods</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
