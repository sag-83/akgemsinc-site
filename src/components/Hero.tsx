import { type CSSProperties } from 'react'
import { asset } from '../lib/asset'
import { Nav } from './Nav'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[var(--ink)] text-[var(--bg)]">
      <img
        src={asset('images/hero.jpg')}
        alt="Diamond bracelet and ring arranged on champagne silk"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,18,14,0.35) 0%, rgba(20,18,14,0.2) 40%, rgba(20,18,14,0.72) 100%)',
        }}
        aria-hidden="true"
      />

      <Nav tone="dark" />

      <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-28 md:pb-16">
        <div className="max-w-3xl">
          <p
            data-rise
            style={{ '--i': 0 } as CSSProperties}
            className="type-small mb-5 font-medium tracking-[0.18em] uppercase text-[color-mix(in_srgb,var(--bg)_80%,transparent)]"
          >
            AK Gems Inc
          </p>
          <h1 data-rise style={{ '--i': 1 } as CSSProperties} className="type-hero m-0 text-[var(--bg)]">
            Jewelry for the shops we call on
          </h1>
          <p
            data-rise
            style={{ '--i': 2 } as CSSProperties}
            className="type-lead mt-5 m-0 max-w-xl text-[color-mix(in_srgb,var(--bg)_84%,transparent)]"
          >
            A premium catalog presence for retail jewelers. See the lines. Share the site after a visit.
          </p>
          <div data-rise style={{ '--i': 3 } as CSSProperties} className="mt-8 flex flex-wrap gap-3">
            <a className="btn" href="#catalog">
              View catalog
            </a>
            <a
              className="btn btn-ghost !text-[var(--bg)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--bg)_50%,transparent)]"
              href="#contact"
            >
              Request a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
