import {
  vifcHero,
  vifcBreakthrough,
  gateway,
  gmtAdvantage,
  triPillar,
  digitalEconomy,
  superInfra,
  ftzDifc,
  islands,
} from '../data/content'

export default function Vifc() {
  return (
    <section id="vifc-dn">
      {/* Hero banner */}
      <div className="vifc-hero">
        <div className="vifc-hero__overlay" />
        <div className="container vifc-hero__inner reveal">
          <div className="chip" style={{ color: 'var(--gold-300)', borderColor: 'rgba(201,163,92,.5)' }}>
            DỰ ÁN TRỌNG ĐIỂM
          </div>
          <h2 className="vifc-hero__title">{vifcHero.title}</h2>
          <div className="vifc-hero__code">{vifcHero.code}</div>
        </div>
      </div>

      {/* Breakthrough */}
      <div className="section section--cream">
        <div className="container">
          <p className="vifc-lead reveal">{vifcBreakthrough.lead}</p>
          <div className="grid grid-3 reveal">
            {vifcBreakthrough.items.map((it, i) => (
              <div className="card" key={i}>
                <div className="card__num">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="card__title">{it.title}</h4>
                <p className="card__text">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global gateway */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{gateway.title}</h3>
          <div className="gateway reveal">
            <div className="gateway__radar" aria-hidden="true">
              <span className="gateway__ring gateway__ring--1" />
              <span className="gateway__ring gateway__ring--2" />
              <span className="gateway__center">ĐÀ NẴNG</span>
              {gateway.cities.map((c, i) => (
                <span className="gateway__city" style={{ '--i': i }} key={c}>
                  {c}
                </span>
              ))}
            </div>
            <div className="gateway__stats">
              {gateway.stats.map((s, i) => (
                <div className="gateway__stat" key={i}>
                  <div className="stat__figure">{s.value}</div>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="vifc-banner reveal">{gateway.footer}</div>
        </div>
      </div>

      {/* GMT+7 advantage */}
      <div className="section section--cream-2">
        <div className="container">
          <h3 className="vifc-h vifc-h--dark reveal">{gmtAdvantage.title}</h3>
          <div className="gmt reveal">
            <div className="gmt__clock">
              <span className="gmt__center">{gmtAdvantage.center}</span>
            </div>
            <div className="gmt__nodes">
              {gmtAdvantage.nodes.map((n, i) => (
                <div className={`gmt__node gmt__node--${i}`} key={i}>
                  <strong>{n.city}</strong>
                  <span className="gmt__tz">{n.tz}</span>
                  <span className="gmt__role">{n.role}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="vifc-footnote reveal">{gmtAdvantage.footer}</p>
        </div>
      </div>

      {/* Tri-pillar comparison */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{triPillar.title}</h3>
          <div className="compare reveal">
            <table className="compare__table">
              <thead>
                <tr>
                  <th></th>
                  <th>Miami</th>
                  <th>Singapore</th>
                  <th>Busan</th>
                  <th className="compare__highlight">Đà Nẵng</th>
                </tr>
              </thead>
              <tbody>
                {triPillar.rows.map((r, i) => (
                  <tr key={i}>
                    <td className="compare__label">{r.label}</td>
                    <td>{r.miami}</td>
                    <td>{r.singapore}</td>
                    <td>{r.busan}</td>
                    <td className="compare__highlight">{r.danang}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Digital economy */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{digitalEconomy.title}</h3>
          <div className="grid grid-3 reveal">
            {digitalEconomy.items.map((it, i) => (
              <div className="econ" key={i}>
                <div className="econ__value">{it.value}</div>
                <h4>{it.title}</h4>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Super infrastructure */}
      <div className="section section--cream">
        <div className="container">
          <h3 className="vifc-h vifc-h--dark reveal">{superInfra.title}</h3>
          <div className="grid grid-2 reveal">
            {superInfra.items.map((it, i) => (
              <div className="infra-card" key={i}>
                <h4>{it.name}</h4>
                <ul>
                  {it.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="vifc-banner vifc-banner--gold reveal">{superInfra.footer}</div>
        </div>
      </div>

      {/* FTZ & DIFC */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{ftzDifc.title}</h3>
          <div className="ftz reveal">
            <div className="ftz__col">
              <h4>{ftzDifc.ftz.title}</h4>
              <ul>{ftzDifc.ftz.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div className="ftz__center">
              <span>{ftzDifc.center}</span>
            </div>
            <div className="ftz__col">
              <h4>{ftzDifc.difc.title}</h4>
              <ul>{ftzDifc.difc.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
          </div>
          <div className="vifc-banner reveal">{ftzDifc.footer}</div>
        </div>
      </div>

      {/* 5 Islands */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{islands.title}</h3>
          <p className="islands__intro reveal">{islands.intro}</p>
          <div className="islands__total reveal">{islands.totalLabel}</div>
          <div className="grid grid-5 reveal islands__grid">
            {islands.list.map((is, i) => (
              <div className="island" key={i}>
                <div className="island__area">{is.area}</div>
                <div className="island__en">{is.en}</div>
                <div className="island__vi">{is.vi}</div>
              </div>
            ))}
          </div>
          <div className="vifc-banner vifc-banner--gold reveal">{islands.totalFooter}</div>
        </div>
      </div>
    </section>
  )
}
