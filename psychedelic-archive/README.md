# Psychedelic History Archive

A beautiful, modern CMS-based website for preserving and sharing the history of psychedelics through primary sources, biographical materials, and historical documents.

## Features

### 🎨 Beautiful, Modern Design
- Clean, academic aesthetic with professional styling
- Responsive design optimized for all devices
- Custom typography using Inter, Crimson Pro, and JetBrains Mono fonts
- Gradient accents and smooth animations

### 📚 Powerful Content Management
- **Payload CMS**: Full-featured, self-hosted CMS with multi-user support
- **Rich Content Types**: Entries, biographies, media, and more
- **Advanced Organization**: Category, era, and tag-based taxonomy
- **Media Management**: Automatic image optimization and resizing
- **Rich Text Editor**: Lexical editor with full formatting capabilities

### 🔍 Advanced Search & Discovery
- Full-text search across all content
- Filter by category, era, date range
- Tag-based browsing
- Featured content highlighting

### 👥 User Contributions
- Public submission form for new entries
- Moderation workflow for review team
- Email notifications for submissions
- Attachment support for documents and media

### 🗂️ Content Organization
- **By Format**: Text documents, audio/video, biographies, experiences
- **By Era**: Early modern, 1800-1950, 1950s, 1960s, 1970s-present
- **By Topic**: Flexible tagging system for themes and subjects

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload CMS 3.x
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Crimson Pro, JetBrains Mono)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd psychedelic-archive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure:
   ```env
   PAYLOAD_SECRET=your-secret-key-here
   DATABASE_URL=postgresql://username:password@localhost:5432/psychedelic_archive
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   # Create the database
   createdb psychedelic_archive

   # Or using psql
   psql -U postgres
   CREATE DATABASE psychedelic_archive;
   \q
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Admin panel: http://localhost:3000/admin

7. **Create your first admin user**
   - Navigate to http://localhost:3000/admin
   - Follow the prompts to create an admin account

## Project Structure

```
psychedelic-archive/
├── app/                    # Next.js app directory
│   ├── (app)/             # Public-facing pages
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── search/        # Search interface
│   │   └── submit/        # Submission form
│   ├── admin/             # Payload CMS admin
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── collections/           # Payload collections
│   ├── Users.ts           # User accounts
│   ├── Entries.ts         # Main archive entries
│   ├── Bios.ts            # Biographical profiles
│   ├── Media.ts           # Media files
│   ├── Submissions.ts     # User submissions
│   ├── Categories.ts      # Content categories
│   ├── Eras.ts            # Historical eras
│   └── Tags.ts            # Content tags
├── components/            # React components
│   ├── ui/                # UI components
│   ├── layout/            # Layout components
│   └── archive/           # Archive-specific components
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── media/             # Uploaded media files
│   └── fonts/             # Custom fonts
├── payload.config.ts      # Payload CMS configuration
├── next.config.js         # Next.js configuration
└── tailwind.config.ts     # Tailwind configuration
```

## CMS Usage Guide

### Collections Overview

#### Entries
Main content collection for archive materials.
- **Fields**: Title, description, content, category, era, tags, attachments
- **Features**: Rich text editing, media uploads, relationships
- **Status**: Draft or Published

#### Biographies
Profiles of researchers, users, patients, and key figures.
- **Types**: Researcher, User/Patient, Personal History, Other
- **Fields**: Name, dates, biography, portrait, related entries
- **Features**: External links, related content

#### Media
Image and document management.
- **Supported**: Images (JPG, PNG, etc.), PDFs
- **Features**: Automatic resizing, thumbnails, captions
- **Sizes**: Thumbnail (400x300), Card (768x1024), Tablet (1024px)

#### Submissions
User-contributed content pending review.
- **Workflow**: Pending → Approved/Rejected → Published
- **Features**: Email notifications, file attachments, review notes
- **Conversion**: Can be converted to Entries after review

#### Categories
Content organization by format.
- **Examples**: Text & Documents, Audio/Video, Biography
- **Features**: Icons, color coding, descriptions

#### Eras
Historical period classification.
- **Examples**: Early Modern, 1800-1950, 1950s, 1960s, etc.
- **Features**: Date ranges, historical context, sorting

#### Tags
Flexible topic-based organization.
- **Usage**: Subjects, substances, themes, people, locations
- **Features**: Auto-suggest, multiple tags per entry

### Adding Content

1. **Login to Admin Panel**
   - Navigate to `/admin`
   - Use your admin credentials

2. **Create Categories and Eras First**
   - Set up your taxonomy before adding entries
   - Add categories with appropriate icons and colors
   - Create era definitions with date ranges

3. **Add Media**
   - Upload images and documents
   - Add descriptive alt text and captions
   - Media is automatically optimized

4. **Create Entries**
   - Fill in title, description, and content
   - Select category and era
   - Add tags for better discoverability
   - Upload featured image and attachments
   - Set status to Published when ready

5. **Manage Submissions**
   - Review user submissions in the Submissions collection
   - Approve, reject, or request changes
   - Convert approved submissions to Entries

### User Roles

- **Admin**: Full access to all content and settings
- **Editor**: Can create, edit, and publish content
- **Contributor**: Can create and edit own content (requires approval)

## Customization

### Styling
- Edit `tailwind.config.ts` for color schemes and design tokens
- Modify `app/globals.css` for global styles
- Component styles use Tailwind utility classes

### Content Types
- Add new collections in `collections/` directory
- Update `payload.config.ts` to register new collections
- Create corresponding UI components as needed

### Features
- Add new pages in `app/(app)/`
- Create API routes in `app/api/`
- Extend UI components in `components/`

## Deployment

### Environment Variables
Set these in your production environment:
```env
PAYLOAD_SECRET=strong-random-secret
DATABASE_URL=your-production-database-url
NEXT_PUBLIC_SERVER_URL=https://your-domain.com
```

### Build
```bash
npm run build
```

### Start
```bash
npm start
```

### Recommended Hosting
- **Vercel**: Optimized for Next.js
- **Railway**: Easy PostgreSQL + Next.js deployment
- **DigitalOcean**: Full control with App Platform
- **Render**: Straightforward deployment

## Database Migrations

Payload CMS handles database schema automatically. When you update collections:

1. Stop the dev server
2. Update collection files
3. Restart the dev server
4. Payload will sync the database schema

## Backup

### Database Backups
```bash
pg_dump psychedelic_archive > backup_$(date +%Y%m%d).sql
```

### Media Backups
```bash
tar -czf media_backup_$(date +%Y%m%d).tar.gz public/media
```

## Contributing

This is a volunteer-based project. To contribute:

1. Submit materials through the website submission form
2. Report issues or suggest features
3. Contact the team for editorial access

## License

Content available under open educational use. All rights reserved to original sources.

## Support

For questions or support:
- Email: contact@psychedelicarchive.com
- Documentation: [Website About Page](/about)

## Acknowledgments

Sponsored by the Humanities Institute at UC Santa Cruz.

Built with ❤️ by volunteers dedicated to preserving psychedelic history.
