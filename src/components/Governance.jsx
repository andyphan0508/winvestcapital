import { riskShield, partnership, leadership } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Governance() {
  return (
    <section className="section section--navy" id="quan-tri">
      <div className="container">
        <SectionHeader
          eyebrow="Quản trị rủi ro & tuân thủ (Lá chắn)"
          title="Nền móng của mọi hoạt động định chế"
          center
        />

        {/* Risk shield — 5 concentric layers */}
        <div className="shield reveal">
          <div className="shield__rings" aria-hidden="true">
            <span /><span /><span /><span />
            <div className="shield__core">🛡</div>
          </div>
          <ol className="shield__list">
            {riskShield.layers.map((l) => (
              <li key={l.id}>
                <span className="shield__num">{l.id}</span>
                <div>
                  <h4>{l.title}</h4>
                  <p>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Partnership framework */}
        <div className="divider-gold reveal" style={{ margin: '76px 0 14px' }}>
          <span>KHUNG HỢP TÁC ĐỐI TÁC CHIẾN LƯỢC</span>
        </div>
        <p className="text-center reveal" style={{ marginBottom: 40, color: '#c3cee0' }}>
          {partnership.intro}
        </p>
        <div className="grid grid-2 reveal">
          {partnership.groups.map((g, i) => (
            <div className="card--glass card" key={i}>
              <h4 className="card__title">{g.title}</h4>
              <p className="card__text">{g.text}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="divider-gold reveal" style={{ margin: '76px 0 44px' }}>
          <span>KIẾN TRÚC SƯ HỆ SINH THÁI</span>
        </div>
        <div className="grid grid-4 reveal leaders">
          {leadership.map((p, i) => (
            <div className="leader" key={i}>
              <div className="leader__avatar" aria-hidden="true">
                {p.name.split(' ').slice(-1)[0].charAt(0)}
              </div>
              <h4 className="leader__name">{p.name}</h4>
              <div className="leader__role">{p.role}</div>
              <p className="leader__bio">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
