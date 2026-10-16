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

export type CatalogPiece = {
  id: string
  title: string
  line: ProductLineId
  image: string
  alt: string
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
    id: 'rings',
    title: 'Ring collection',
    line: 'rings',
    image: '/images/rings.jpg',
    alt: 'Three gold diamond rings on a cream stone surface',
  },
  {
    id: 'bracelet',
    title: 'Bracelet line',
    line: 'bracelets',
    image: '/images/bracelet.jpg',
    alt: 'Gold diamond tennis bracelet on cream fabric',
  },
  {
    id: 'earrings',
    title: 'Earring pairs',
    line: 'earrings',
    image: '/images/earrings.jpg',
    alt: 'Diamond stud earrings on ivory velvet',
  },
  {
    id: 'pendant',
    title: 'Pendant work',
    line: 'pendants',
    image: '/images/pendant.jpg',
    alt: 'Diamond pendant necklace on beige linen',
  },
  {
    id: 'necklace',
    title: 'Necklace line',
    line: 'necklaces',
    image: '/images/necklace.jpg',
    alt: 'Gold chain necklace with diamond accents',
  },
  {
    id: 'diamond',
    title: 'Certified loose',
    line: 'loose-diamonds',
    image: '/images/diamond.jpg',
    alt: 'Brilliant cut loose diamond on cream silk',
  },
]
