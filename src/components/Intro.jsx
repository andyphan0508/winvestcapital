import { brand, positioningIntro, positioningLayers, positioningMotto } from '../data/content'

export default function Intro() {
  return (
    <section className="section section--cream" id="gioi-thieu">
      <div className="container">
        <div className="intro__top reveal">
          <div className="intro__statement">
            <div className="eyebrow">{brand.pillars.join(' • ')}</div>
            <h2 className="intro__headline">
              {brand.enTagline}
            </h2>
            <p className="intro__headline-vi">{brand.viTagline}</p>
          </div>
          <div className="intro__lead">
            <p>{positioningIntro}</p>
          </div>
        </div>

        <div className="divider-gold reveal" style={{ margin: '56px 0 40px' }}>
          <span>BẢN ĐỒ ĐỊNH VỊ CHIẾN LƯỢC</span>
        </div>

        <div className="grid grid-5 reveal">
          {positioningLayers.map((l) => (
            <div className="layer-card" key={l.id}>
              <div className="layer-card__num">{l.id}.</div>
              <div className="layer-card__code">{l.code}</div>
              <p className="layer-card__label">{l.label}</p>
            </div>
          ))}
        </div>

        <div className="intro__motto reveal">
          <p>{positioningMotto}</p>
        </div>
      </div>
    </section>
  )
}
