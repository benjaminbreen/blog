# Quick Start Guide

Get your Psychedelic Archive running in 5 minutes!

## Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **PostgreSQL** - [Download](https://www.postgresql.org/download/)

### Installing PostgreSQL

**macOS:**
```bash
brew install postgresql
brew services start postgresql
```

**Ubuntu/Debian:**
```bash
sudo apt-get install postgresql
sudo service postgresql start
```

**Windows:**
Download installer from [postgresql.org](https://www.postgresql.org/download/windows/)

## One-Command Setup

```bash
cd psychedelic-archive
./setup.sh
```

That's it! The script will:
1. ✅ Check PostgreSQL is installed
2. ✅ Start PostgreSQL if needed
3. ✅ Create database
4. ✅ Install npm dependencies
5. ✅ Create .env file
6. ✅ Start dev server
7. ✅ Guide you to create admin user
8. ✅ Import all 12 archive entries

## Manual Setup (if you prefer)

### 1. Create Database
```bash
createdb psychedelic_archive
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env
# Edit .env if needed (default values work for standard PostgreSQL setup)
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Create Admin User
Open http://localhost:3000/admin and fill in the form

### 6. Import Archive Entries
```bash
npm run import:entries
```

## What You Get

After setup, your archive includes:

### Content Ready to Use
- ✅ **12 Archive Entries** (automatically imported)
  - 1750: Padre Veigl encounters Ayahuasca
  - 1857: The Hasheesh Eater
  - 1882: William James on Nitrous Oxide
  - 1893: Consciousness under cannabis indica
  - 1946: "Let there be Light"
  - 1957: Psychoanalysis and LSD-25
  - 1962-1969: Various entries on dolphins, LSD research, Chicago Seven

### Structure
- ✅ Categories: Text & Documents, Audio & Video
- ✅ Eras: 1700s, 1800-1950, 1950s, 1960s
- ✅ 80+ Tags for organization
- ✅ Personal Histories section

### Pages
- ✅ Homepage with category browsing
- ✅ `/entries` - Browse all archive entries
- ✅ `/bios` - Biographies section
- ✅ `/personal-histories` - Experience reports & testimonies
- ✅ `/submit` - User submission form
- ✅ `/search` - Advanced search
- ✅ `/about` - About the archive

## Next Steps: Add Biographical Entries

Go to http://localhost:3000/admin → Bios → Create New

Add these 5 people (data from your Squarespace site):

1. **Luisa de Álvarez de Toledo** (1915-1990)
   - Type: Researcher
   - Bio text provided in earlier messages

2. **Sidney Cohen** (1910-1987)
   - Type: Researcher
   - Bio text provided in earlier messages

3. **Betty Grover Eisner** (1915-2004)
   - Type: Researcher
   - Bio text provided in earlier messages

4. **Efrén Carlos del Pozo** (1907-1979)
   - Type: Researcher
   - Bio text provided in earlier messages

5. **Myron Stolaroff** (1920-2013)
   - Type: Researcher
   - Bio text provided in earlier messages

## Accessing Your Archive

- **Homepage:** http://localhost:3000
- **Admin Panel:** http://localhost:3000/admin
- **Browse Entries:** http://localhost:3000/entries
- **Biographies:** http://localhost:3000/bios
- **Personal Histories:** http://localhost:3000/personal-histories

## Troubleshooting

### PostgreSQL not running
```bash
# macOS
brew services start postgresql

# Linux
sudo service postgresql start
```

### Database connection error
Check your `.env` file - the DATABASE_URL should match your PostgreSQL setup:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/psychedelic_archive
```

If you have a different username/password, update accordingly.

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Import fails
Make sure you've created an admin user first at `/admin`

### Can't access /admin
Make sure the dev server is running (`npm run dev`)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Import archive entries
npm run import:entries

# Generate TypeScript types from Payload schema
npm run generate:types

# Run linter
npm run lint
```

## Need Help?

- Check `README.md` for full documentation
- Check `CMS_GUIDE.md` for content management instructions
- Check `DEPLOYMENT.md` for production deployment
- Review `ARCHIVE_ENTRIES_DATA.md` for entry data structure

## What to Do After Setup

1. **Add the 5 biographical entries** (see data in earlier messages)
2. **Upload images** for biographies and entries
3. **Review imported entries** - add full text where marked "to be added"
4. **Customize** - adjust colors, add your logo, etc.
5. **Invite team members** - Create additional user accounts with different roles

Enjoy your new archive! 🎨
