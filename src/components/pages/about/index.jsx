import { Link } from 'react-router-dom'

const principles = [
  {
    number: '01',
    title: 'Frontend focus',
    text: 'I build clean, efficient interfaces that make websites feel smooth, modern, and easy to use.',
    accent: 'text-[#789631]',
  },
  {
    number: '02',
    title: 'Responsive by design',
    text: 'Every layout is considered across screen sizes, so the experience stays clear wherever it is used.',
    accent: 'text-[#d16a4c]',
  },
  {
    number: '03',
    title: 'Built to last',
    text: 'Reusable components and thoughtful structure keep a project maintainable as it grows.',
    accent: 'text-[#4564c8]',
  },
]

function About() {
  return (
    <main className="portfolio-canvas text-[#20241e]">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">A bit about me</p>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">I make the web feel a little more <span className="text-[#789631]">human.</span></h1>
          <p className="max-w-xl text-lg leading-8 text-[#62685e] lg:justify-self-end">
            I&apos;m Hasnat, a frontend developer who enjoys turning early ideas into useful, polished digital experiences. My work brings together strong fundamentals, responsive design, and care for the small details.
          </p>
        </div>
      </section>

      <section className="border-y border-[#20241e]/10 bg-[#e9eae1]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">My approach</p>
            <h2 className="max-w-sm font-display text-3xl leading-tight font-semibold sm:text-4xl">Make it clear. Make it useful. Make it feel right.</h2>
          </div>
          <div className="divide-y divide-[#20241e]/15 border-y border-[#20241e]/15">
            {principles.map((principle) => (
              <article key={principle.number} className="grid gap-3 py-6 sm:grid-cols-[70px_1fr] sm:gap-6">
                <p className={`m-0 font-display text-sm font-bold ${principle.accent}`}>{principle.number}</p>
                <div>
                  <h3 className="mb-2 font-display text-xl font-semibold">{principle.title}</h3>
                  <p className="m-0 max-w-2xl leading-7 text-[#62685e]">{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">Currently learning and building</p>
          <p className="m-0 max-w-2xl text-lg leading-8 text-[#62685e]">React · JavaScript · Tailwind CSS · Next.js · Bootstrap · Ant Design</p>
        </div>
        <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#20241e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#41493a] md:self-auto">Let&apos;s work together <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}

export default About