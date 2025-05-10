# Node.js Express Codebase

Đây là một dự án backend được xây dựng bằng Node.js và Express, sử dụng TypeScript để đảm bảo tính type-safe và dễ bảo trì.

## Cấu trúc thư mục

```
src/
├── configs/         # Cấu hình ứng dụng
├── constants/       # Các hằng số
├── controllers/     # Xử lý logic nghiệp vụ
├── middlewares/     # Middleware Express
├── routes/         # Định nghĩa các route
├── services/       # Các service xử lý nghiệp vụ
├── types/          # Định nghĩa TypeScript types
├── utils/          # Các tiện ích
├── validations/    # Validation schemas
└── index.ts        # Entry point của ứng dụng
```

## Tính năng chính

- Sử dụng TypeScript để type-safe
- Xử lý lỗi tập trung với Zod validation
- Hỗ trợ CORS
- Xử lý lỗi API thống nhất

## Yêu cầu hệ thống

- Node.js (phiên bản 20 trở lên)
- npm hoặc yarn

## Cài đặt

1. Clone repository:

```bash
git clone https://github.com/lofadev/nodejs-express-codebase.git
```

2. Cài đặt dependencies:

```bash
npm install
# hoặc
yarn install
```

3. Tạo file .env và cấu hình các biến môi trường cần thiết

4. Chạy ứng dụng:

```bash
npm run dev
# hoặc
yarn dev
```

## Cấu trúc API

API được tổ chức theo RESTful principles và được định nghĩa trong thư mục `routes/`.

## Xử lý lỗi

Ứng dụng sử dụng hệ thống xử lý lỗi tập trung với các loại lỗi:

- Validation errors (Zod)
- API errors
- Internal server errors

## Middleware

Các middleware được tổ chức trong thư mục `middlewares/` và có thể được áp dụng cho toàn bộ ứng dụng hoặc cho các route cụ thể.

## Validation

Sử dụng Zod để validation dữ liệu đầu vào, được định nghĩa trong thư mục `validations/`.

## License

[MIT License](LICENSE)
