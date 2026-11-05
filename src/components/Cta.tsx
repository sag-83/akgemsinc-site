export function Cta() {
  return (
    <section className="bg-[var(--ink)] py-[clamp(5rem,10vw,8rem)] text-[var(--bg)]">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="type-head m-0 text-[var(--bg)]">Ready to work together?</h2>
          <p className="type-body mt-5 m-0 max-w-md text-[color-mix(in_srgb,var(--bg)_72%,transparent)]">
            Ask about current inventory, custom builds, or a visit to our New York office.
          </p>
        </div>
        <a className="btn btn-light w-full md:w-auto" href="mailto:info@akgemsinc.com?subject=Trade%20inquiry">
          Email us
        </a>
      </div>
    </section>
  )
}
