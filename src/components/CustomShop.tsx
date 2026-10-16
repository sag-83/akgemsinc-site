import { asset } from '../lib/asset'

const steps = [
  {
    title: 'Brief',
    body: 'Share the client story, budget, metal, and timing. We listen before we sketch.',
  },
  {
    title: 'Stone',
    body: 'We select certified loose goods or matched pairs so the center leads the design.',
  },
  {
    title: 'Design',
    body: 'From scratch: proportions, setting style, and side-stone layout for your case.',
  },
  {
    title: 'Craft',
    body: 'Setting, polish, and finish. Built as a piece a retailer can stand behind.',
  },
  {
    title: 'Deliver',
    body: 'Ready for the floor with clear specs you can show the client with confidence.',
  },
]

export function CustomShop() {
  return (
    <section id="custom" className="bg-[var(--bg-deep)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="type-head m-0 max-w-[12ch]">Custom, built from scratch</h2>
          <p className="type-body mt-5 m-0 max-w-md text-[var(--muted)]">
            When a jeweler needs something that is not already in the book, we curate the piece step
            by step around the stone and the story.
          </p>
          <a
            className="btn mt-8"
            href="mailto:info@akgemsinc.com?subject=Custom%20shop%20inquiry"
          >
            Start a custom brief
          </a>
        </div>

        <div className="overflow-hidden bg-[var(--bg)] lg:col-span-6 lg:col-start-7">
          <img
            src={asset('images/diamond.jpg')}
            alt="Certified loose diamond prepared for custom work"
            width={1200}
            height={1500}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>

      <div className="shell mt-14 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <article key={step.title} className="bg-[var(--bg-deep)] px-5 py-6">
            <h3 className="type-lead m-0 font-medium">{step.title}</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
