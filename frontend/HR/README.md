# Hải Phong HR - Quản lý tuyển dụng

Ứng dụng HR dành cho việc quản lý leads và users trong hệ thống tuyển dụng của Tập đoàn Hải Phong.

## Công nghệ sử dụng

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **ZMP-UI** - Component library
- **React Router** - Routing

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

## Cấu trúc thư mục

```
src/
├── pages/
│   ├── login.jsx          # Trang đăng nhập HR
│   └── hr-dashboard.jsx   # Dashboard quản lý
├── services/
│   └── api.js             # API service
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Tính năng

### Đăng nhập
- Xác thực HR/Admin
- Lưu token và thông tin user
- Redirect tự động sau đăng nhập

### Dashboard
- **Thống kê tổng quan**: Leads, Users, Conversion rate
- **Quản lý Leads**: Xem danh sách, chuyển đổi thành User
- **Quản lý Users**: Xem danh sách users đã tạo
- **Chuyển đổi Lead → User**: Tạo tài khoản cho ứng viên

## API Endpoints

Ứng dụng kết nối với backend API tại `http://localhost:5000/api`:

- **Auth**: `/auth/login`, `/auth/profile`
- **Leads**: `/leads`, `/leads/stats`, `/leads/:id/convert`
- **Users**: `/users`, `/users/stats`

## Tạo tài khoản

Tạo tài khoản admin đầu tiên thông qua API hoặc giao diện quản trị.

## Port

Ứng dụng chạy trên port **3001** để tránh xung đột với User app (port 3000).

## Luồng hoạt động

1. **HR đăng nhập** → Xác thực thành công
2. **Xem dashboard** → Thống kê và danh sách leads/users
3. **Quản lý leads** → Cập nhật thông tin, ghi chú
4. **Chuyển đổi lead** → Tạo user account cho ứng viên
5. **Quản lý users** → Theo dõi trạng thái ứng viên
