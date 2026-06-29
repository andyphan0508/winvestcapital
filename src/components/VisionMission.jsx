import { vision, mission, philosophy, coreValues } from '../data/content'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

export default function VisionMission() {
  return (
    <section className="section section--navy-deep" id="tam-nhin">
      <div className="container">
        <SectionHeader
          eyebrow="Tầm nhìn & Sứ mệnh định chế"
          title="Kiến tạo biểu tượng năng lực Việt Nam trong kỷ nguyên vốn toàn cầu"
          center
        />

        <div className="vm__grid">
          <div className="vm__vision reveal">
            <div className="vm__badge">Tầm nhìn</div>
            <p>{vision.text}</p>
          </div>

          <div className="vm__mission reveal">
            <div className="vm__badge">Sứ mệnh</div>
            <p className="vm__mission-intro">{mission.intro}</p>
            <ul className="vm__steps">
              {mission.points.map((p, i) => (
                <li key={i}>
                  <span className="vm__step-dot">{i + 1}</span>
                  <span>
                    <strong>{p.title}:</strong> {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Philosophy */}
        <div className="philosophy reveal">
          <div className="philosophy__head">
            <div className="eyebrow">Triết lý đầu tư và phát triển</div>
            <h3 className="philosophy__headline">{philosophy.headline}</h3>
          </div>
          <div className="grid grid-2">
            {philosophy.items.map((it, i) => (
              <div className="philosophy__card" key={i}>
                <span className="philosophy__icon">
                  <Icon name={it.icon} size={28} />
                </span>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core values */}
        <div className="values reveal">
          <div className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            Giá trị cốt lõi
          </div>
          <div className="grid grid-3 values__grid">
            {coreValues.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-card__icon">
                  <Icon name={v.icon} size={24} />
                </span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
