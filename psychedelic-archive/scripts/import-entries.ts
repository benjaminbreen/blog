/**
 * Import script for archive entries
 * Run with: npm run import-entries
 *
 * This script will:
 * 1. Create necessary categories, eras, and tags
 * 2. Import all archive entries with proper metadata
 * 3. Link related content
 */

import { getPayload } from 'payload'
import config from '../payload.config'

const archiveEntries = [
  {
    title: '1750: Padre Veigl encounters Ayahuasca',
    slug: '1750-padre-veigl-ayahuasca',
    description: "An 18th-century Jesuit's account of ayahuasca usage in the Amazon basin, documenting indigenous religious practices and psychoactive plant use.",
    author: 'Franz Xaver Veigl (1723-1798)',
    date: '1750-01-01',
    source: 'Veigl, "Provinciae Maynensis in America Medidionali, ad annum usque 1768," in Christoph Gottlied von Murr, Journal zur Kunstgeschichte und zur allgemelnen Litteratur',
    category: 'text',
    era: '1700s',
    tags: ['Ayahuasca', 'Jesuits', 'Amazonia', '1750s', 'Indigenous', 'Religious practices', 'Colonial accounts'],
    content: `
      <p>Franz Xaver Veigl's account provides one of the earliest European descriptions of ayahuasca use in the Amazon basin.</p>
      <h3>From pages 138-39:</h3>
      <p>They usually strive for the rank of Curácam, which is esteemed for its courage or rather the reputation of magical skill...</p>
      <p>It is widely known that after drinking the juice of the Campana, or that which they call hayac huasca, one is presented with absolutely enormous visions, and indeed these visionaries [visionarios], incapable of controlling their minds, seem to swiftly journey through remote and diverse paths while alive, and only after several days have passed do they return to themselves and their senses…</p>
      <h3>From pages 55-56:</h3>
      <p>Without doubt, there is a superstition around a drink brewed from the bark of what is called Hayac huasca or 'bitter rope,' which seizes the fully susceptible for a long-lasting rapture, during which they dream wonderful dreams and see what they wish to know in visions...</p>
    `,
    externalUrl: 'https://books.google.com',
    status: 'published',
  },
  {
    title: '1857: The Hasheesh Eater',
    slug: '1857-hasheesh-eater',
    description: 'Excerpt from one of the earliest published book-length accounts of cannabis intoxication. A seminal work in psychedelic literature documenting personal experiences with hashish.',
    author: 'Fitz Hugh Ludlow',
    date: '1857-01-01',
    source: 'The Hasheesh Eater: Being Passages from the Life of a Pythagorean',
    category: 'text',
    era: '1800-1950',
    tags: ['Cannabis', 'Hashish', '1850s', 'Literature', 'Experience reports', 'Victorian era'],
    content: '<p>Full text excerpt to be added from The Hasheesh Eater...</p>',
    status: 'published',
  },
  {
    title: '1882: William James on Nitrous Oxide',
    slug: '1882-william-james-nitrous-oxide',
    description: "The psychologist William James takes a high dose of nitrous oxide and thinks about Hegel. A fascinating and hilarious early foray into the 'trip report' genre, exploring altered states and philosophical insights.",
    author: 'William James',
    date: '1882-04-01',
    source: 'Mind, Vol. 7, No. 26 (April 1882)',
    category: 'text',
    era: '1800-1950',
    tags: ['Nitrous oxide', 'William James', '1880s', 'Philosophy', 'Psychology', 'Experience reports', 'Phenomenology'],
    content: '<p>Full text of William James\'s nitrous oxide account...</p>',
    status: 'published',
  },
  {
    title: '1893: Consciousness under the influence of cannabis indica',
    slug: '1893-consciousness-cannabis-indica',
    description: '"The drug finally produced faint illusions, chiefly ceiling as decorated with colored designs, and finally sleep." An early scientific investigation into the phenomenology of cannabis intoxication.',
    author: 'Unknown',
    date: '1893-01-01',
    source: 'Academic journal (to be determined)',
    category: 'text',
    era: '1800-1950',
    tags: ['Cannabis', 'Cannabis indica', '1890s', 'Medical research', 'Phenomenology', 'Consciousness studies'],
    content: '<p>Full text of the 1893 consciousness study...</p>',
    status: 'published',
  },
  {
    title: '1946: "Let there be Light"',
    slug: '1946-let-there-be-light',
    description: "John Huston's 1946 film about recovery from wartime trauma, which was produced by the US government but never released publicly. Portrays narcosynthesis, a precursor to psychedelic-assisted therapy.",
    author: 'John Huston (director)',
    date: '1946-01-01',
    source: 'US Army Pictorial Services',
    category: 'media',
    era: '1800-1950',
    tags: ['Narcosynthesis', 'PTSD', '1940s', 'Documentary', 'Military', 'Censorship', 'John Huston', 'War trauma'],
    content: '<p>John Huston\'s powerful documentary "Let There Be Light" follows the treatment of World War II veterans suffering from PTSD at Mason General Hospital...</p>',
    status: 'published',
  },
  {
    title: '1957: "Psychoanalysis and LSD-25: Foundations for a combined therapeutic technique"',
    slug: '1957-psychoanalysis-lsd-alvarez-de-toledo',
    description: 'Luisa de Álvarez de Toledo discusses the use of LSD in "combined therapy," focusing on how LSD facilitates psychological insights.',
    author: 'Luisa de Álvarez de Toledo',
    date: '1957-01-01',
    source: 'Original Spanish journal',
    category: 'text',
    era: '1950s',
    tags: ['LSD', 'Psychoanalysis', 'Argentina', '1950s', 'Therapy', 'Psychedelic therapy', 'Combined therapy'],
    relatedBioSlug: 'luisa-de-alvarez-de-toledo',
    content: '<p>Article discussing combined therapy with LSD and psychoanalysis...</p>',
    status: 'published',
  },
  {
    title: '1962: "Dolphin\'s Voice May Be Key to Communications"',
    slug: '1962-dolphin-voice-communications',
    description: "Newspaper article from 1962 describing John C. Lilly's research at the Communications Research Institute, where Lilly would later dose his dolphins with LSD.",
    author: 'Unknown',
    date: '1962-01-01',
    source: 'Newspaper (1962)',
    category: 'text',
    era: '1960s',
    tags: ['John C. Lilly', 'Dolphins', '1960s', 'Animal research', 'Communication research', 'Interspecies communication'],
    content: '<p>Newspaper article about John C. Lilly\'s dolphin research...</p>',
    status: 'published',
  },
  {
    title: '1963: "In a drug-filled chalice, total love"',
    slug: '1963-drug-filled-chalice-total-love',
    description: "Article about a Menlo Park woman's positive experience with LSD-assisted psychotherapy.",
    author: 'Unknown',
    date: '1963-01-03',
    source: 'News Call Bulletin, January 3, 1963',
    category: 'text',
    era: '1960s',
    tags: ['LSD', 'Psychotherapy', '1960s', 'Menlo Park', 'Media coverage', 'Psychedelic therapy', 'Patient narratives'],
    content: '<p>Full newspaper article text...</p>',
    status: 'published',
  },
  {
    title: '1965: Recording of the dolphin Peter after being given LSD',
    slug: '1965-dolphin-peter-lsd-recording',
    description: "A recording of John C. Lilly's research on dolphins featuring sounds of Peter the dolphin after being given LSD.",
    author: 'John C. Lilly',
    date: '1965-01-01',
    source: 'Communications Research Institute',
    category: 'media',
    era: '1960s',
    tags: ['John C. Lilly', 'Dolphins', 'LSD', '1960s', 'Animal research', 'Audio recording', 'Controversial research'],
    content: '<p>Audio recording of dolphin vocalizations after LSD administration...</p>',
    status: 'published',
  },
  {
    title: "1965: Sidney Cohen's UCLA Speech on ESP",
    slug: '1965-sidney-cohen-ucla-esp',
    description: "Sidney Cohen's 1965 UCLA speech on ESP and psychedelics.",
    author: 'Sidney Cohen',
    date: '1965-01-01',
    source: 'UCLA lecture recording',
    category: 'media',
    era: '1960s',
    tags: ['Sidney Cohen', 'ESP', 'UCLA', '1960s', 'Parapsychology', 'Audio recording', 'Lectures'],
    relatedBioSlug: 'sidney-cohen',
    content: '<p>Audio recording of lecture on ESP and psychedelics...</p>',
    status: 'published',
  },
  {
    title: "1966: Sidney Cohen's UCLA Speech on Psychedelics",
    slug: '1966-sidney-cohen-ucla-psychedelics',
    description: 'Cohen\'s 1966 UCLA speech calling for "using the anthropological approach of insinuating a valuable drug of this sort into our culture."',
    author: 'Sidney Cohen',
    date: '1966-03-02',
    source: 'UCLA lecture recording, March 2, 1966',
    category: 'media',
    era: '1960s',
    tags: ['Sidney Cohen', 'LSD', 'UCLA', '1960s', 'Drug policy', 'Audio recording', 'Lectures', 'Cultural integration'],
    relatedBioSlug: 'sidney-cohen',
    content: '<p>In this March 2, 1966 lecture at UCLA, Dr. Sidney Cohen discusses the cultural implications of LSD...</p>',
    status: 'published',
  },
  {
    title: '1969: Timothy Leary testifies at the Chicago Seven trial',
    slug: '1969-timothy-leary-chicago-seven-testimony',
    description: "Timothy Leary's testimony during the Chicago Seven trial highlighted his controversial stance on psychedelics as tools for consciousness expansion.",
    author: 'Timothy Leary',
    date: '1969-01-01',
    source: 'Chicago Seven trial transcript',
    category: 'text',
    era: '1960s',
    tags: ['Timothy Leary', 'Chicago Seven', '1960s', 'Testimony', 'Counterculture', 'Legal proceedings', 'Political activism'],
    content: '<p>Full testimony transcript...</p>',
    status: 'published',
  },
]

