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
    title: 'Twisted bezel bracelet',
    line: 'bracelets',
    image: 'images/products/bezel-tennis/cover.jpg',
    alt: 'Yellow gold twisted bezel diamond bracelet in oval layout on cream silk',
    blurb:
      'Yellow-gold stacked/ribbed bezel links with round diamonds. Full locked; face and clasp from inventory photos.',
    shots: [
      {
        src: 'images/products/bezel-tennis/cover.jpg',
        alt: 'Full yellow gold twisted bezel diamond bracelet on cream silk',
        label: 'Full',
      },
      {
        src: 'images/products/bezel-tennis/face.jpg',
        alt: 'Face view of round diamonds in twisted bezel settings',
        label: 'Face',
      },
      {
        src: 'images/products/bezel-tennis/clasp.jpg',
        alt: 'Clasp detail of twisted bezel bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-pear',
    title: 'Pear tennis bracelet',
    line: 'bracelets',
    image: 'images/products/pear-tennis/cover.jpg',
    alt: 'Yellow gold alternating pear-cut diamond tennis bracelet on ivory silk',
    blurb:
      'Alternating pear-cut diamonds in yellow gold — tip up / tip down the full length. Full, layout, face, and clasp views.',
    shots: [
      {
        src: 'images/products/pear-tennis/cover.jpg',
        alt: 'Full alternating pear tennis bracelet with clean clasps',
        label: 'Full',
      },
      {
        src: 'images/products/pear-tennis/layout.jpg',
        alt: 'Layout of alternating pear tennis bracelet on ivory silk',
        label: 'Layout',
      },
      {
        src: 'images/products/pear-tennis/face.jpg',
        alt: 'Face detail of alternating pear diamonds in yellow gold',
        label: 'Face',
      },
      {
        src: 'images/products/pear-tennis/clasp.jpg',
        alt: 'Clasp end with consistent pear diamonds after the box clasp',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-heart',
    title: 'Heart link bracelet',
    line: 'bracelets',
    image: 'images/products/heart-link/cover.jpg',
    alt: 'Rose gold heart-link diamond bracelet with pavé halos on ivory silk',
    blurb: '14K rose gold heart links with center heart diamonds and pavé halos. Full, layout, face, and casting views.',
    shots: [
      {
        src: 'images/products/heart-link/cover.jpg',
        alt: 'Full rose gold heart-link diamond bracelet on cool ivory silk',
        label: 'Full',
      },
      {
        src: 'images/products/heart-link/layout.jpg',
        alt: 'Rose gold heart-link bracelet layout on ivory fabric',
        label: 'Layout',
      },
      {
        src: 'images/products/heart-link/face.jpg',
        alt: 'Face view of rose gold heart links with pavé halos',
        label: 'Face',
      },
      {
        src: 'images/products/heart-link/casting.jpg',
        alt: 'Side casting of rose gold heart-link bracelet',
        label: 'Casting',
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
