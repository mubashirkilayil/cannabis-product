Cannabis Product Discovery Platform

A full-stack web application for discovering, browsing, and managing cannabis products. Users can view products, filter by category and price, add to cart, and admins can manage product listings.

Features:

Authentication (JWT based)
- User Sign Up / Login
- Forgot Password / Reset Password
- Protected routes for admin functionality
- JWT-based authentication (optional)

Product Features
- View list of cannabis products
- Search products by name
- Filter by category: Flower, Edibles, Oils
- Filter by price range
- Detailed product page with description, THC %, CBD %, and image
- Add new products
- Edit existing products
- will show the logined user name on navbar as HI,<user_name>
- Upload product images

Cart Functionality
- Add products to cart
- Cart item count displayed in navbar
- Cart persisted in localStorage

Responsive Design
- Mobile-friendly layout
- Clean and modern UI
- Reusable components

Tech Stack:

Frontend: React.js, React Router DOM, Axios, React Toastify, CSS / Tailwind, react-icons
Backend: Node.js, Express.js, MongoDB, Mongoose, Multer, JWT, Nodemailer

Project Structure:

client/
├── pages/
├── Components/
└── Utils/

server/
├── db/
├── models/
├── routes/
├── middleware/
└── server.js

API Endpoints:

User Routes
- POST /api/user/sign-up
- GET /api/user
- GET /api/user/:id
- PATCH /api/user/:id
- DELETE /api/user/:id
- POST /api/user/login
- POST /api/user/forgot-password
- POST /api/user/reset-password

Product Routes
- GET /api/product
- GET /api/product/:id
- POST /api/product
- PATCH /api/product/:id
- DELETE /api/product/:id

Upload Route
- POST /api/upload

Installation & Setup:

1. Clone the repo: git clone <your-repo-link>
2. Install dependencies: npm install
4. Run backend: npm run dev
5. Run frontend: npm run dev

User Roles:
- User → Browse products, search, filter, add to cart
- Admin → Add, edit, and delete products

Future Improvements:
- Payment gateway integration
- Wishlist feature
- Product reviews and ratings
- Admin dashboard
- Redux or Context API for global state management
- Enhanced filtering and sorting

Developed By:
Mubashir K
mubashirkilayil8@gmail.com
Year: 2026