async function runImport() {
  console.log('Starting import...')

  const payload = await getPayload({ config })

  // First, create categories if they don't exist
  const categories = [
    { name: 'Text & Documents', slug: 'text', description: 'Historical documents and written materials', icon: 'FileText', color: 'purple' },
    { name: 'Audio & Video', slug: 'media', description: 'Recordings and multimedia', icon: 'Video', color: 'blue' },
  ]

  for (const cat of categories) {
    try {
      const existing = await payload.find({
        collection: 'categories',
        where: { slug: { equals: cat.slug } },
      })

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'categories',
          data: cat,
        })
        console.log(`✓ Created category: ${cat.name}`)
      }
    } catch (error) {
      console.error(`Error creating category ${cat.name}:`, error)
    }
  }

  // Create eras if they don't exist
  const eras = [
    { name: 'Early Modern', slug: 'early-modern', startYear: 1500, endYear: 1799, order: 1 },
    { name: '1700s', slug: '1700s', startYear: 1700, endYear: 1799, order: 2 },
    { name: '1800-1950', slug: '1800-1950', startYear: 1800, endYear: 1950, order: 3 },
    { name: '1950s', slug: '1950s', startYear: 1950, endYear: 1959, order: 4 },
    { name: '1960s', slug: '1960s', startYear: 1960, endYear: 1969, order: 5 },
  ]

  for (const era of eras) {
    try {
      const existing = await payload.find({
        collection: 'eras',
        where: { slug: { equals: era.slug } },
      })

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'eras',
          data: era,
        })
        console.log(`✓ Created era: ${era.name}`)
      }
    } catch (error) {
      console.error(`Error creating era ${era.name}:`, error)
    }
  }

  // Create tags
  const allTags = new Set<string>()
  archiveEntries.forEach(entry => entry.tags.forEach(tag => allTags.add(tag)))

  for (const tagName of Array.from(allTags)) {
    try {
      const slug = tagName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-')
      const existing = await payload.find({
        collection: 'tags',
        where: { slug: { equals: slug } },
      })

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'tags',
          data: { name: tagName, slug },
        })
        console.log(`✓ Created tag: ${tagName}`)
      }
    } catch (error) {
      console.error(`Error creating tag ${tagName}:`, error)
    }
  }

  // Now create entries
  for (const entry of archiveEntries) {
    try {
      // Check if entry already exists
      const existing = await payload.find({
        collection: 'entries',
        where: { slug: { equals: entry.slug } },
      })

      if (existing.docs.length > 0) {
        console.log(`⊘ Entry already exists: ${entry.title}`)
        continue
      }

      // Find category ID
      const categoryResult = await payload.find({
        collection: 'categories',
        where: { slug: { equals: entry.category } },
      })
      const categoryId = categoryResult.docs[0]?.id

      // Find era ID
      const eraResult = await payload.find({
        collection: 'eras',
        where: { slug: { equals: entry.era } },
      })
      const eraId = eraResult.docs[0]?.id

      // Find tag IDs
      const tagIds = []
      for (const tagName of entry.tags) {
        const slug = tagName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-')
        const tagResult = await payload.find({
          collection: 'tags',
          where: { slug: { equals: slug } },
        })
        if (tagResult.docs[0]) {
          tagIds.push(tagResult.docs[0].id)
        }
      }

      // Find related bio if specified
      let relatedBios = []
      if (entry.relatedBioSlug) {
        const bioResult = await payload.find({
          collection: 'bios',
          where: { slug: { equals: entry.relatedBioSlug } },
        })
        if (bioResult.docs[0]) {
          relatedBios = [bioResult.docs[0].id]
        }
      }

      // Create entry
      await payload.create({
        collection: 'entries',
        data: {
          title: entry.title,
          slug: entry.slug,
          description: entry.description,
          content: entry.content,
          author: entry.author,
          date: entry.date,
          source: entry.source,
          category: categoryId,
          era: eraId,
          tags: tagIds,
          relatedBios: relatedBios,
          externalUrl: entry.externalUrl || '',
          status: entry.status,
          featured: false,
        },
      })

      console.log(`✓ Created entry: ${entry.title}`)
    } catch (error) {
      console.error(`Error creating entry ${entry.title}:`, error)
    }
  }

  console.log('\n✅ Import complete!')
  process.exit(0)
}

runImport().catch((error) => {
  console.error('Import failed:', error)
  process.exit(1)
})
