import {
  digitalVNIntro,
  dualChallenge,
  sovereignVision,
  cmcStack,
  eidEcosystem,
  zkpMechanism,
  antiFraud,
  digitalGov,
  stablecoin,
  socialDigital,
  techPartners,
  dvRoadmap,
  strategicRisk,
  govFramework,
  dvFuture,
} from '../data/content'

export default function DigitalVietnam() {
  return (
    <section id="viet-nam-so">
      {/* Intro */}
      <div className="section dv-intro">
        <div className="container text-center reveal">
          <div className="dv-map" aria-hidden="true">VN</div>
          <h2 className="dv-intro__title">{digitalVNIntro.title}</h2>
          <p className="dv-intro__sub">{digitalVNIntro.subtitle}</p>
        </div>
      </div>

      {/* Dual challenge */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{dualChallenge.title}</h3>
          <div className="dual reveal">
            <div className="dual__col dual__col--gold">
              <h4>{dualChallenge.global.title}</h4>
              {dualChallenge.global.items.map((it, i) => (
                <div className="dual__item" key={i}>
                  <h5>{it.title}</h5>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
            <div className="dual__col dual__col--navy">
              <h4>{dualChallenge.challenge.title}</h4>
              {dualChallenge.challenge.items.map((it, i) => (
                <div className="dual__item" key={i}>
                  <h5>{it.title}</h5>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sovereign vision — 4 pillars */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{sovereignVision.title}</h3>
          <div className="pillars reveal">
            <div className="pillars__roof">Quốc Gia Chủ Quyền Số</div>
            <div className="pillars__row">
              {sovereignVision.pillars.map((p, i) => (
                <div className="pillar" key={i}>
                  <div className="pillar__shaft" aria-hidden="true" />
                  <h4>{p.title}</h4>
                  <span className="pillar__en">{p.en}</span>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
            <div className="pillars__base">{sovereignVision.base}</div>
          </div>
        </div>
      </div>

      {/* CMC stack */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{cmcStack.title}</h3>
          <div className="cmc reveal">
            {cmcStack.layers.map((l, i) => (
              <div className={`cmc__layer cmc__layer--${i}`} key={i}>
                <div className="cmc__layer-tag">
                  <img src={['/images/tech_icon_app.png', '/images/tech_icon_ai.png', '/images/tech_icon_chain.png'][i]} alt={['APP', 'AI', 'CHAIN'][i]} loading="lazy" />
                </div>
                <div className="cmc__layer-body">
                  <h4>
                    {l.title} <span>— {l.sub}</span>
                  </h4>
                  <p>{l.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* e-ID ecosystem */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{eidEcosystem.title}</h3>
          <div className="eid reveal">
            <div className="eid__center">
              <strong>{eidEcosystem.center}</strong>
              <p>{eidEcosystem.centerText}</p>
            </div>
            <div className="grid grid-4 eid__nodes">
              {eidEcosystem.nodes.map((n, i) => (
                <div className="eid__node" key={i}>
                  <h5>{n.title}</h5>
                  <p>{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ZKP */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{zkpMechanism.title}</h3>
          <div className="zkp reveal">
            {zkpMechanism.steps.map((s, i) => (
              <div className="zkp__step" key={i}>
                <div className="zkp__num">{i + 1}</div>
                <h4>
                  {s.title} {s.en && <span>{s.en}</span>}
                </h4>
                <p>{s.text}</p>
                {i < zkpMechanism.steps.length - 1 && <span className="zkp__arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Anti-fraud firewall */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{antiFraud.title}</h3>
          <div className="firewall reveal">
            {antiFraud.filters.map((f, i) => (
              <div className="firewall__filter" key={i}>
                <span className="firewall__level">{f.level}</span>
                <h4>{f.name}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital government */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{digitalGov.title}</h3>
          <div className="govdig reveal">
            <div className="govdig__input">{digitalGov.input}</div>
            <div className="grid grid-3">
              {digitalGov.items.map((it, i) => (
                <div className="govdig__card" key={i}>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stablecoin */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{stablecoin.title}</h3>
          <div className="stable reveal">
            <div className="stable__side">
              <h4>{stablecoin.left.title}</h4>
              <p>{stablecoin.left.text}</p>
            </div>
            <div className="stable__core">
              <strong>{stablecoin.center}</strong>
              <p>{stablecoin.centerText}</p>
            </div>
            <div className="stable__side">
              <h4>{stablecoin.right.title}</h4>
              <p>{stablecoin.right.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education & healthcare */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{socialDigital.title}</h3>
          <div className="grid grid-2 reveal">
            {[socialDigital.education, socialDigital.healthcare].map((b, i) => (
              <div className={`social social--${i}`} key={i}>
                <h4>{b.title}</h4>
                <ul>
                  {b.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech partners */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{techPartners.title}</h3>
          <div className="partners reveal">
            <div className="partners__row">
              <span className="partners__tag">Quốc gia Tín nhiệm</span>
              <div className="partners__cards">
                {techPartners.trustedNations.map((p, i) => (
                  <div className="partners__card" key={i}>
                    <h5>{p.name}</h5>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="partners__row">
              <span className="partners__tag">Đối tác Công nghệ Cốt lõi</span>
              <div className="partners__cards">
                {techPartners.coreTech.map((p, i) => (
                  <div className="partners__card" key={i}>
                    <h5>{p.name}</h5>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DV roadmap */}
      <div className="section section--navy-deep">
        <div className="container">
          <h3 className="vifc-h reveal">{dvRoadmap.title}</h3>
          <div className="dvroad reveal">
            {dvRoadmap.stages.map((s, i) => (
              <div className="dvroad__stage" key={i} style={{ '--lvl': i }}>
                <div className="dvroad__badge">{i + 1}</div>
                <h4>{s.name}</h4>
                {s.sub && <span className="dvroad__sub">{s.sub}</span>}
                <ul>
                  {s.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic risk */}
      <div className="section section--light">
        <div className="container">
          <h3 className="dv-h reveal">{strategicRisk.title}</h3>
          <div className="srisk reveal">
            <div className="srisk__head">
              <span>The Risk</span>
              <span>The Mitigation Strategy</span>
            </div>
            {strategicRisk.rows.map((r, i) => (
              <div className="srisk__row" key={i}>
                <div className="srisk__risk">
                  <h4>{r.risk}</h4>
                  <span>{r.riskSub}</span>
                </div>
                <div className="srisk__mit">{r.mitigation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Governance framework */}
      <div className="section section--navy">
        <div className="container">
          <h3 className="vifc-h reveal">{govFramework.title}</h3>
          <div className="govf reveal">
            <div className="govf__apex">
              <h4>{govFramework.apex.title}</h4>
              <p>{govFramework.apex.text}</p>
            </div>
            <div className="govf__cols">
              <div className="govf__col">
                <span className="govf__col-tag">{govFramework.core.title}</span>
                {govFramework.core.items.map((it, i) => (
                  <div className="govf__item" key={i}>
                    <strong>{it.name}</strong>
                    <p>{it.text}</p>
                  </div>
                ))}
              </div>
              <div className="govf__col">
                <span className="govf__col-tag">{govFramework.oversight.title}</span>
                {govFramework.oversight.items.map((it, i) => (
                  <div className="govf__item" key={i}>
                    <strong>{it.name}</strong>
                    <p>{it.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future */}
      <div className="section section--light">
        <div className="container text-center reveal dvfuture">
          <h3 className="dv-h dv-h--center">{dvFuture.title}</h3>
          <p className="dvfuture__text">{dvFuture.text}</p>
          <div className="dvfuture__footer">{dvFuture.footer}</div>
        </div>
      </div>
    </section>
  )
}
