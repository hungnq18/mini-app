# Cập nhật URL Test cho Zalo

## Bước 1: Cập nhật URL test

Mở file `frontend/User/src/config/api.js` và thay đổi:

```javascript
// Tìm dòng này:
baseURL: 'https://your-test-domain.com/api', // THAY ĐỔI URL NÀY

// Thay thành URL test thật của bạn, ví dụ:
baseURL: 'https://haiphong-test.herokuapp.com/api',
// hoặc
baseURL: 'https://test-haiphong.vercel.app/api',
// hoặc
baseURL: 'https://api-test.haiphong.com/api',
```

## Bước 2: Kiểm tra URL

Sau khi cập nhật, mở browser console và kiểm tra:

```javascript
// Sẽ thấy log như này:
Environment detection: { hostname: "h5.zadn.vn", href: "https://h5.zadn.vn/..." }
Detected Zalo environment, using test URL
API Config: { environment: "zalo", baseURL: "https://your-test-url.com/api", ... }
```

## Bước 3: Test connection

Trong console, chạy:

```javascript
fetch('https://your-test-url.com/api/zalo/health')
  .then(response => response.json())
  .then(data => console.log('✅ Connection OK:', data))
  .catch(error => console.error('❌ Connection failed:', error));
```

## Lưu ý

- URL phải có HTTPS
- URL phải accessible từ Zalo environment
- Backend phải có CORS cho phép Zalo domains
