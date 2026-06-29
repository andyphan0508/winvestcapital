import {
  opsIntro,
  opsEcosystem,
  orgStructure,
  governanceMatrix,
  kpiDashboard,
  maturityRoadmap,
} from '../data/content'

export default function Operations() {
  return (
    <section id="van-hanh" className="section section--light ops">
      <div className="container">
        {/* Intro */}
        <div className="ops__intro reveal">
          <div className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            {opsIntro.tagline}
          </div>
          <h2 className="ops__title">{opsIntro.title}</h2>
          <p className="ops__sub">{opsIntro.subtitle}</p>
        </div>

        {/* Ecosystem hub */}
        <h3 className="ops__h reveal">{opsEcosystem.title}</h3>
        <div className="hub reveal">
          <div className="hub__center">{opsEcosystem.center}</div>
          <div className="hub__nodes">
            {opsEcosystem.nodes.map((n, i) => (
              <div className="hub__node" key={i}>
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Org structure */}
        <h3 className="ops__h reveal">
          {orgStructure.title} <span className="ops__h-tag">{orgStructure.scale}</span>
        </h3>
        <div className="org reveal">
          <div className="org__lead">
            <h4>{orgStructure.leadership.title}</h4>
            <p>{orgStructure.leadership.text}</p>
          </div>
          <div className="org__teams">
            {orgStructure.teams.map((t, i) => (
              <div className="org__team" key={i}>
                <h5>{t.title}</h5>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Governance matrix */}
        <h3 className="ops__h reveal">{governanceMatrix.title}</h3>
        <div className="grid grid-4 reveal">
          {governanceMatrix.committees.map((c, i) => (
            <div className="committee" key={i}>
              <h4>{c.name}</h4>
              <span className="committee__tag">{c.tag}</span>
              <ul>
                {c.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* KPI dashboard */}
        <h3 className="ops__h reveal">{kpiDashboard.title}</h3>
        <div className="grid grid-3 reveal">
          {kpiDashboard.groups.map((g, i) => (
            <div className="kpi" key={i}>
              <h4>{g.title}</h4>
              <ul>
                {g.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Maturity roadmap */}
        <h3 className="ops__h reveal">{maturityRoadmap.title}</h3>
        <div className="maturity reveal">
          {maturityRoadmap.stages.map((s, i) => (
            <div className="maturity__stage" key={i} style={{ '--lvl': i }}>
              <div className="maturity__step">
                <h4>{s.name}</h4>
                <span className="maturity__sub">{s.sub}</span>
                <ul>
                  {s.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
