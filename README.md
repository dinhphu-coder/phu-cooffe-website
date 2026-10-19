# Phú Cooffe ☕

Website giới thiệu quán cà phê Phú Cooffe — Cà phê Việt Nam đích thực.

## 🌟 Tính năng

- **Trang chủ**: Hero section với hình ảnh đẹp, thống kê ấn tượng
- **Thực đơn**: Hiển thị các món đồ uống & ăn vặt với filter theo danh mục
- **Giới thiệu**: Câu chuyện thương hiệu & giá trị cốt lõi
- **Đánh giá**: Testimonials từ khách hàng
- **Liên hệ**: Form liên hệ & thông tin quán

## 🛠 Công nghệ

- HTML5 semantic
- CSS3 (custom properties, animations, responsive)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Playfair Display, JetBrains Mono)

## 🚀 Deploy

### Cloudflare Pages

1. Đẩy code lên GitHub
2. Vào [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Chọn repository này
5. Build settings:
   - **Build command**: (để trống)
   - **Build output directory**: `/`
6. Click "Save and Deploy"

### Chạy local

Mở file `index.html` trực tiếp trong trình duyệt hoặc dùng live server:

```bash
npx serve .
```

## 📁 Cấu trúc

```
├── index.html       # Trang chính
├── styles.css       # Stylesheet
├── app.js           # JavaScript logic
├── images/          # Hình ảnh
│   ├── hero-coffee.jpg
│   ├── about-interior.jpg
│   ├── coffee-drinks.jpg
│   ├── ca-phe-sua-da.jpg
│   ├── ca-phe-den.jpg
│   └── ca-phe-trung.jpg
├── README.md
└── .gitignore
```

## 📝 License

© 2024 Phú Cooffe. All rights reserved.
