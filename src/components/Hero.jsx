import { brand } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <div className="hero__skyline" aria-hidden="true" />
        <div className="hero__water" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <span className="hero__eyebrow chip">{brand.pillars.join(' • ')}</span>
        <h1 className="hero__title">
          WINVEST <span>CAPITAL</span>
        </h1>
        <p className="hero__tagline">{brand.tagline}</p>
        <p className="hero__sub">{brand.viTagline}</p>

        <div className="hero__date">{brand.date}</div>

        <div className="hero__actions">
          <a href="#vifc-dn" className="btn btn--gold shimmer-btn">
            Khám phá VIFC-DN
            <span aria-hidden="true">&nbsp;→</span>
          </a>
          <a href="#gioi-thieu" className="btn btn--ghost">
            Về Winvest Capital
          </a>
        </div>
      </div>

      <a href="#gioi-thieu" className="hero__scroll" aria-label="Cuộn xuống">
        <span />
      </a>
    </section>
  )
}
