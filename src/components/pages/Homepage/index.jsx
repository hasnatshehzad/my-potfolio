import { Link } from 'react-router-dom'

const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Next.js', 'Bootstrap', 'Ant Design']

const services = [
  {
    number: '01',
    title: 'Frontend development',
    text: 'Thoughtful, responsive interfaces built with React and modern web tools.',
  },
  {
    number: '02',
    title: 'Interface design',
    text: 'Clear layouts and considered details that make products easier to use.',
  },
  {
    number: '03',
    title: 'Responsive builds',
    text: 'Experiences designed to feel right on a phone, laptop, and everything between.',
  },
]

function Home() {
  return (
    <main className="portfolio-canvas overflow-hidden text-[#20241e]">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div className="relative z-10 motion-safe:animate-fade-up motion-reduce:animate-none">
          <p className="mb-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#62685e]">
            <span className="size-2 rounded-full bg-[#86a83a]" /> Independent frontend developer
          </p>
          <h1 className="mb-7 max-w-[700px] font-display text-5xl leading-[1.04] font-semibold text-[#20241e] sm:text-6xl lg:text-7xl">
            Digital work with <span className="text-[#789631]">clarity</span> and character.
          </h1>
          <p className="mb-9 max-w-[530px] text-lg leading-8 text-[#62685e]">
            I&apos;m Hasnat Shehzad, a frontend developer shaping responsive interfaces into useful, memorable experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/portfolio" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#20241e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#41493a]">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full border border-[#20241e]/20 px-6 py-3 text-sm font-semibold text-[#20241e] transition hover:border-[#20241e] hover:bg-white/60">
              Get in touch
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[#20241e]/15 pt-6">
            <div><p className="m-0 font-display text-2xl font-semibold">React</p><p className="mt-1 text-xs text-[#74796f]">Primary toolkit</p></div>
            <div><p className="m-0 font-display text-2xl font-semibold">Gilgit</p><p className="mt-1 text-xs text-[#74796f]">Based in Pakistan</p></div>
            <div><p className="m-0 font-display text-2xl font-semibold">Open</p><p className="mt-1 text-xs text-[#74796f]">For new projects</p></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
          <div className="absolute -right-5 -top-5 z-10 grid size-24 place-items-center rounded-full bg-[#d9f36a] text-center font-display text-xs leading-tight font-bold text-[#20241e] sm:-right-7 sm:-top-7">
            MADE WITH<br />INTENTION
          </div>
          <div className="aspect-[4/4.1] overflow-hidden rounded-[4px] bg-[#d4d7ca]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85"
              alt="A laptop displaying code on a developer's workspace"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex max-w-[calc(100%-32px)] items-center gap-3 border border-[#20241e]/10 bg-[#f4f4ee] px-4 py-3 shadow-[0_12px_30px_rgba(32,36,30,0.12)] sm:bottom-5 sm:-left-7 sm:px-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#20241e] font-display text-lg font-bold text-[#d9f36a]">H</span>
            <div><p className="m-0 text-sm font-bold">Hasnat Shehzad</p><p className="m-0 text-xs text-[#74796f]">Frontend developer</p></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#20241e]/10 bg-[#e9eae1]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">A few tools I use</p>
            <h2 className="max-w-sm font-display text-3xl leading-tight font-semibold sm:text-4xl">Good work starts with a solid toolkit.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => <span key={skill} className="rounded-full border border-[#20241e]/15 bg-[#f4f4ee] px-4 py-2.5 text-sm font-medium text-[#41473d]">{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">How I can help</p>
            <h2 className="max-w-xl font-display text-3xl leading-tight font-semibold sm:text-4xl">From first sketch to the final detail.</h2>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#41473d] transition hover:text-[#789631]">A little more about me <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="grid border-t border-[#20241e]/15 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="border-b border-[#20241e]/15 py-7 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <p className="mb-8 font-display text-sm font-semibold text-[#789631]">{service.number}</p>
              <h3 className="mb-3 font-display text-xl font-semibold">{service.title}</h3>
              <p className="m-0 max-w-sm leading-7 text-[#62685e]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home