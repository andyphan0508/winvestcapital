import { useEffect, useState } from 'react'
import { navItems } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">W</span>
          <span className="nav__name">
            WINVEST<span className="nav__name-light"> CAPITAL</span>
          </span>
        </a>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#lien-he" className="nav__cta" onClick={() => setOpen(false)}>
            Liên hệ
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
