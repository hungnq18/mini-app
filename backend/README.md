# Hải Phong Recruitment Backend API

Backend API cho hệ thống tuyển dụng của Tập đoàn Hải Phong.

## Cấu trúc hệ thống

### Lead (Ứng viên tiềm năng)
- Khi user điền form đăng ký → tạo Lead
- Lead chứa thông tin cơ bản từ form
- HR có thể quản lý, cập nhật, ghi chú cho Lead
- Khi HR hoàn thiện thông tin → chuyển đổi Lead thành User

### User (Ứng viên chính thức)
- Được tạo từ Lead sau khi HR hoàn thiện thông tin
- Có tài khoản đăng nhập
- Có thể cập nhật thông tin cá nhân
- Có vai trò: admin, hr, candidate

## Cài đặt

### 1. Cài đặt dependencies
```bash
cd backend
npm install
```

### 2. Cấu hình môi trường
Tạo file `config.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/haiphong_recruitment
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### 3. Chạy server
```bash
# Development
npm run dev

# Production
npm start
```


## API Endpoints

### Authentication
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký (Admin only)
- `GET /api/auth/profile` - Lấy thông tin profile
- `PUT /api/auth/profile` - Cập nhật profile
- `PUT /api/auth/change-password` - Đổi mật khẩu
- `POST /api/auth/forgot-password` - Quên mật khẩu
- `POST /api/auth/reset-password` - Reset mật khẩu

### Leads
- `POST /api/leads` - Tạo lead mới (Public)
- `GET /api/leads` - Lấy danh sách leads (HR/Admin)
- `GET /api/leads/:id` - Lấy thông tin lead (HR/Admin)
- `PUT /api/leads/:id` - Cập nhật lead (HR/Admin)
- `DELETE /api/leads/:id` - Xóa lead (Admin)
- `POST /api/leads/:id/convert` - Chuyển đổi lead thành user (HR/Admin)
- `POST /api/leads/:id/notes` - Thêm ghi chú cho lead (HR/Admin)
- `GET /api/leads/stats` - Thống kê leads (HR/Admin)

### Users
- `GET /api/users` - Lấy danh sách users (HR/Admin)
- `GET /api/users/:id` - Lấy thông tin user (HR/Admin)
- `POST /api/users` - Tạo user mới (Admin)
- `PUT /api/users/:id` - Cập nhật user (HR/Admin)
- `DELETE /api/users/:id` - Xóa user (Admin)
- `PUT /api/users/:id/password` - Đổi mật khẩu user (HR/Admin)
- `PUT /api/users/:id/reset-password` - Reset mật khẩu user (Admin)
- `GET /api/users/stats` - Thống kê users (HR/Admin)
- `GET /api/users/hr/:hrId` - Lấy users theo HR (HR/Admin)

### Zalo Integration
- `GET /api/zalo/validate` - Kiểm tra môi trường Zalo
- `POST /api/zalo/user-info` - Lấy thông tin user từ Zalo
- `POST /api/zalo/create-lead` - Tạo lead từ Zalo

## Quyền truy cập

### Public
- Tạo lead (đăng ký)

### HR/Admin
- Xem và quản lý leads
- Chuyển đổi lead thành user
- Xem và quản lý users
- Thống kê

### Admin only
- Tạo user mới
- Xóa lead/user
- Reset mật khẩu

## Tạo tài khoản

Tạo tài khoản admin đầu tiên thông qua API:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@haiphong.com",
    "password": "admin123",
    "role": "admin"
  }'
```

## Công nghệ sử dụng

- Node.js
- Express.js
- MongoDB với Mongoose
- JWT Authentication
- Express Validator
- Bcryptjs
- Helmet (Security)
- CORS
- Rate Limiting

## Cấu trúc thư mục

```
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── leadController.js
│   └── userController.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── validation.js
├── models/
│   ├── Lead.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── leadRoutes.js
│   └── userRoutes.js
├── scripts/
│   └── seedData.js
├── config.env
├── package.json
├── README.md
└── server.js
```
