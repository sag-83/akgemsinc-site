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
  /** Studio shots opened on click */
  shots: CatalogShot[]
}

export const productLines: ProductLine[] = [
  {
    id: 'bracelets',
    name: 'Bracelets',
    blurb: 'Diamond tennis and fashion bracelets.',
  },
  {
    id: 'rings',
    name: 'Rings',
    blurb: 'Engagement and fashion rings.',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    blurb: 'Studs and drops for the case.',
  },
  {
    id: 'pendants',
    name: 'Pendants',
    blurb: 'Center-stone pendants and solitaires.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    blurb: 'Chains and diamond necks.',
  },
  {
    id: 'custom',
    name: 'Custom shop',
    blurb: 'Made-to-order pieces around your brief.',
  },
  {
    id: 'loose-diamonds',
    name: 'Loose diamonds',
    blurb: 'Certified loose goods for setters and remounts.',
  },
  {
    id: 'side-stones',
    name: 'Side stones',
    blurb: 'Matched pairs for balance and consistency.',
  },
  {
    id: 'fancy-layouts',
    name: 'Fancy layouts',
    blurb: 'Fancy-shape layouts and special orders.',
  },
]

export const catalogPieces: CatalogPiece[] = [
  {
    id: 'bracelet-bezel-tennis',
    title: 'Twisted bezel bracelet',
    line: 'bracelets',
    image: 'images/products/bezel-tennis/cover.jpg',
    alt: 'Yellow gold twisted bezel diamond bracelet on cream silk',
    blurb: 'Yellow gold twisted bezel links set with round diamonds.',
    shots: [
      {
        src: 'images/products/bezel-tennis/cover.jpg',
        alt: 'Yellow gold twisted bezel diamond bracelet on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/bezel-tennis/face.jpg',
        alt: 'Close view of round diamonds in twisted bezel settings',
        label: 'Detail',
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
    blurb: 'Alternating pear-cut diamonds set in yellow gold.',
    shots: [
      {
        src: 'images/products/pear-tennis/cover.jpg',
        alt: 'Yellow gold alternating pear tennis bracelet on ivory silk',
        label: 'Overview',
      },
      {
        src: 'images/products/pear-tennis/face.jpg',
        alt: 'Close view of alternating pear diamonds in yellow gold',
        label: 'Detail',
      },
      {
        src: 'images/products/pear-tennis/clasp.jpg',
        alt: 'Clasp end of pear tennis bracelet',
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
    blurb: '14K rose gold heart links with center heart diamonds and pavé halos.',
    shots: [
      {
        src: 'images/products/heart-link/cover.jpg',
        alt: 'Rose gold heart-link diamond bracelet on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/heart-link/face.jpg',
        alt: 'Close view of rose gold heart links on cream silk',
        label: 'Detail',
      },
      {
        src: 'images/products/heart-link/clasp.jpg',
        alt: 'Clasp end of rose gold heart-link bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-multi-shape',
    title: 'Multi-shape tennis bracelet',
    line: 'bracelets',
    image: 'images/products/multi-shape/studio-full.jpg',
    alt: '14K white gold multi-shape diamond tennis bracelet on cream silk',
    blurb: '14K white gold tennis bracelet with mixed fancy-cut diamonds in a repeating heart, emerald, oval, marquise, and pear pattern.',
    shots: [
      {
        src: 'images/products/multi-shape/studio-full.jpg',
        alt: '14K white gold multi-shape diamond tennis bracelet on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/multi-shape/studio-clasp.jpg',
        alt: 'Diamond-set clasp on multi-shape white gold tennis bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-emerald-tennis',
    title: 'Emerald-cut tennis bracelet',
    line: 'bracelets',
    image: 'images/products/emerald-tennis/cover.jpg',
    alt: 'Yellow gold emerald-cut diamond tennis bracelet on cream silk',
    blurb: 'Yellow gold tennis bracelet with matched emerald-cut diamonds.',
    shots: [
      {
        src: 'images/products/emerald-tennis/cover.jpg',
        alt: 'Yellow gold emerald-cut diamond tennis bracelet on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/emerald-tennis/face.jpg',
        alt: 'Close view of emerald-cut diamonds in yellow gold',
        label: 'Detail',
      },
      {
        src: 'images/products/emerald-tennis/clasp.jpg',
        alt: 'Clasp on yellow gold emerald-cut tennis bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-round-tennis',
    title: 'Round tennis bracelet',
    line: 'bracelets',
    image: 'images/products/round-tennis/cover.jpg',
    alt: 'Yellow gold round brilliant diamond tennis bracelet on cream silk',
    blurb: '14K yellow gold tennis bracelet with round brilliant diamonds.',
    shots: [
      {
        src: 'images/products/round-tennis/cover.jpg',
        alt: 'Yellow gold round diamond tennis bracelet on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/round-tennis/face.jpg',
        alt: 'Close view of round brilliant diamonds in yellow gold',
        label: 'Detail',
      },
      {
        src: 'images/products/round-tennis/clasp.jpg',
        alt: 'Clasp on yellow gold round diamond tennis bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'ring-titanium-exclusive',
    title: 'Exclusive waffle titanium',
    line: 'rings',
    image: 'images/products/titanium-ring/cover.jpg',
    alt: 'Matte black titanium ring with waffle texture and yellow-gold bezel diamond on cream silk',
    blurb: 'Exclusive AK Gems design. Matte black titanium waffle band with a 14K yellow-gold bezel and about 3 ct square diamond.',
    shots: [
      {
        src: 'images/products/titanium-ring/cover.jpg',
        alt: 'Exclusive black titanium diamond ring on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/titanium-ring/face.jpg',
        alt: 'Face view of square diamond in yellow-gold bezel on titanium band',
        label: 'Detail',
      },
      {
        src: 'images/products/titanium-ring/profile.jpg',
        alt: 'Profile of waffle-textured black titanium ring',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-ring/angle.jpg',
        alt: 'Three-quarter view of exclusive titanium diamond ring',
        label: 'Side',
      },
    ],
  },
  {
    id: 'ring-titanium-smooth',
    title: 'Smooth titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-smooth/cover.jpg',
    alt: 'Smooth matte black titanium ring with yellow-gold emerald-cut diamond bezel on cream silk',
    blurb: 'Smooth matte black titanium band with a yellow-gold bezel and about 3 ct emerald-cut diamond.',
    shots: [
      {
        src: 'images/products/titanium-smooth/cover.jpg',
        alt: 'Smooth black titanium emerald-cut diamond ring on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/titanium-smooth/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold bezel',
        label: 'Detail',
      },
      {
        src: 'images/products/titanium-smooth/profile.jpg',
        alt: 'Profile of smooth black titanium ring with gold bezel',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-smooth/angle.jpg',
        alt: 'Three-quarter view of smooth titanium emerald ring',
        label: 'Side',
      },
    ],
  },
  {
    id: 'ring-titanium-ribbed',
    title: 'Ribbed titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-ribbed/cover.jpg',
    alt: 'Matte black ribbed titanium ring with yellow-gold emerald-cut diamond bezel on cream silk',
    blurb: 'Matte black ribbed titanium band with a yellow-gold bezel and about 2 ct emerald-cut diamond.',
    shots: [
      {
        src: 'images/products/titanium-ribbed/cover.jpg',
        alt: 'Ribbed black titanium emerald-cut diamond ring on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/titanium-ribbed/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold bezel on ribbed titanium',
        label: 'Detail',
      },
      {
        src: 'images/products/titanium-ribbed/profile.jpg',
        alt: 'Profile of vertical-rib black titanium ring with gold bezel',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-ribbed/angle.jpg',
        alt: 'Three-quarter view of ribbed titanium emerald ring',
        label: 'Side',
      },
    ],
  },
  {
    id: 'ring-titanium-eastwest',
    title: 'East-west titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-eastwest/cover.jpg',
    alt: 'Matte black titanium ring with yellow-gold east-west emerald-cut diamond on cream silk',
    blurb: 'Matte black titanium band with a yellow-gold bar setting and about 2 ct east-west emerald-cut diamond.',
    shots: [
      {
        src: 'images/products/titanium-eastwest/cover.jpg',
        alt: 'East-west black titanium emerald-cut diamond ring on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/titanium-eastwest/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold setting on titanium',
        label: 'Detail',
      },
      {
        src: 'images/products/titanium-eastwest/profile.jpg',
        alt: 'Profile of black titanium ring with gold emerald setting',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-eastwest/angle.jpg',
        alt: 'Three-quarter view of east-west titanium emerald ring',
        label: 'Side',
      },
    ],
  },
  {
    id: 'ring-titanium-groove',
    title: 'Grooved titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-groove/cover.jpg',
    alt: 'Matte black shoulder-groove titanium ring with yellow-gold emerald-cut diamond basket on cream silk',
    blurb: 'Matte black grooved titanium band with a yellow-gold basket and about 3.5 ct emerald-cut diamond.',
    shots: [
      {
        src: 'images/products/titanium-groove/cover.jpg',
        alt: 'Grooved black titanium emerald-cut diamond ring on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/titanium-groove/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold basket on grooved titanium',
        label: 'Detail',
      },
      {
        src: 'images/products/titanium-groove/profile.jpg',
        alt: 'Profile of shoulder-groove black titanium ring with gold emerald basket',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-groove/angle.jpg',
        alt: 'Three-quarter view of grooved titanium emerald ring',
        label: 'Side',
      },
    ],
  },
  {
    id: 'necklace-tubular-pave',
    title: 'Tubular pavé tennis necklace',
    line: 'necklaces',
    image: 'images/products/tubular-tennis/cover.jpg',
    alt: 'Yellow gold tubular pavé diamond tennis necklace on cream silk',
    blurb:
      'Yellow gold tubular links fully pavé-set with round diamonds, about 17 ct VVS-VS, 18 inch.',
    shots: [
      {
        src: 'images/products/tubular-tennis/cover.jpg',
        alt: 'Yellow gold tubular pavé diamond tennis necklace on cream silk',
        label: 'Overview',
      },
      {
        src: 'images/products/tubular-tennis/face.jpg',
        alt: 'Close view of yellow gold tubular pavé diamond links',
        label: 'Detail',
      },
      {
        src: 'images/products/tubular-tennis/clasp.jpg',
        alt: 'Barrel clasp on yellow gold tubular pavé tennis necklace',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'earrings-pear-cascade',
    title: 'Pear cascade drop earrings',
    line: 'earrings',
    image: 'images/products/pear-cascade/earrings.jpg',
    alt: 'White gold pear-diamond cascade drop earrings on cream silk',
    blurb: 'White gold drop earrings with three graduated pear diamonds on pavé bars.',
    shots: [
      {
        src: 'images/products/pear-cascade/earrings.jpg',
        alt: 'White gold pear-diamond cascade drop earrings on cream silk',
        label: 'Overview',
      },
    ],
  },
  {
    id: 'pendant',
    title: 'Pendant work',
    line: 'pendants',
    image: 'images/pendant.jpg',
    alt: 'Diamond pendant necklace on beige linen',
    blurb: 'Center-stone pendants and solitaire necks.',
    shots: [
      {
        src: 'images/pendant.jpg',
        alt: 'Diamond pendant necklace on beige linen',
        label: 'Overview',
      },
    ],
  },
  {
    id: 'diamond',
    title: 'Certified loose',
    line: 'loose-diamonds',
    image: 'images/diamond.jpg',
    alt: 'Brilliant cut loose diamond on cream silk',
    blurb: 'Certified loose diamonds for setters and remounts.',
    shots: [
      {
        src: 'images/diamond.jpg',
        alt: 'Brilliant cut loose diamond on cream silk',
        label: 'Overview',
      },
    ],
  },
]
