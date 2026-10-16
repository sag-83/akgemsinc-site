import { useEffect, useMemo, useRef, useState } from 'react'
import { catalogPieces, productLines, type ProductLineId } from '../data/catalog'

type GalleryProps = {
  active: ProductLineId | 'all'
}

export function Gallery({ active }: GalleryProps) {
  const pieces = useMemo(
    () => (active === 'all' ? catalogPieces : catalogPieces.filter((piece) => piece.line === active)),
    [active],
  )
  const [index, setIndex] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIndex(0)
  }, [active])

  useEffect(() => {
    const node = scrollerRef.current?.querySelector<HTMLElement>(`[data-slide="${index}"]`)
    node?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index])

  const current = pieces[Math.min(index, Math.max(pieces.length - 1, 0))]
  const label =
    active === 'all' ? 'Featured collection' : productLines.find((line) => line.id === active)?.name

  return (
    <section id="catalog" className="bg-[var(--bg)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="type-head m-0">Catalog</h2>
          <p className="type-body mt-4 m-0 max-w-md text-[var(--muted)]">
            {label}. Quiet frames for case-ready work. Replace these with your own photography anytime.
          </p>
        </div>
        {pieces.length > 1 ? (
          <div className="flex gap-2">
            <button
              type="button"
              className="btn btn-ghost min-h-11 px-4"
              onClick={() => setIndex((value) => (value - 1 + pieces.length) % pieces.length)}
              aria-label="Previous piece"
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-ghost min-h-11 px-4"
              onClick={() => setIndex((value) => (value + 1) % pieces.length)}
              aria-label="Next piece"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>

      {pieces.length === 0 ? (
        <div className="shell">
          <p className="type-lead m-0 text-[var(--muted)]">
            Photos for this line are coming. Ask us for the full book meanwhile.
          </p>
        </div>
      ) : (
        <>
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--page)] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {pieces.map((piece, i) => (
              <button
                key={piece.id}
                type="button"
                data-slide={i}
                onClick={() => setIndex(i)}
                className={`w-[min(78vw,28rem)] shrink-0 snap-center text-left transition-opacity ${
                  i === index ? 'opacity-100' : 'opacity-55 hover:opacity-85'
                }`}
              >
                <div className="overflow-hidden bg-[var(--bg-deep)]">
                  <img
                    src={piece.image}
                    alt={piece.alt}
                    width={900}
                    height={1125}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="type-lead m-0 font-medium tracking-[-0.01em]">{piece.title}</h3>
                  <span className="type-small text-[var(--muted)]">
                    {productLines.find((line) => line.id === piece.line)?.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {current ? (
            <div className="shell mt-8 border-t border-[var(--line)] pt-6">
              <p className="type-small m-0 text-[var(--muted)]">
                Showing {index + 1} of {pieces.length}: {current.title}
              </p>
            </div>
          ) : null}
        </>
      )}
    </section>
  )
}
