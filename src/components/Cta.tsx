export function Cta() {
  return (
    <section className="bg-[var(--ink)] py-[clamp(5rem,10vw,8rem)] text-[var(--bg)]">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="type-head m-0 text-[var(--bg)]">Send the site. Keep the talk.</h2>
          <p className="type-body mt-5 m-0 max-w-md text-[color-mix(in_srgb,var(--bg)_72%,transparent)]">
            After a visit, share this page with the shop. They see the lines. You follow up with the
            full catalog.
          </p>
        </div>
        <a className="btn btn-light w-full md:w-auto" href="mailto:info@akgemsinc.com?subject=Trade%20inquiry">
          Email the trade desk
        </a>
      </div>
    </section>
  )
}
