# E-Commerce Application

A full-stack e-commerce platform featuring user authentication, product browsing, shopping cart, and admin dashboard for product management. Built with the MERN stack and integrated with Cloudinary for image storage.

## 🚀 Features

- **User Authentication**: Secure signup/login with JWT tokens and bcrypt password hashing
- **Product Management**: Admin can add, edit, and remove products with multiple images
- **Product Catalog**: Browse products by category and subcategory
- **Search & Filter**: Search products and filter by various criteria
- **Shopping Cart**: Add/remove items, update quantities
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Image Storage**: Cloudinary integration for product images
- **Best Sellers**: Featured products section

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Vite
- React Toastify

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- Cloudinary for image storage

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- npm or yarn

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dipti17P/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your_admin_password
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   ```

## 🚀 Running the Application

### Run Backend Server
```bash
cd backend
npm start
```
Backend will run on `http://localhost:4000`

### Run Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173` (default Vite port)

## 📁 Project Structure

```
ecommerce-app/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js      # Cloudinary configuration
│   │   └── mongodb.js          # MongoDB connection
│   ├── controllers/
│   │   ├── productController.js
│   │   └── userControllers.js
│   ├── middleware/
│   │   ├── adminAuth.js        # Admin authentication
│   │   └── multer.js           # File upload handling
│   ├── models/
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   ├── Server.js               # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── assets/             # Images and static files
│   │   ├── components/         # Reusable components
│   │   ├── context/            # React context
│   │   ├── pages/              # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## 🔑 API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Product Routes
- `GET /api/product/list` - Get all products
- `POST /api/product/single` - Get single product
- `POST /api/product/add` - Add product (Admin only)
- `POST /api/product/remove` - Remove product (Admin only)

## 👤 Admin Access

Use the admin credentials specified in your `.env` file to access admin features like adding and removing products.

## 🎨 Features Overview

### User Features
- Browse products by category
- Search products
- View product details
- Add items to cart
- User registration and login

### Admin Features
- Add new products with multiple images
- Remove products
- Manage product inventory

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any questions or feedback, please reach out via GitHub issues.

---

Made with ❤️ using MERN Stack
