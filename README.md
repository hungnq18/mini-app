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

## 🔧 Cấu hình Zalo Mini App

1. Đăng nhập [Zalo Developer Console](https://developers.zalo.me/)
2. Tạo Mini App mới
3. Cấu hình:
   - **App ID**: `1396606563538150743`
   - **Domain**: `http://localhost:2999`
   - **Permissions**: `user.phone`, `user.info`
4. Cập nhật `ZALO_APP_ID` trong `backend/config.env`

### ZMP SDK Integration
Ứng dụng sử dụng ZMP SDK chính thức để lấy số điện thoại:
```javascript
import { getPhoneNumber } from "zmp-sdk/apis";

const phoneData = await getPhoneNumber();
```

## 📊 API Endpoints

### Leads
- `POST /api/leads` - Tạo lead mới
- `GET /api/leads` - Lấy danh sách leads
- `GET /api/leads/:id` - Lấy chi tiết lead
- `PUT /api/leads/:id` - Cập nhật lead
- `DELETE /api/leads/:id` - Xóa lead

### Users
- `POST /api/users` - Tạo user mới
- `GET /api/users` - Lấy danh sách users
- `GET /api/users/:id` - Lấy chi tiết user
- `PUT /api/users/:id` - Cập nhật user

### Auth
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/logout` - Đăng xuất

### Zalo
- `POST /api/zalo/user-info` - Xử lý thông tin Zalo

## 🗄️ Database Schema

### Lead Model
```javascript
{
  name: String,
  phone: String,
  email: String,
  birthYear: Number,
  qualification: String,
  country: String,
  message: String,
  zaloInfo: Object,
  status: String,
  priority: String,
  assignedTo: ObjectId,
  notes: Array,
  convertedToUser: ObjectId,
  additionalInfo: Object,
  source: String,
  ipAddress: String,
  userAgent: String
}
```

### User Model
```javascript
{
  name: String,
  email: String,
  phone: String,
  password: String,
  role: String,
  isActive: Boolean,
  lastLogin: Date,
  profile: Object
}
```

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

## 📞 Support

- **Email**: info@haiphong.com
- **Phone**: 1900 1234
- **Address**: Hải Phòng, Việt Nam

## 🙏 Acknowledgments

- Zalo Mini App Platform
- React Community
- Node.js Community
- MongoDB Community
