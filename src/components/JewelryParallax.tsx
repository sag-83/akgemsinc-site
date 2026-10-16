import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './JewelryParallax.css'

gsap.registerPlugin(ScrollTrigger)

export function JewelryParallax() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = parallaxRef.current
    const triggerElement = root?.querySelector<HTMLElement>('[data-parallax-layers]')
    if (!root || !triggerElement) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: true,
        },
      })

      const layers = [
        { layer: '1', yPercent: 70 },
        { layer: '2', yPercent: 55 },
        { layer: '3', yPercent: 40 },
        { layer: '4', yPercent: 10 },
      ]

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: 'none',
          },
          idx === 0 ? undefined : '<',
        )
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div className="parallax" ref={parallaxRef} aria-label="Jewelry parallax showcase">
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" aria-hidden="true" />
          <div data-parallax-layers className="parallax__layers">
            <img
              src="/images/parallax-bg.jpg"
              loading="eager"
              width={1600}
              height={900}
              data-parallax-layer="1"
              alt=""
              className="parallax__layer-img parallax__layer-img--bg"
            />
            <img
              src="/images/parallax-mid.jpg"
              loading="eager"
              width={1400}
              height={1400}
              data-parallax-layer="2"
              alt="Gold necklace with diamond pendant"
              className="parallax__layer-img parallax__layer-img--mid"
            />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">In the light</h2>
              <p className="parallax__subtitle">Pieces that hold the case</p>
            </div>
            <img
              src="/images/parallax-fg.jpg"
              loading="eager"
              width={1400}
              height={1400}
              data-parallax-layer="4"
              alt="Diamond ring in soft studio light"
              className="parallax__layer-img parallax__layer-img--fg"
            />
          </div>
          <div className="parallax__fade" aria-hidden="true" />
        </div>
      </section>
    </div>
  )
}
