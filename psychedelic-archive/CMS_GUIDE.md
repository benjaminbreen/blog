# Psychedelic Archive CMS User Guide

This guide will help editors, contributors, and administrators use the Payload CMS to manage content for the Psychedelic History Archive.

## Table of Contents

1. [Getting Started](#getting-started)
2. [User Roles](#user-roles)
3. [Managing Entries](#managing-entries)
4. [Managing Biographies](#managing-biographies)
5. [Media Management](#media-management)
6. [Reviewing Submissions](#reviewing-submissions)
7. [Organization (Categories, Eras, Tags)](#organization)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

## Getting Started

### Accessing the Admin Panel

1. Navigate to `your-domain.com/admin` (or `localhost:3000/admin` for local development)
2. Log in with your credentials
3. You'll see the main dashboard with all available collections

### Dashboard Overview

The dashboard shows:
- Quick links to all content collections
- Recent activity
- Content statistics

## User Roles

### Admin
- Full access to all content and settings
- Can create, edit, delete any content
- Can manage users and permissions
- Can access system settings

### Editor
- Can create, edit, and publish all content
- Can manage submissions
- Can upload media
- Cannot manage users or system settings

### Contributor
- Can create drafts
- Can edit own content
- Requires Editor/Admin approval to publish
- Can upload media for own content

## Managing Entries

Entries are the core content of the archive - historical documents, research papers, articles, etc.

### Creating a New Entry

1. Click **Collections → Entries** in the sidebar
2. Click **Create New**
3. Fill in the required fields:

#### Required Fields

**Title**
- Clear, descriptive title
- Example: "LSD Research at Harvard University, 1962"

**Slug**
- URL-friendly version of the title
- Auto-generated but can be customized
- Example: "lsd-research-harvard-1962"

**Description**
- 2-3 sentence summary
- Appears in search results and cards
- Should entice readers to learn more

**Content**
- Full text or detailed description
- Use the rich text editor for formatting
- Can include headings, lists, quotes, links

**Category**
- Select from existing categories
- Determines how content is organized
- Examples: Text & Documents, Audio/Video

**Era**
- Historical time period
- Examples: 1960s, Early Modern, 1950s

**Date**
- Original date of the document/material
- Can be approximate

#### Optional But Recommended

**Featured Image**
- Main image for the entry
- Appears in cards and at top of entry page
- Upload or select from Media library

**Tags**
- Multiple tags can be added
- Helps with discovery and related content
- Examples: LSD, Research, Harvard, Timothy Leary

**Author**
- Original author of the document
- Not the person adding it to archive

**Source**
- Where the document was originally published
- Example: "Journal of Psychopharmacology, Vol. 5, 1962"

**External URL**
- Link to original source if available online

**Related Bios**
- Link to biographical entries of people mentioned
- Creates automatic relationship

**Attachments**
- Upload PDFs, images, or other supporting files
- Each attachment can have a description

#### Publishing

**Status**
- **Draft**: Not visible to public, work in progress
- **Published**: Live on the website

**Featured**
- Check this to display on homepage
- Use sparingly for most important/interesting content

### Editing an Existing Entry

1. Go to **Collections → Entries**
2. Find the entry (use search if needed)
3. Click on the entry to edit
4. Make changes
5. Click **Save** or **Save & Publish**

### Tips for Great Entries

✅ **Do:**
- Write clear, accurate descriptions
- Provide context and historical background
- Include source citations
- Link to related content
- Use high-quality images
- Tag comprehensively

❌ **Don't:**
- Copy entire copyrighted texts without permission
- Use sensationalist or biased language
- Leave out source information
- Upload low-quality scans
- Forget to proofread

## Managing Biographies

Biographical profiles of researchers, users, patients, and key figures.

### Creating a Biography

1. Click **Collections → Bios**
2. Click **Create New**
3. Fill in the fields:

**Name** (Required)
- Full name of the person
- Example: "Albert Hofmann"

**Slug** (Required)
- URL-friendly version
- Example: "albert-hofmann"

**Type** (Required)
- **Researcher**: Scientists, academics, clinicians
- **User/Patient**: People who used psychedelics
- **Personal History**: Memoir-style accounts
- **Other**: Doesn't fit other categories

**Summary** (Required)
- Brief 2-3 sentence bio
- Appears in biography cards

**Biography** (Required)
- Full biographical content
- Use rich text editor
- Include:
  - Background and education
  - Major contributions
  - Historical significance
  - Key works or research

**Portrait**
- Photo of the person
- Use respectful, appropriate images

**Birth/Death Dates**
- Can be approximate: "c. 1920" or "1920-1930"
- Leave blank if unknown

**Related Entries**
- Link to archive entries about or by this person

**External Links**
- Add links to:
  - Wikipedia pages
  - Academic profiles
  - Published works
  - Other biographical resources

## Media Management

### Uploading Media

1. Go to **Collections → Media**
2. Click **Create New**
3. Click **Select File** or drag and drop

### Supported Formats

- **Images**: JPG, PNG, GIF, WebP
- **Documents**: PDF
- **Maximum size**: 10MB (configurable)

### Required Fields

**Alt Text**
- Descriptive text for accessibility
- Describes what's in the image
- Example: "Black and white photograph of laboratory equipment from 1960s psychedelic research"

**Caption** (Optional)
- Displayed under image
- Can include context or credits

**Credit** (Optional)
- Photo credit or copyright information
- Example: "Courtesy of the Hofmann Archive"

### Image Sizes

Images are automatically resized to:
- **Thumbnail**: 400x300px (for small previews)
- **Card**: 768x1024px (for entry cards)
- **Tablet**: 1024px wide (for content pages)

### Best Practices

- Use high-resolution originals (system will resize)
- Write descriptive alt text for all images
- Include credits and sources
- Organize by adding descriptive filenames

## Reviewing Submissions

User-submitted content requires review before publication.

### Accessing Submissions

1. Go to **Collections → Submissions**
2. View all pending submissions
3. Filter by status:
   - Pending Review
   - Approved
   - Rejected
   - Published

### Review Process

#### 1. Evaluate the Submission

Check for:
- Accuracy and validity
- Appropriate for archive
- Quality of content
- Source credibility
- Copyright concerns

#### 2. Take Action

**If Approved:**
1. Change status to "Approved"
2. Add review notes if needed
3. Create an Entry from the submission:
   - Copy relevant information
   - Enhance and format the content
   - Add proper categorization
   - Link the Entry in "Converted to Entry" field
4. Change submission status to "Published"

**If Needs Work:**
1. Add review notes with feedback
2. Contact submitter (via email in submission)
3. Keep status as "Pending Review"

**If Rejected:**
1. Change status to "Rejected"
2. Add review notes explaining why
3. Optionally notify submitter

### Communication with Submitters

- Email address is provided in submission
- Be respectful and constructive
- Explain decisions clearly
- Thank contributors for their effort

## Organization

### Categories

Categories organize content by format/type.

**Default Categories:**
- Text & Documents
- Audio & Video
- Experience Reports
- Research Papers

**Adding New Categories:**
1. Go to **Collections → Categories**
2. Click **Create New**
3. Fill in:
   - Name
   - Slug
   - Description
   - Icon (Lucide icon name)
   - Color (for visual distinction)

### Eras

Historical time periods for chronological organization.

**Default Eras:**
- Early Modern (Pre-1800)
- 1800-1950
- 1950s
- 1960s
- 1970s-1990s
- 2000s-Present

**Era Fields:**
- Start Year/End Year (for filtering)
- Description (historical context)
- Order (for sorting)

### Tags

Flexible topic-based organization.

**Tag Examples:**
- Substances: LSD, Psilocybin, MDMA
- Topics: Research, Therapy, Art, Music
- People: Timothy Leary, Alexander Shulgin
- Places: Harvard, Haight-Ashbury
- Movements: Counterculture, Psychedelic Renaissance

**Creating Tags:**
1. Go to **Collections → Tags**
2. Click **Create New**
3. Enter name and slug

**Tag Best Practices:**
- Use consistent naming
- Create tags as needed
- Don't over-tag (5-10 tags per entry is plenty)
- Check if tag exists before creating duplicate

## Best Practices

### Content Quality

1. **Accuracy First**
   - Verify facts before publishing
   - Cite sources
   - Note when information is uncertain

2. **Clear Writing**
   - Write for general audience
   - Explain jargon and technical terms
   - Use active voice

3. **Proper Attribution**
   - Always credit original sources
   - Respect copyright
   - Note permissions when relevant

4. **Comprehensive Tagging**
   - Tag thoroughly for discoverability
   - Use existing tags when possible
   - Create new tags thoughtfully

### Workflow Efficiency

1. **Save Drafts Often**
   - Use Draft status while working
   - Prevents data loss
   - Allows collaborative editing

2. **Batch Similar Work**
   - Upload multiple media files at once
   - Create related entries together
   - Review submissions in batches

3. **Use Relationships**
   - Link related entries
   - Connect bios to entries
   - Build a knowledge network

### Editorial Standards

1. **Neutral Tone**
   - Academic, not advocacy
   - Present facts objectively
   - Note controversies fairly

2. **Historical Context**
   - Explain time period context
   - Note cultural attitudes of era
   - Avoid presentism

3. **Sensitivity**
   - Respect privacy
   - Handle sensitive topics carefully
   - Consider impact on living people

## Troubleshooting

### Common Issues

**Can't Upload Images**
- Check file size (max 10MB)
- Ensure supported format (JPG, PNG, PDF)
- Try different browser

**Changes Not Saving**
- Check internet connection
- Ensure all required fields filled
- Try saving as Draft first

**Can't Find Content**
- Use search function
- Check filters (status, category)
- Ensure you have permission to view

**Media Not Displaying**
- Refresh browser
- Clear cache
- Check if media file exists

### Getting Help

- Email technical team: support@psychedelicarchive.com
- Check README.md for technical documentation
- Review this guide for CMS questions

### Reporting Bugs

Include:
- What you were trying to do
- What happened instead
- Browser and OS
- Screenshots if relevant

## Quick Reference

### Keyboard Shortcuts

- **Cmd/Ctrl + S**: Save
- **Cmd/Ctrl + Enter**: Save & Publish
- **Cmd/Ctrl + K**: Search

### Status Workflow

```
Draft → Published (for Entries and Bios)
Pending Review → Approved/Rejected → Published (for Submissions)
```

### Required vs Optional Fields

**Entries - Required:**
- Title, Slug, Description, Content, Category, Era, Date, Status

**Biographies - Required:**
- Name, Slug, Type, Summary, Biography, Status

**Media - Required:**
- File, Alt Text

## Updates and Training

This CMS is actively maintained. Check back for:
- New features and capabilities
- Updated workflows
- Additional training materials

---

**Questions?** Contact the archive team or refer to the main README.md for technical details.
