import { useEffect, useId, useState } from 'react'
import type { CatalogPiece } from '../data/catalog'
import { productLines } from '../data/catalog'
import { contact } from '../data/contact'
import { asset } from '../lib/asset'

type ProductDetailProps = {
  piece: CatalogPiece
  onClose: () => void
}

export function ProductDetail({ piece, onClose }: ProductDetailProps) {
  const titleId = useId()
  const [shotIndex, setShotIndex] = useState(0)
  const shots = piece.shots.length > 0 ? piece.shots : [{ src: piece.image, alt: piece.alt, label: 'Cover' }]
  const shot = shots[Math.min(shotIndex, shots.length - 1)]
  const lineName = productLines.find((line) => line.id === piece.line)?.name

  useEffect(() => {
    setShotIndex(0)
  }, [piece.id])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setShotIndex((value) => (value + 1) % shots.length)
      if (event.key === 'ArrowLeft') setShotIndex((value) => (value - 1 + shots.length) % shots.length)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, shots.length])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[color-mix(in_srgb,var(--ink)_45%,transparent)] p-0 sm:items-center sm:p-6"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[min(94vh,56rem)] w-full max-w-5xl flex-col overflow-hidden bg-[var(--bg)] shadow-[0_24px_80px_color-mix(in_srgb,var(--ink)_28%,transparent)] sm:rounded-sm"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] px-[var(--page)] py-4 sm:px-8">
          <div>
            <p className="type-small m-0 text-[var(--muted)]">{lineName}</p>
            <h3 id={titleId} className="type-lead m-0 mt-1 font-medium tracking-[-0.01em]">
              {piece.title}
            </h3>
          </div>
          <button type="button" className="btn btn-ghost min-h-11 px-4" onClick={onClose} aria-label="Close">
            Close
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.85fr)]">
          <div className="bg-[var(--bg-deep)]">
            <div className="relative">
              <img
                key={shot.src}
                src={asset(shot.src)}
                alt={shot.alt}
                width={1600}
                height={900}
                className="aspect-[16/10] w-full object-cover"
              />
              {shots.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="btn btn-ghost absolute top-1/2 left-3 min-h-11 -translate-y-1/2 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-3 backdrop-blur-sm"
                    onClick={() => setShotIndex((value) => (value - 1 + shots.length) % shots.length)}
                    aria-label="Previous angle"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost absolute top-1/2 right-3 min-h-11 -translate-y-1/2 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-3 backdrop-blur-sm"
                    onClick={() => setShotIndex((value) => (value + 1) % shots.length)}
                    aria-label="Next angle"
                  >
                    Next
                  </button>
                </>
              ) : null}
            </div>

            {shots.length > 1 ? (
              <div className="flex gap-2 overflow-x-auto px-4 py-4 sm:px-6">
                {shots.map((item, index) => (
                  <button
                    key={`${item.src}-${item.label}`}
                    type="button"
                    onClick={() => setShotIndex(index)}
                    className={`w-24 shrink-0 text-left transition-opacity ${
                      index === shotIndex ? 'opacity-100' : 'opacity-55 hover:opacity-85'
                    }`}
                    aria-label={`Show ${item.label} angle`}
                    aria-current={index === shotIndex}
                  >
                    <div className="overflow-hidden border border-[var(--line)]">
                      <img
                        src={asset(item.src)}
                        alt=""
                        width={200}
                        height={120}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                    <span className="type-small mt-2 block text-[var(--muted)]">{item.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="flex flex-col gap-6 border-t border-[var(--line)] px-[var(--page)] py-6 sm:px-8 lg:border-t-0 lg:border-l">
            <div>
              {shots.length > 1 ? (
                <p className="type-small m-0 text-[var(--muted)]">{shot.label}</p>
              ) : null}
              {piece.blurb ? <p className="type-body mt-4 m-0 text-[var(--muted)]">{piece.blurb}</p> : null}
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <a className="btn btn-solid min-h-11 justify-center px-5" href={`mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry: ${piece.title}`)}`}>
                Inquire about this piece
              </a>
              <a className="btn btn-ghost min-h-11 justify-center px-5" href={`tel:${contact.phoneTel}`}>
                Call {contact.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
