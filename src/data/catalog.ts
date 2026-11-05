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
      'Alternating pear-cut diamonds in yellow gold — tip up / tip down the full length. Full, face, and clasp views.',
    shots: [
      {
        src: 'images/products/pear-tennis/cover.jpg',
        alt: 'Full alternating pear tennis bracelet with clean clasps',
        label: 'Full',
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
    blurb: '14K rose gold heart links with center heart diamonds and pavé halos. Full, face, and clasp views.',
    shots: [
      {
        src: 'images/products/heart-link/cover.jpg',
        alt: 'Full rose gold heart-link diamond bracelet on cream silk',
        label: 'Full',
      },
      {
        src: 'images/products/heart-link/face.jpg',
        alt: 'Zoomed face of tip-to-cleft rose gold heart links on cream silk',
        label: 'Face',
      },
      {
        src: 'images/products/heart-link/clasp.jpg',
        alt: 'Clasp end with sharp heart-shaped links on rose gold bracelet',
        label: 'Clasp',
      },
    ],
  },
  {
    id: 'bracelet-multi-shape',
    title: 'Multi-shape tennis bracelet',
    line: 'bracelets',
    image: 'images/products/multi-shape/cover.jpg',
    alt: '14K white gold multi-shape diamond tennis bracelet — heart, emerald, oval, marquise, pear — on cream silk',
    blurb:
      '14K white gold mosaic tennis — repeating Heart → Emerald → Oval → Marquise → Pear. Full, face, and clasp views.',
    shots: [
      {
        src: 'images/products/multi-shape/cover.jpg',
        alt: 'Full multi-shape diamond tennis bracelet — Heart Emerald Oval Marquise Pear repeat',
        label: 'Full',
      },
      {
        src: 'images/products/multi-shape/face.jpg',
        alt: 'Face close-up of Heart Emerald Oval Marquise Pear diamond sequence',
        label: 'Face',
      },
      {
        src: 'images/products/multi-shape/clasp.jpg',
        alt: 'Diamond-set box clasp on multi-shape white gold tennis bracelet',
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
    blurb:
      'Exclusive AK Gems piece — matte black titanium waffle band, 14K yellow-gold bezel, ~3ct square diamond. Cover, face, profile, and angle views.',
    shots: [
      {
        src: 'images/products/titanium-ring/cover.jpg',
        alt: 'Exclusive black titanium diamond ring on cream silk',
        label: 'Cover',
      },
      {
        src: 'images/products/titanium-ring/face.jpg',
        alt: 'Face view of square diamond in yellow-gold bezel on titanium band',
        label: 'Face',
      },
      {
        src: 'images/products/titanium-ring/profile.jpg',
        alt: 'Profile of waffle-textured black titanium ring',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-ring/angle.jpg',
        alt: 'Three-quarter angle of exclusive titanium diamond ring',
        label: 'Angle',
      },
    ],
  },
  {
    id: 'ring-titanium-smooth',
    title: 'Smooth titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-smooth/cover.jpg',
    alt: 'Smooth matte black titanium ring with yellow-gold emerald-cut diamond bezel on cream silk',
    blurb:
      'Titanium fashion ring — smooth matte black band, yellow-gold bezel, ~3ct emerald-cut diamond. Cover, face, profile, and angle views.',
    shots: [
      {
        src: 'images/products/titanium-smooth/cover.jpg',
        alt: 'Smooth black titanium emerald-cut diamond ring on cream silk',
        label: 'Cover',
      },
      {
        src: 'images/products/titanium-smooth/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold bezel',
        label: 'Face',
      },
      {
        src: 'images/products/titanium-smooth/profile.jpg',
        alt: 'Profile of smooth black titanium ring with gold bezel',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-smooth/angle.jpg',
        alt: 'Three-quarter angle of smooth titanium emerald ring',
        label: 'Angle',
      },
    ],
  },
  {
    id: 'ring-titanium-ribbed',
    title: 'Ribbed titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-ribbed/cover.jpg',
    alt: 'Matte black ribbed titanium ring with yellow-gold emerald-cut diamond bezel on cream silk',
    blurb:
      'Titanium fashion ring — matte black vertical-rib band, yellow-gold bezel, ~2ct emerald-cut diamond. Cover, face, profile, and angle views.',
    shots: [
      {
        src: 'images/products/titanium-ribbed/cover.jpg',
        alt: 'Ribbed black titanium emerald-cut diamond ring on cream silk',
        label: 'Cover',
      },
      {
        src: 'images/products/titanium-ribbed/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold bezel on ribbed titanium',
        label: 'Face',
      },
      {
        src: 'images/products/titanium-ribbed/profile.jpg',
        alt: 'Profile of vertical-rib black titanium ring with gold bezel',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-ribbed/angle.jpg',
        alt: 'Three-quarter angle of ribbed titanium emerald ring',
        label: 'Angle',
      },
    ],
  },
  {
    id: 'ring-titanium-eastwest',
    title: 'East-west titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-eastwest/cover.jpg',
    alt: 'Matte black titanium ring with yellow-gold east-west emerald-cut diamond on cream silk',
    blurb:
      'Titanium fashion ring — matte black band, yellow-gold bar setting, ~2ct east-west emerald-cut diamond. Cover, face, profile, and angle views.',
    shots: [
      {
        src: 'images/products/titanium-eastwest/cover.jpg',
        alt: 'East-west black titanium emerald-cut diamond ring on cream silk',
        label: 'Cover',
      },
      {
        src: 'images/products/titanium-eastwest/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold setting on titanium',
        label: 'Face',
      },
      {
        src: 'images/products/titanium-eastwest/profile.jpg',
        alt: 'Profile of black titanium ring with gold emerald setting',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-eastwest/angle.jpg',
        alt: 'Three-quarter angle of east-west titanium emerald ring',
        label: 'Angle',
      },
    ],
  },
  {
    id: 'ring-titanium-groove',
    title: 'Grooved titanium emerald',
    line: 'rings',
    image: 'images/products/titanium-groove/cover.jpg',
    alt: 'Matte black shoulder-groove titanium ring with yellow-gold emerald-cut diamond basket on cream silk',
    blurb:
      'Titanium fashion ring — matte black shoulder-groove band, yellow-gold basket, ~3.5ct emerald-cut diamond. Cover, face, profile, and angle views.',
    shots: [
      {
        src: 'images/products/titanium-groove/cover.jpg',
        alt: 'Grooved black titanium emerald-cut diamond ring on cream silk',
        label: 'Cover',
      },
      {
        src: 'images/products/titanium-groove/face.jpg',
        alt: 'Face view of emerald-cut diamond in yellow-gold basket on grooved titanium',
        label: 'Face',
      },
      {
        src: 'images/products/titanium-groove/profile.jpg',
        alt: 'Profile of shoulder-groove black titanium ring with gold emerald basket',
        label: 'Profile',
      },
      {
        src: 'images/products/titanium-groove/angle.jpg',
        alt: 'Three-quarter angle of grooved titanium emerald ring',
        label: 'Angle',
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
