# Winvest Capital — Website Profile (VIFC-DN)

Trang web profile cho **Winvest Capital**, xây dựng bằng **React + Vite**, tái hiện nội dung
và phong cách thiết kế (navy + gold, định chế tài chính cao cấp) từ hồ sơ
*Winvest Capital Profile – VIFC DN (V3, 06/2026)*.

## Chạy dự án

```bash
npm install      # cài dependencies
npm run dev      # chạy dev server (http://localhost:5173)
npm run build    # build production vào /dist
npm run preview  # xem thử bản build
```

## Cấu trúc

```
src/
├─ main.jsx                 # entry
├─ App.jsx                  # lắp ráp các section
├─ data/content.js          # TOÀN BỘ nội dung tiếng Việt (tách khỏi giao diện)
├─ hooks/useReveal.js       # hiệu ứng hiện dần khi cuộn
├─ styles/
│  ├─ index.css             # design system (màu, font, layout, card, grid…)
│  └─ components.css        # style cho từng component
└─ components/
   ├─ Navbar.jsx            # thanh điều hướng
   ├─ Hero.jsx              # trang bìa
   ├─ Intro.jsx             # giới thiệu + bản đồ định vị 5 lớp
   ├─ VisionMission.jsx     # tầm nhìn, sứ mệnh, triết lý, giá trị cốt lõi
   ├─ Capabilities.jsx      # Winvest là ai, 5 chương trình, ma trận năng lực,
   │                        #   mô hình vận hành, năng lực cốt lõi
   ├─ Governance.jsx        # lá chắn rủi ro, khung đối tác, ban lãnh đạo
   ├─ Vifc.jsx              # VIFC-DN: cửa ngõ, GMT+7, tam trụ, hạ tầng, FTZ, 5 đảo
   ├─ DficTower.jsx         # tháp DFIC: cơ cấu, lộ trình, ROI/IRR, lá chắn
   ├─ Operations.jsx        # vận hành tích hợp: tổ chức, ủy ban, KPI, lộ trình
   ├─ DigitalVietnam.jsx    # Việt Nam Số (CMC): e-ID, ZKP, stablecoin, …
   └─ Closing.jsx           # trích dẫn kết + footer
```

## Bảng màu

| Token | Màu | Dùng cho |
|-------|-----|----------|
| Navy  | `#14233f` / `#0e1a30` | nền chính, chữ tiêu đề |
| Gold  | `#b8935a` / `#c9a35c` | điểm nhấn, số liệu, viền |
| Cream | `#f4efe3` | nền sáng |

Fonts: **Cormorant Garamond** (serif sang trọng) + **Be Vietnam Pro** (hỗ trợ tiếng Việt).

Toàn bộ nội dung nằm trong `src/data/content.js` — chỉnh sửa câu chữ ở đó là cập nhật cả trang.
