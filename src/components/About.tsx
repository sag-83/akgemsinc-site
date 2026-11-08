import { asset } from '../lib/asset'

export function About() {
  return (
    <section id="about" className="bg-[var(--bg)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="type-head m-0">About AK Gems</h2>
          <p className="type-body mt-5 m-0 max-w-md text-[var(--muted)]">
            A New York trade house for retail jewelers who need finished goods and custom builds they can stand behind.
          </p>
        </div>
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-3 lg:col-span-6 lg:col-start-7">
          <article>
            <h3 className="type-lead m-0 font-medium">Retail partners</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">
              Independent jewelers, bridal boutiques, and established case programs.
            </p>
          </article>
          <article>
            <h3 className="type-lead m-0 font-medium">Finished goods</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">
              Bracelets, rings, and related lines with consistent metalwork and stones.
            </p>
          </article>
          <article>
            <h3 className="type-lead m-0 font-medium">Custom work</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">
              Bring a sketch or a stone — we build around what your client wants to wear.
            </p>
          </article>
        </div>
      </div>

      <div className="shell mt-14 overflow-hidden">
        <img
          src={asset('images/rings.jpg')}
          alt="Gold diamond rings from the AK Gems collection"
          width={1600}
          height={1000}
          loading="lazy"
          className="aspect-[21/9] w-full object-cover"
        />
      </div>
    </section>
  )
}
