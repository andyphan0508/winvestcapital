import {
  dficTower,
  assetStructure,
  towerRoadmap,
  financials,
  dficShield,
} from '../data/content'

export default function DficTower() {
  return (
    <section id="dfic-tower">
      {/* Tower summary */}
      <div className="section section--navy-deep tower">
        <div className="container">
          <div className="tower__grid reveal">
            <div className="tower__left">
              <div className="chip" style={{ color: 'var(--gold-300)', borderColor: 'rgba(201,163,92,.5)' }}>
                TÓM TẮT ĐẦU TƯ
              </div>
              <h2 className="tower__title">{dficTower.title}</h2>
              <p className="tower__sub">{dficTower.subtitle}</p>
              <div className="tower__invest">
                <span className="tower__invest-label">{dficTower.investmentLabel}</span>
                <span className="tower__invest-value">{dficTower.investment}</span>
              </div>
            </div>
            <div className="tower__right">
              <div className="tower__image-container">
                <img className="tower__image" src="/images/dfic_tower_render.png" alt="DFIC Tower Render" loading="lazy" />
              </div>
              <div className="tower__facts">
                {dficTower.facts.map((f, i) => (
                  <div className="tower__fact" key={i}>
                    <h5>{f.label}</h5>
                    <p>{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asset structure */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{assetStructure.title}</h3>
          <div className="asset reveal">
            <div className="asset__blocks">
              {assetStructure.blocks.map((b, i) => (
                <div className="asset__block" key={i}>
                  <div className="asset__bar" style={{ '--h': `${[100, 70, 40, 24][i]}%` }} />
                  <div className="asset__info">
                    <h4>{b.name}</h4>
                    {b.meta && <span className="asset__meta">{b.meta}</span>}
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="asset__mix">
              <h4>Cơ cấu sử dụng (GFA)</h4>
              {assetStructure.mix.map((m, i) => (
                <div className="asset__mix-row" key={i}>
                  <div className="asset__mix-head">
                    <span>{m.label}</span>
                    <strong>{m.value}%</strong>
                  </div>
                  <div className="asset__mix-track">
                    <span style={{ width: `${m.value * 2.6}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{towerRoadmap.title}</h3>
          <div className="roadmap reveal">
            {towerRoadmap.phases.map((p, i) => (
              <div className="roadmap__phase" key={i}>
                <div className="roadmap__marker">{i + 1}</div>
                <div className="roadmap__card">
                  <div className="roadmap__top">
                    <strong>{p.phase}</strong>
                    <span>{p.range}</span>
                  </div>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financials */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{financials.title}</h3>
          <div className="fin reveal">
            <table className="fin__table">
              <thead>
                <tr>
                  <th>Kịch bản</th>
                  <th>Vốn đầu tư</th>
                  <th>Lợi nhuận ròng</th>
                  <th>ROI</th>
                  <th>IRR</th>
                  <th>NPV</th>
                </tr>
              </thead>
              <tbody>
                {financials.rows.map((r, i) => (
                  <tr key={i} className={i === 1 ? 'fin__base' : ''}>
                    <td className="fin__scn">{r.scenario}</td>
                    <td>{r.capital}</td>
                    <td className="fin__profit">{r.profit}</td>
                    <td>{r.roi}</td>
                    <td>{r.irr}</td>
                    <td>{r.npv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="fin__notes">
              {financials.notes.map((n, i) => (
                <p key={i}>— {n}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Risk shield */}
      <div className="section section--cream">
        <div className="container">
          <h3 className="vifc-h vifc-h--dark reveal">{dficShield.title}</h3>
          <div className="grid grid-5 reveal">
            {dficShield.items.map((it, i) => (
              <div className="card" key={i}>
                <h4 className="card__title" style={{ fontSize: 16 }}>{it.title}</h4>
                <p className="card__text">{it.text}</p>
              </div>
            ))}
          </div>
          <div className="vifc-banner vifc-banner--gold reveal" style={{ color: '#fff' }}>
            {dficShield.footer}
          </div>
        </div>
      </div>
    </section>
  )
}
