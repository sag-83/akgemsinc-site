import { asset } from '../lib/asset'

const steps = [
  {
    title: 'Brief',
    body: 'Client needs, budget, metal preference, and timing.',
  },
  {
    title: 'Stone',
    body: 'Certified loose goods or matched pairs selected for the center.',
  },
  {
    title: 'Design',
    body: 'Proportions, setting style, and side-stone layout.',
  },
  {
    title: 'Craft',
    body: 'Setting, polish, and finish to trade standard.',
  },
  {
    title: 'Deliver',
    body: 'Finished piece with clear specs for your client.',
  },
]

export function CustomShop() {
  return (
    <section id="custom" className="bg-[var(--bg-deep)] py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="type-head m-0 max-w-[12ch]">Custom work</h2>
          <p className="type-body mt-5 m-0 max-w-md text-[var(--muted)]">
            When a piece is not already in the book, we design and build it around the stone and the client brief.
          </p>
          <a
            className="btn mt-8"
            href="mailto:info@akgemsinc.com?subject=Custom%20shop%20inquiry"
          >
            Inquire about custom
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

      <div className="shell mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <article key={step.title}>
            <h3 className="type-lead m-0 font-medium">{step.title}</h3>
            <p className="type-small mt-3 m-0 text-[var(--muted)]">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
