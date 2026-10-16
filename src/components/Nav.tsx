const links = [
  { href: '#lines', label: 'Lines' },
  { href: '#catalog', label: 'Catalog' },
  { href: '#custom', label: 'Custom' },
  { href: '#contact', label: 'Contact' },
]

type NavProps = {
  tone?: 'light' | 'dark'
}

export function Nav({ tone = 'light' }: NavProps) {
  const ink = tone === 'dark' ? 'text-[#f6f1e8]' : 'text-[var(--ink)]'

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${ink}`}>
      <div className="shell flex items-center justify-between gap-6 py-5">
        <a href="#top" className="inline-flex items-center" aria-label="AK Gems Inc home">
          <img
            src="/images/ak-logo.png"
            alt="AK Gems"
            width={120}
            height={76}
            className="h-9 w-auto object-contain drop-shadow-sm md:h-11"
          />
        </a>
        <nav className="flex items-center gap-5 md:gap-7" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-small font-medium tracking-[0.04em] uppercase opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
