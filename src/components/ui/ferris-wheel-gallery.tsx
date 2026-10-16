import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import './ferris-wheel-gallery.css'

export type FerrisWheelItem = {
  id: string
  title: string
  discipline: string
  year: string
  alt: string
  src: string
}

type FerrisWheelGalleryProps = {
  items: FerrisWheelItem[]
  active: number
  onActiveChange: (index: number) => void
}

const RADIUS = 168

export function FerrisWheelGallery({ items, active, onActiveChange }: FerrisWheelGalleryProps) {
  const count = Math.max(items.length, 1)
  const step = 360 / count
  const wheelAngle = -active * step
  const rootRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ startX: number; startActive: number; moved: boolean } | null>(null)
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const markLoaded = useCallback((id: string) => {
    setLoaded((prev) => (prev[id] ? prev : { ...prev, [id]: true }))
  }, [])

  const go = useCallback(
    (next: number) => {
      if (!items.length) return
      const wrapped = ((next % items.length) + items.length) % items.length
      onActiveChange(wrapped)
    },
    [items.length, onActiveChange],
  )

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      go(active + 1)
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      go(active - 1)
    }
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    dragRef.current = { startX: event.clientX, startActive: active, moved: false }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag) return
    const delta = event.clientX - drag.startX
    if (Math.abs(delta) > 8) drag.moved = true
    const shifts = Math.round(delta / 56)
    if (shifts !== 0) {
      const next = drag.startActive - shifts
      const wrapped = ((next % items.length) + items.length) % items.length
      if (wrapped !== active) onActiveChange(wrapped)
    }
  }

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = null
    try {
      event.currentTarget.releasePointerCapture(event.pointerId)
    } catch {
      // ignore
    }
  }

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < 8 && Math.abs(event.deltaX) < 8) return
    event.preventDefault()
    go(active + (event.deltaY + event.deltaX > 0 ? 1 : -1))
  }

  const current = items[active]
  const gondolas = useMemo(() => items, [items])

  if (!items.length) {
    return <p className="ferris-empty">No pieces in this line yet.</p>
  }

  return (
    <div
      ref={rootRef}
      className={`ferris ${reducedMotion ? 'ferris--reduced' : ''}`}
      tabIndex={0}
      role="listbox"
      aria-label="Jewelry collection wheel"
      aria-activedescendant={current ? `ferris-item-${current.id}` : undefined}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onWheel={onWheel}
    >
      <div className="ferris__stage">
        <div
          className="ferris__wheel"
          style={{
            transform: `rotate(${wheelAngle}deg)`,
            transitionDuration: reducedMotion ? '0ms' : '900ms',
          }}
        >
          <div className="ferris__hub" aria-hidden="true" />
          <div className="ferris__rim" aria-hidden="true" />
          {gondolas.map((item, index) => {
            const seatAngle = index * step - 90
            const rad = (seatAngle * Math.PI) / 180
            const x = Math.cos(rad) * RADIUS
            const y = Math.sin(rad) * RADIUS
            const isActive = index === active
            // Counter-rotate so photos stay upright while the wheel turns.
            const upright = -wheelAngle

            return (
              <button
                key={item.id}
                id={`ferris-item-${item.id}`}
                type="button"
                role="option"
                aria-selected={isActive}
                className={`ferris__gondola ${isActive ? 'is-active' : ''}`}
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${upright}deg)`,
                  transitionDuration: reducedMotion ? '0ms' : '900ms',
                }}
                onClick={() => {
                  if (dragRef.current?.moved) return
                  onActiveChange(index)
                }}
              >
                <span className={`ferris__card ${loaded[item.id] ? 'is-loaded' : ''}`}>
                  {!loaded[item.id] ? <span className="ferris__skeleton" aria-hidden="true" /> : null}
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={280}
                    height={350}
                    draggable={false}
                    onLoad={() => markLoaded(item.id)}
                    onError={() => markLoaded(item.id)}
                  />
                </span>
              </button>
            )
          })}
        </div>

        {current ? (
          <figure className="ferris__spotlight">
            <div className={`ferris__spotlight-frame ${loaded[current.id] ? 'is-loaded' : ''}`}>
              {!loaded[current.id] ? <span className="ferris__skeleton" aria-hidden="true" /> : null}
              <img src={current.src} alt={current.alt} width={640} height={800} draggable={false} />
            </div>
            <figcaption>
              <strong>{current.title}</strong>
              <span>
                {current.discipline}
                {current.year ? ` · ${current.year}` : ''}
              </span>
            </figcaption>
          </figure>
        ) : null}
      </div>

      <div className="ferris__dots" role="tablist" aria-label="Choose a piece">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={item.title}
            className={`ferris__dot ${index === active ? 'is-active' : ''}`}
            onClick={() => onActiveChange(index)}
          />
        ))}
      </div>
    </div>
  )
}
