'use client'

import { useState } from 'react'
import { Send, Upload, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    suggestedEra: '',
    content: '',
    sourceInformation: '',
    submitterName: '',
    submitterEmail: '',
    submitterMessage: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // This will be connected to the actual API
    console.log('Submission:', formData)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Thank You for Your Submission!
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Your submission has been received and will be reviewed by our team. We
                appreciate your contribution to preserving psychedelic history.
              </p>
              <p className="mb-8 text-sm text-gray-500">
                You'll receive an email at <strong>{formData.submitterEmail}</strong> once
                your submission has been reviewed.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button onClick={() => setSubmitted(false)}>
                  Submit Another Entry
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = '/')}>
                  Return to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Submit an Entry
          </h1>
          <p className="text-lg text-gray-600">
            Help us build the archive by sharing historical documents, personal experiences,
            or other materials related to psychedelic history.
          </p>
        </div>

        {/* Submission Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submission Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Title <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., 'LSD Research at Harvard, 1962' or 'Personal account from Woodstock'"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="text">Text (Historical Document)</option>
                  <option value="media">Audio/Video</option>
                  <option value="bio">Biography</option>
                  <option value="experience">Personal Experience</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Brief Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Brief Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Provide a brief summary of this entry (2-3 sentences)"
                  required
                />
              </div>

              {/* Suggested Era */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Time Period / Era
                </label>
                <Input
                  type="text"
                  name="suggestedEra"
                  value={formData.suggestedEra}
                  onChange={handleChange}
                  placeholder="e.g., '1960s' or 'circa 1955' or 'Early 1900s'"
                />
              </div>

              {/* Full Content */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Text or Detailed Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="If transcribing a document, provide the full text. If submitting other materials, provide as much detail as possible."
                  required
                />
              </div>

              {/* Source Information */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Source Information
                </label>
                <textarea
                  name="sourceInformation"
                  value={formData.sourceInformation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Where did you find this material? Include any relevant citations, archives, publications, or background information."
                />
              </div>

              {/* File Upload Placeholder */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Attachments (Optional)
                </label>
                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition-colors hover:border-primary-400 hover:bg-primary-50">
                  <div className="text-center">
                    <Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      Click to upload images or documents
                    </p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                  </div>
                </div>
              </div>

              {/* Submitter Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Your Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="submitterName"
                      value={formData.submitterName}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="submitterEmail"
                      value={formData.submitterEmail}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      We'll use this to contact you about your submission
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Additional Notes
                    </label>
                    <textarea
                      name="submitterMessage"
                      value={formData.submitterMessage}
                      onChange={handleChange}
                      rows={3}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Any additional context or information you'd like to share with our review team"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4 border-t border-gray-200 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
                <Button type="submit" className="gap-2">
                  <Send className="h-4 w-4" />
                  Submit for Review
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="mt-6 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-gray-900">Submission Guidelines</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• All submissions are reviewed by our editorial team before publication</li>
              <li>• Please ensure you have the right to share any submitted materials</li>
              <li>• Provide as much context and source information as possible</li>
              <li>• For sensitive materials, please note any privacy concerns</li>
              <li>• Typical review time is 1-2 weeks</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
