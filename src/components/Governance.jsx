import { riskShield, partnership, leadership } from '../data/content'
import SectionHeader from './SectionHeader'

// Bỏ kính ngữ (Ông/Bà/...) rồi lấy chữ cái đầu mỗi từ làm chữ lồng, vd "CMC".
function monogram(name) {
  return name
    .replace(/^(Ông|Bà|Anh|Chị|Mr\.?|Ms\.?|Mrs\.?)\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

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
          <div className="shield__graphic-container">
            <img className="shield__graphic float-img" src="/images/risk_shield_graphic.png" alt="Lá chắn rủi ro & tuân thủ" loading="lazy" />
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
            <figure className="leader" key={i}>
              <div className="leader__frame">
                {p.photo ? (
                  <img className="leader__photo" src={p.photo} alt={p.name} loading="lazy" />
                ) : (
                  <span className="leader__monogram" aria-hidden="true">
                    {monogram(p.name)}
                  </span>
                )}
              </div>
              <figcaption className="leader__caption">
                <h4 className="leader__name">{p.name}</h4>
                <div className="leader__role">{p.role}</div>
                <span className="leader__rule" aria-hidden="true" />
                <p className="leader__bio">{p.bio}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
