export default function SectionHeader({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`section-head reveal ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
