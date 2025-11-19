/**
 * Database seeding script
 * Run this after setting up Payload to populate initial categories and eras
 *
 * Usage: This would be called from a Payload hook or standalone script
 */

export const initialCategories = [
  {
    name: 'Text & Documents',
    slug: 'text',
    description: 'Historical documents, research papers, newspaper articles, and primary source materials',
    icon: 'FileText',
    color: 'purple',
  },
  {
    name: 'Audio & Video',
    slug: 'media',
    description: 'Interviews, lectures, documentaries, and recorded oral histories',
    icon: 'Video',
    color: 'blue',
  },
  {
    name: 'Experience Reports',
    slug: 'experience',
    description: 'First-person accounts and personal narratives',
    icon: 'User',
    color: 'green',
  },
  {
    name: 'Research Papers',
    slug: 'research',
    description: 'Academic and scientific publications',
    icon: 'BookOpen',
    color: 'orange',
  },
]

export const initialEras = [
  {
    name: 'Early Modern',
    slug: 'early-modern',
    startYear: 1500,
    endYear: 1799,
    description: '<p>Early European encounters with psychoactive plants and substances, including colonial-era accounts and indigenous knowledge documentation.</p>',
    order: 1,
  },
  {
    name: '1800-1950',
    slug: '1800-1950',
    startYear: 1800,
    endYear: 1950,
    description: '<p>The industrial and modern era, including early pharmaceutical development, literary and artistic movements, and pre-war scientific exploration.</p>',
    order: 2,
  },
  {
    name: '1950s',
    slug: '1950s',
    startYear: 1950,
    endYear: 1959,
    description: '<p>The research renaissance: LSD synthesis, early clinical trials, and the beginning of modern psychedelic research.</p>',
    order: 3,
  },
  {
    name: '1960s',
    slug: '1960s',
    startYear: 1960,
    endYear: 1969,
    description: '<p>Cultural revolution and counterculture movement, peak research activity, and the beginning of prohibition.</p>',
    order: 4,
  },
  {
    name: '1970s-1990s',
    slug: '1970s-1990s',
    startYear: 1970,
    endYear: 1999,
    description: '<p>The prohibition era, underground movements, and the slow revival of research interest.</p>',
    order: 5,
  },
  {
    name: '2000s-Present',
    slug: '2000s-present',
    startYear: 2000,
    endYear: new Date().getFullYear(),
    description: '<p>The psychedelic renaissance: renewed clinical research, therapeutic applications, and changing social attitudes.</p>',
    order: 6,
  },
]

export const initialTags = [
  { name: 'LSD', slug: 'lsd' },
  { name: 'Psilocybin', slug: 'psilocybin' },
  { name: 'Mescaline', slug: 'mescaline' },
  { name: 'DMT', slug: 'dmt' },
  { name: 'MDMA', slug: 'mdma' },
  { name: 'Ayahuasca', slug: 'ayahuasca' },
  { name: 'Cannabis', slug: 'cannabis' },
  { name: 'Research', slug: 'research' },
  { name: 'Therapy', slug: 'therapy' },
  { name: 'Culture', slug: 'culture' },
  { name: 'Art', slug: 'art' },
  { name: 'Music', slug: 'music' },
  { name: 'Medicine', slug: 'medicine' },
  { name: 'Indigenous', slug: 'indigenous' },
  { name: 'Counterculture', slug: 'counterculture' },
]

// Function to seed the database (would be called from a Payload hook)
export async function seedDatabase(payload: any) {
  try {
    // Seed Categories
    for (const category of initialCategories) {
      await payload.create({
        collection: 'categories',
        data: category,
      })
    }

    // Seed Eras
    for (const era of initialEras) {
      await payload.create({
        collection: 'eras',
        data: era,
      })
    }

    // Seed Tags
    for (const tag of initialTags) {
      await payload.create({
        collection: 'tags',
        data: tag,
      })
    }

    console.log('✅ Database seeded successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
