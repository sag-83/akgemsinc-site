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
    <section id="lines" className="bg-[var(--bg-deep)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="type-head m-0 max-w-[12ch]">Product lines</h2>
            <p className="type-body mt-4 m-0 max-w-md text-[var(--muted)]">
              Choose a line to browse the full catalog, or stay with featured pieces.
            </p>
          </div>
          <button
            type="button"
            onClick={() => select('all')}
            className={`type-small self-start font-medium tracking-[0.08em] uppercase transition-opacity ${
              active === 'all' ? 'opacity-100' : 'opacity-55 hover:opacity-100'
            }`}
          >
            Featured
          </button>
        </div>

        <ul className="m-0 grid list-none gap-x-10 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {productLines.map((line) => {
            const isActive = active === line.id
            return (
              <li key={line.id}>
                <button
                  type="button"
                  onClick={() => select(line.id)}
                  className="group flex w-full flex-col gap-2 text-left"
                  aria-pressed={isActive}
                >
                  <span
                    className={`type-lead font-medium tracking-[-0.01em] transition-colors ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--ink)] group-hover:text-[var(--accent)]'
                    }`}
                  >
                    {line.name}
                  </span>
                  <span className="type-small text-[var(--muted)]">{line.blurb}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
