import { contact } from '../data/contact'

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-[var(--page)] pb-10 pt-6 text-[var(--bg)]">
      <div className="shell">
        <p className="type-hero m-0 text-[var(--bg)]">AK Gems</p>
        <div className="mt-10 flex flex-col gap-8 border-t border-[color-mix(in_srgb,var(--bg)_14%,transparent)] pt-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="type-body opacity-80 hover:opacity-100"
            >
              {contact.email}
            </a>
            <a href={`tel:${contact.phoneTel}`} className="type-body opacity-80 hover:opacity-100">
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="type-body opacity-80 hover:opacity-100"
            >
              {contact.instagramHandle}
            </a>
            <p className="type-small m-0 pt-2 text-[color-mix(in_srgb,var(--bg)_55%,transparent)]">
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 type-small text-[color-mix(in_srgb,var(--bg)_60%,transparent)]">
            <a href="#lines">Lines</a>
            <a href="#catalog">Catalog</a>
            <a href="#custom">Custom</a>
            <a href="#contact">Contact</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
        <p className="type-small mt-10 m-0 text-[color-mix(in_srgb,var(--bg)_45%,transparent)]">
          © {new Date().getFullYear()} {contact.company} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
