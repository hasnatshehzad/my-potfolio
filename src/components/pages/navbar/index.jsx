import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ]
  const linkClass = ({ isActive }) =>
    `block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'bg-[#d9f36a] text-[#20241e]' : 'text-[#555b52] hover:bg-black/[0.05] hover:text-[#20241e]'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1c211d]/10 bg-[#f4f4ee]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-[#20241e] font-display text-lg font-bold text-[#d9f36a]">H</span>
          <span className="font-display text-base font-bold tracking-normal text-[#20241e]">Hasnat Shehzad</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>{link.label}</NavLink>)}
        </div>

        <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-[#20241e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c4437] md:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="grid size-11 place-items-center rounded-full border border-[#1c211d]/15 text-[#20241e] transition hover:bg-[#e8e9df] md:hidden"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m6 6 12 12M18 6 6 18" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#1c211d]/10 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setIsOpen(false)} className={linkClass}>{link.label}</NavLink>)}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar