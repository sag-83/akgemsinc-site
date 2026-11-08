export function Intro() {
  return (
    <section className="bg-[var(--bg)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <h2 className="type-head m-0 lg:col-span-5">Wholesale jewelry, made for the trade</h2>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="type-lead m-0 text-[var(--ink)]">
            AK Gems Inc supplies retail jewelers with finished goods and custom work from our New York office.
          </p>
          <p className="type-body mt-5 m-0 text-[var(--muted)]">
            Start with featured pieces, open a product line for the full book, then reach out for pricing and appointments.
          </p>
        </div>
      </div>
    </section>
  )
}
