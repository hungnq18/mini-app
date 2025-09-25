 # Zalo Integration Setup Guide

## Vấn đề hiện tại
- Lỗi "Load failed" khi gọi API từ Zalo environment
- Không thể kết nối đến backend server

## Giải pháp

### 1. Cấu hình Backend URL

Cập nhật file `frontend/User/src/config/api.js`:

```javascript
const API_CONFIG = {
  // Development URLs
  development: {
    baseURL: 'http://localhost:5000/api',
    timeout: 10000
  },
  
  // Production URLs - THAY ĐỔI URL NÀY
  production: {
    baseURL: 'https://YOUR_ACTUAL_DOMAIN.com/api',
    timeout: 15000
  },
  
  // Zalo environment URLs - THAY ĐỔI URL NÀY
  zalo: {
    baseURL: 'https://YOUR_ACTUAL_DOMAIN.com/api',
    timeout: 15000
  }
};
```

### 2. Deploy Backend

1. Deploy backend lên server production
2. Đảm bảo server có HTTPS
3. Cập nhật CORS để cho phép Zalo domains

### 3. Cấu hình Zalo App

1. Trong Zalo Developer Console
2. Cập nhật Webhook URL: `https://YOUR_ACTUAL_DOMAIN.com/api/zalo/webhook`
3. Cập nhật Redirect URL: `https://YOUR_ACTUAL_DOMAIN.com`

### 4. Test Connection

Sử dụng browser console để test:

```javascript
// Test connection
fetch('https://YOUR_ACTUAL_DOMAIN.com/api/zalo/health')
  .then(response => response.json())
  .then(data => console.log('Connection test:', data))
  .catch(error => console.error('Connection failed:', error));
```

### 5. Debug Steps

1. Kiểm tra console log để xem URL được sử dụng
2. Test connection trước khi gửi token
3. Kiểm tra CORS headers
4. Verify HTTPS certificate

## Lưu ý quan trọng

- Zalo chỉ cho phép HTTPS trong production
- Cần domain thật, không thể dùng localhost
- CORS phải được cấu hình đúng
- Backend phải chạy ổn định

## Troubleshooting

### Lỗi "Load failed"
- Kiểm tra URL backend có đúng không
- Kiểm tra server có chạy không
- Kiểm tra CORS configuration

### Lỗi "Cannot connect to server"
- Kiểm tra network connection
- Kiểm tra firewall settings
- Kiểm tra SSL certificate
