import { Link } from 'react-router-dom'

const projects = [
  {
    id: '01',
    title: 'React Final Project',
    description: 'A frontend project showcasing responsive layouts, reusable components, and modern interface development.',
    image: 'https://th.bing.com/th?id=OIF.ySsfa%2fjFZIBYLh1YmbYs2g&r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    technologies: ['React', 'Ant Design', 'JavaScript'],
    category: 'Frontend project',
    liveDemo: 'https://rick-morty-app-iota.vercel.app/',
    github: 'https://github.com/hasnatshehzad/react_template',
  },
  {
    id: '02',
    title: 'React Template',
    description: 'A modern one-page template with a polished layout and a professional personal-brand presentation.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.OXuG2p9lrGCr4uRFAGuhAQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    category: 'Web template',
    liveDemo: 'https://react-template-topaz.vercel.app/',
    github: 'https://github.com/hasnatshehzad/react_template',
  },
  {
    id: '03',
    title: 'My First Website',
    description: 'my first project. in that i include react css and javascript..',
    image: 'https://tse4.mm.bing.net/th/id/OIP.ohijymvFJoKBoM3oHXmiWAHaFB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Interactive',
    liveDemo: 'https://my-first-website-beryl-eight.vercel.app/',
    github: "https://github.com/hasnatshehzad/MyFirst_website",
  },
]

function Portfolio() {
  return (
    <main className="portfolio-canvas text-[#20241e]">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">Selected projects ·</p>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">A few things I&apos;ve <span className="text-[#789631]">put into the world.</span></h1>
          </div>
          <p className="mb-1 max-w-sm text-base leading-7 text-[#62685e]">Small collection, lots of learning. Each project is an opportunity to make an idea clearer and more useful.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group flex min-w-0 flex-col border border-[#20241e]/12 bg-white/45 transition-colors hover:bg-white/80">
              <div className="relative aspect-[1.42] overflow-hidden bg-[#e2e4da]">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <span className="absolute left-4 top-4 bg-[#d9f36a] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#20241e]">{project.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-xl font-semibold">{project.title}</h2>
                  <span className="font-display text-sm font-semibold text-[#8a9082]">{project.id}</span>
                </div>
                <p className="mb-5 leading-7 text-[#62685e]">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="border border-[#20241e]/15 px-2.5 py-1 text-xs font-medium text-[#555b52]">{technology}</span>)}
                </div>
                <div className="mt-auto flex gap-3 border-t border-[#20241e]/10 pt-4">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 bg-[#20241e] px-3 text-sm font-semibold text-white transition hover:bg-[#41493a]">Live preview <span aria-hidden="true">↗</span></a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 border border-[#20241e]/20 px-3 text-sm font-semibold text-[#20241e] transition hover:bg-[#e9eae1]">Source code <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#20241e]/10 bg-[#e9eae1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">Have something in mind?</p><h2 className="m-0 font-display text-2xl font-semibold sm:text-3xl">Let&apos;s build something useful.</h2></div>
          <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-[#20241e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#41493a] md:self-auto">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  )
}

export default Portfolio