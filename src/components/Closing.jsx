import { closing, brand } from '../data/content'

export default function Closing() {
  return (
    <>
      <section className="closing section--cream-2" id="lien-he">
        <div className="container">
          <div className="closing__frame reveal">
            <div className="closing__inner">
              <p className="closing__quote">“{closing.quote}”</p>
              <div className="divider-gold" style={{ margin: '28px 0' }} />
              <div className="closing__brand">{closing.name}</div>
              <p className="closing__tag">{closing.tagline}</p>
              <p className="closing__meta">
                {closing.website} &nbsp;|&nbsp; {closing.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="nav__mark">W</span>
            <div>
              <div className="footer__name">WINVEST CAPITAL</div>
              <p className="footer__tag">{brand.viTagline}</p>
            </div>
          </div>
          <div className="footer__cols">
            <div>
              <h5>Định chế</h5>
              <a href="#gioi-thieu">Giới thiệu</a>
              <a href="#tam-nhin">Tầm nhìn & Sứ mệnh</a>
              <a href="#nang-luc">Năng lực cốt lõi</a>
              <a href="#quan-tri">Quản trị & Lãnh đạo</a>
            </div>
            <div>
              <h5>Dự án & Chương trình</h5>
              <a href="#vifc-dn">VIFC-DN</a>
              <a href="#dfic-tower">DFIC Tower</a>
              <a href="#van-hanh">Vận hành tích hợp</a>
              <a href="#viet-nam-so">Việt Nam Số</a>
            </div>
            <div>
              <h5>Liên hệ</h5>
              <a href="https://www.winvestcapital.vn" target="_blank" rel="noreferrer">
                www.winvestcapital.vn
              </a>
              <span>Đà Nẵng, Việt Nam</span>
              <span>Hồ sơ Doanh nghiệp · {brand.date}</span>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <span>© 2026 Winvest Capital. Bảo lưu mọi quyền.</span>
        </div>
      </footer>
    </>
  )
}
