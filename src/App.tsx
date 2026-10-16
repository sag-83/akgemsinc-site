import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Cta } from './components/Cta'
import { CustomShop } from './components/CustomShop'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Lines } from './components/Lines'
import { SmoothScroll } from './components/SmoothScroll'
import type { ProductLineId } from './data/catalog'

export default function App() {
  const [activeLine, setActiveLine] = useState<ProductLineId | 'all'>('all')

  return (
    <SmoothScroll>
      <div className="page">
        <Hero />
        <Intro />
        <Lines active={activeLine} onSelect={setActiveLine} />
        <Gallery active={activeLine} />
        <CustomShop />
        <About />
        <Contact />
        <Cta />
        <Footer />
      </div>
    </SmoothScroll>
  )
}
