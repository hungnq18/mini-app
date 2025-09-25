# 🚀 Hải Phong Recruitment System

Hệ thống tuyển dụng và xuất khẩu lao động của Tập đoàn Hải Phong, hỗ trợ tìm kiếm cơ hội việc làm tại Đức, Nhật Bản và Việt Nam.

## 📋 Tổng quan

Hệ thống bao gồm:
- **Frontend User**: Trang đăng ký cho ứng viên (Zalo Mini App)
- **Frontend HR**: Dashboard quản lý cho HR
- **Backend API**: RESTful API với Node.js và MongoDB
- **Zalo Integration**: Tích hợp với Zalo Mini App

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 18** với Vite
- **ZMP-UI** cho Zalo Mini App
- **Tailwind CSS** cho styling
- **React Router** cho routing

### Backend
- **Node.js** với Express
- **MongoDB** với Mongoose
- **JWT** cho authentication
- **Helmet** cho security
- **Rate Limiting** cho performance

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+
- MongoDB 6.0+

### Cài đặt

```bash
# 1. Cài đặt Backend
cd backend
npm install
cp config.env.example config.env
# Chỉnh sửa config.env với thông tin thực tế
npm run dev

# 2. Cài đặt Frontend User
cd ../frontend/User
npm install
npm run dev

# 3. Cài đặt Frontend HR
cd ../HR
npm install
npm run dev
```

## 📱 Truy cập ứng dụng

- **User Landing Page**: http://localhost:2999
- **HR Dashboard**: http://localhost:3001
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health
`

## 🔒 Security Features

- **Helmet**: Security headers
- **Rate Limiting**: API protection
- **CORS**: Cross-origin protection
- **JWT**: Secure authentication
- **Input Validation**: Data sanitization
- **MongoDB Indexes**: Performance optimization

## 📈 Performance Optimization

- **Database Indexing**: Optimized queries
- **Rate Limiting**: Prevent abuse
- **Gzip Compression**: Reduced payload
- **Caching**: Improved response times
- **Connection Pooling**: Database efficiency

## 🛠️ Development

### Code Structure
```
haiphong/
├── backend/           # Node.js API
│   ├── controllers/   # Route handlers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── config/        # Configuration
├── frontend/
│   ├── User/          # Landing page
│   └── HR/            # HR dashboard
└── README.md          # Documentation
```

### Scripts
```bash
# Backend
npm run dev          # Development mode
npm run start        # Production mode

# Frontend
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build
```

## 📝 Changelog

### v1.0.0
- Initial release
- User registration system
- HR dashboard
- Zalo Mini App integration
- Optimized performance



## 🙏 Acknowledgments

- Zalo Mini App Platform
- React Community
- Node.js Community
- MongoDB Community
