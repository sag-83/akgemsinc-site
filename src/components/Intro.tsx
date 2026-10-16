export function Intro() {
  return (
    <section className="bg-[var(--bg)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <h2 className="type-head m-0 lg:col-span-5">Built for retail jewelers</h2>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="type-lead m-0 text-[var(--ink)]">
            AK Gems Inc is not an online storefront. It is a clear look at what we can put in your
            cases, so a cold call or a brochure lands with context.
          </p>
          <p className="type-body mt-5 m-0 text-[var(--muted)]">
            When a sales visit ends with a card in hand, send buyers here. They see the work. You
            keep the conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
