export function About() {
  return (
    <section id="about" className="bg-[var(--bg)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <h2 className="type-head m-0 lg:col-span-4">Who this is for</h2>
        <div className="grid gap-10 md:grid-cols-3 lg:col-span-8">
          <article>
            <h3 className="type-lead m-0 font-medium">Retail jewelers</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">
              Mom-and-pop shops, bridal boutiques, and case programs that need a calm wholesale partner.
            </p>
          </article>
          <article>
            <h3 className="type-lead m-0 font-medium">A presence, not a cart</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">
              Share this site after a visit. Buyers get a feel for the lines before the full book arrives.
            </p>
          </article>
          <article>
            <h3 className="type-lead m-0 font-medium">Custom when it matters</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">
              Bring a sketch or a stone. We build around what the client actually wants to wear.
            </p>
          </article>
        </div>
      </div>

      <div className="shell mt-14 overflow-hidden">
        <img
          src="/images/rings.jpg"
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
