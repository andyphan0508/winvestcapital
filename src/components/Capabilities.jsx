import {
  whoWeAre,
  ecosystemStack,
  capabilityMatrix,
  operatingModel,
  coreCompetencies,
} from '../data/content'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

export default function Capabilities() {
  return (
    <section className="section section--cream" id="nang-luc">
      <div className="container">
        {/* Who we are */}
        <SectionHeader eyebrow="Winvest Capital là ai" title="Đơn vị thiết kế cấu trúc & kiến tạo hệ sinh thái" />
        <div className="who reveal">
          <p className="who__text">{whoWeAre.text}</p>
          <div className="who__spokes">
            {whoWeAre.spokes.map((s, i) => (
              <div className="who__spoke" key={i}>
                <span className="who__spoke-dot" />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="who__footer reveal">{whoWeAre.footer}</div>

        {/* Ecosystem stack */}
        <div className="divider-gold reveal" style={{ margin: '72px 0 44px' }}>
          <span>NĂM CHƯƠNG TRÌNH CHIẾN LƯỢC TRỌNG ĐIỂM</span>
        </div>
        <div className="stack reveal">
          {ecosystemStack.map((s) => (
            <div className="stack__row" key={s.id}>
              <div className="stack__index">
                <span>{s.id}</span>
              </div>
              <div className="stack__code">{s.code}</div>
              <div className="stack__body">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Capability matrix */}
        <div className="divider-gold reveal" style={{ margin: '72px 0 44px' }}>
          <span>MA TRẬN LĨNH VỰC CHIẾN LƯỢC</span>
        </div>
        <p className="text-center reveal" style={{ marginTop: '-22px', marginBottom: 40, color: 'var(--ink-700)' }}>
          Danh mục năng lực Winvest Capital theo trục vốn - công nghệ - hạ tầng - thương mại
        </p>
        <div className="grid grid-3 reveal">
          {capabilityMatrix.map((c) => (
            <div className="card" key={c.id}>
              <div className="cap__head">
                <span className="cap__num">{c.id}</span>
                <h4 className="cap__title">{c.title}</h4>
              </div>
              <p className="card__text">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Operating model */}
        <div className="divider-gold reveal" style={{ margin: '72px 0 44px' }}>
          <span>MÔ HÌNH VẬN HÀNH: KIẾN TRÚC PHÂN LỚP</span>
        </div>
        <p className="text-center reveal" style={{ marginTop: '-22px', marginBottom: 40, color: 'var(--ink-700)' }}>
          {operatingModel.subtitle}
        </p>
        <div className="opmodel reveal">
          <div className="opmodel__flow">
            {operatingModel.layers.map((l, i) => (
              <div className="opmodel__node" key={i}>
                <h4>{l.title}</h4>
                <p>{l.text}</p>
                {i < operatingModel.layers.length - 1 && <span className="opmodel__arrow">↓</span>}
              </div>
            ))}
          </div>
          <aside className="opmodel__consortium">
            <h4>{operatingModel.consortium.title}</h4>
            <p>{operatingModel.consortium.text}</p>
          </aside>
        </div>
        <div className="opmodel__logic reveal">{operatingModel.logic}</div>

        {/* Core competencies */}
        <div className="divider-gold reveal" style={{ margin: '72px 0 44px' }}>
          <span>NĂNG LỰC CỐT LÕI (NĂNG LỰC NỀN TẢNG)</span>
        </div>
        <div className="grid grid-2 reveal">
          {coreCompetencies.map((c, i) => (
            <div className="competency" key={i}>
              <span className="competency__icon">
                <Icon name={i === 0 ? 'lock' : 'network'} size={30} />
              </span>
              <h4>
                {c.title} <span>{c.subtitle}</span>
              </h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
