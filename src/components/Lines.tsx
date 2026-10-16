import { productLines, type ProductLineId } from '../data/catalog'

type LinesProps = {
  active: ProductLineId | 'all'
  onSelect: (id: ProductLineId | 'all') => void
}

export function Lines({ active, onSelect }: LinesProps) {
  const select = (id: ProductLineId | 'all') => {
    onSelect(id)
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="lines" className="border-y border-[var(--line)] bg-[var(--bg-deep)] py-[clamp(4rem,8vw,6.5rem)]">
      <div className="shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="type-head m-0 max-w-[10ch]">Product lines</h2>
          <button
            type="button"
            onClick={() => select('all')}
            className={`type-small self-start font-medium tracking-[0.06em] uppercase underline-offset-4 ${
              active === 'all' ? 'underline' : 'opacity-60 hover:opacity-100'
            }`}
          >
            View all
          </button>
        </div>

        <ul className="m-0 grid list-none gap-px bg-[var(--line)] p-0 sm:grid-cols-2 lg:grid-cols-3">
          {productLines.map((line) => {
            const isActive = active === line.id
            return (
              <li key={line.id} className="bg-[var(--bg-deep)]">
                <button
                  type="button"
                  onClick={() => select(line.id)}
                  className={`flex h-full w-full flex-col gap-3 px-5 py-6 text-left transition-colors ${
                    isActive ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : 'bg-[var(--bg)] hover:bg-[var(--bg-deep)]'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="type-lead font-medium tracking-[-0.01em]">{line.name}</span>
                  <span
                    className={`type-small ${isActive ? 'text-[color-mix(in_srgb,var(--accent-ink)_80%,transparent)]' : 'text-[var(--muted)]'}`}
                  >
                    {line.blurb}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
