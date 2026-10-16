import { contact } from '../data/contact'

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg-deep)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="type-head m-0">Contact</h2>
          <p className="type-body mt-5 m-0 max-w-md text-[var(--muted)]">
            Trade inquiries for {contact.company}. Ask for {contact.person}, or write the trade desk
            directly.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          <a
            href={`mailto:${contact.email}?subject=Trade%20inquiry%20from%20akgemsinc.com`}
            className="group border-b border-[var(--line)] pb-5 transition-opacity hover:opacity-70"
          >
            <span className="type-small block text-[var(--muted)]">Email</span>
            <span className="type-head mt-2 block">{contact.email}</span>
          </a>

          <a
            href={`tel:${contact.phoneTel}`}
            className="group border-b border-[var(--line)] pb-5 transition-opacity hover:opacity-70"
          >
            <span className="type-small block text-[var(--muted)]">Phone</span>
            <span className="type-head mt-2 block">{contact.phoneDisplay}</span>
          </a>

          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group border-b border-[var(--line)] pb-5 transition-opacity hover:opacity-70"
          >
            <span className="type-small block text-[var(--muted)]">New York office</span>
            <span className="type-lead mt-2 block font-medium tracking-[-0.01em]">
              {contact.addressLine1}
            </span>
            <span className="type-body mt-1 block text-[var(--muted)]">{contact.addressLine2}</span>
          </a>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group border-b border-[var(--line)] pb-5 transition-opacity hover:opacity-70"
          >
            <span className="type-small block text-[var(--muted)]">Instagram</span>
            <span className="type-head mt-2 block">{contact.instagramHandle}</span>
          </a>

          <a className="btn mt-2 w-fit" href={`mailto:${contact.email}`}>
            Write to the trade desk
          </a>
        </div>
      </div>
    </section>
  )
}
