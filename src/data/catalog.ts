export type ProductLineId =
  | 'bracelets'
  | 'rings'
  | 'earrings'
  | 'pendants'
  | 'necklaces'
  | 'custom'
  | 'loose-diamonds'
  | 'side-stones'
  | 'fancy-layouts'

export type ProductLine = {
  id: ProductLineId
  name: string
  blurb: string
}

export type CatalogShot = {
  src: string
  alt: string
  label: string
}

export type CatalogPiece = {
  id: string
  title: string
  line: ProductLineId
  /** Cover image shown in the catalog strip */
  image: string
  alt: string
  blurb?: string
  /** Multi-angle studio shots opened on click */
  shots: CatalogShot[]
}

export const productLines: ProductLine[] = [
  {
    id: 'bracelets',
    name: 'Bracelets',
    blurb: 'Tennis and fashion bracelets for everyday case rotation.',
  },
  {
    id: 'rings',
    name: 'Rings',
    blurb: 'Engagement and fashion silhouettes ready for the tray.',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    blurb: 'Studs and drops that photograph clean on the floor.',
  },
  {
    id: 'pendants',
    name: 'Pendants',
    blurb: 'Center-stone pendants with clear retail storytelling.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    blurb: 'Chains and necks built for gifting and bridal add-ons.',
  },
  {
    id: 'custom',
    name: 'Custom shop',
    blurb: 'Pieces built from scratch around your client brief.',
  },
  {
    id: 'loose-diamonds',
    name: 'Loose diamonds',
    blurb: 'Certified loose goods for setters and remounts.',
  },
  {
    id: 'side-stones',
    name: 'Side stones',
    blurb: 'Matched pairs selected for balance and consistency.',
  },
  {
    id: 'fancy-layouts',
    name: 'Fancy layouts',
    blurb: 'Layout ideas for fancy shapes beyond the ordinary.',
  },
]

export const catalogPieces: CatalogPiece[] = [
  {
    id: 'bracelet-bezel-tennis',
    title: 'Bezel tennis bracelet',
    line: 'bracelets',
    image: 'images/products/bezel-tennis/cover.jpg',
    alt: 'Yellow gold round bezel-set diamond tennis bracelet on cream silk',
    blurb: 'Round brilliant diamonds in yellow-gold bezel links. Full piece, casting, face, and clasp views.',
    shots: [
      {
        src: 'images/products/bezel-tennis/cover.jpg',
        alt: 'Full yellow gold round bezel tennis bracelet on cream silk',
        label: 'Full',
      },
      {
        src: 'images/products/bezel-tennis/layout.jpg',
        alt: 'Bezel tennis bracelet in S-curve layout on cream silk',
        label: 'Layout',
      },
      {
        src: 'images/products/bezel-tennis/casting.jpg',
        alt: 'Side casting profile of yellow gold bezel tennis links',
        label: 'Casting',
      },
      {
        src: 'images/products/bezel-tennis/face.jpg',
        alt: 'Top face of round diamonds in yellow gold bezels',
        label: 'Face',
      },
      {
        src: 'images/products/bezel-tennis/clasp.jpg',
        alt: 'Clasp detail of yellow gold bezel tennis bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-pear',
    title: 'Pear tennis bracelet',
    line: 'bracelets',
    image: 'images/products/pear-tennis/cover.jpg',
    alt: 'Yellow gold pear-cut diamond tennis bracelet with alternating pears',
    blurb: 'Alternating pear-cut diamonds in yellow gold. More angles coming as we shoot them.',
    shots: [
      {
        src: 'images/products/pear-tennis/cover.jpg',
        alt: 'Full pear-cut diamond tennis bracelet on cream silk',
        label: 'Full',
      },
      {
        src: 'images/products/pear-tennis/layout.jpg',
        alt: 'Pear tennis bracelet layout on cream silk',
        label: 'Layout',
      },
    ],
  },
  {
    id: 'bracelet-heart',
    title: 'Heart link bracelet',
    line: 'bracelets',
    image: 'images/products/heart-link/cover.jpg',
    alt: 'Rose gold heart-link diamond bracelet with pavé halos',
    blurb: 'Heart links with center stones and pavé halos. More angles coming as we shoot them.',
    shots: [
      {
        src: 'images/products/heart-link/cover.jpg',
        alt: 'Full heart-link diamond bracelet on cream silk',
        label: 'Full',
      },
      {
        src: 'images/products/heart-link/layout.jpg',
        alt: 'Heart-link bracelet section on cream silk',
        label: 'Layout',
      },
    ],
  },
  {
    id: 'rings',
    title: 'Ring collection',
    line: 'rings',
    image: 'images/rings.jpg',
    alt: 'Three gold diamond rings on a cream stone surface',
    blurb: 'Placeholder cover — replace with your tray photography next.',
    shots: [
      {
        src: 'images/rings.jpg',
        alt: 'Three gold diamond rings on a cream stone surface',
        label: 'Cover',
      },
    ],
  },
  {
    id: 'earrings',
    title: 'Earring pairs',
    line: 'earrings',
    image: 'images/earrings.jpg',
    alt: 'Diamond stud earrings on ivory velvet',
    blurb: 'Placeholder cover — replace with your tray photography next.',
    shots: [
      {
        src: 'images/earrings.jpg',
        alt: 'Diamond stud earrings on ivory velvet',
        label: 'Cover',
      },
    ],
  },
  {
    id: 'pendant',
    title: 'Pendant work',
    line: 'pendants',
    image: 'images/pendant.jpg',
    alt: 'Diamond pendant necklace on beige linen',
    blurb: 'Placeholder cover — replace with your tray photography next.',
    shots: [
      {
        src: 'images/pendant.jpg',
        alt: 'Diamond pendant necklace on beige linen',
        label: 'Cover',
      },
    ],
  },
  {
    id: 'necklace',
    title: 'Necklace line',
    line: 'necklaces',
    image: 'images/necklace.jpg',
    alt: 'Gold chain necklace with diamond accents',
    blurb: 'Placeholder cover — replace with your tray photography next.',
    shots: [
      {
        src: 'images/necklace.jpg',
        alt: 'Gold chain necklace with diamond accents',
        label: 'Cover',
      },
    ],
  },
  {
    id: 'diamond',
    title: 'Certified loose',
    line: 'loose-diamonds',
    image: 'images/diamond.jpg',
    alt: 'Brilliant cut loose diamond on cream silk',
    blurb: 'Placeholder cover — replace with your loose goods photography next.',
    shots: [
      {
        src: 'images/diamond.jpg',
        alt: 'Brilliant cut loose diamond on cream silk',
        label: 'Cover',
      },
    ],
  },
]
