# Health E-Commerce - Production Ready UI/UX (Complete)

> **Frontend Modul 3: Complete E-Commerce dengan AI Chatbot, Payment Integration, Authentication, Order History, dan Cloudinary**

[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.12-cyan)](https://ant.design/)
[![Playwright](https://img.shields.io/badge/Playwright-1.40-green)](https://playwright.dev/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95+-brightgreen)](https://developers.google.com/web/tools/lighthouse)

**Production-ready e-commerce dengan AI recommendations, real payment, authentication, order tracking, dan image upload!**

---

## Complete Features

### Full E-Commerce Flow
- Product browsing dengan filters & pagination
- Product detail pages
- Shopping cart (add/remove/update) dengan backend sync
- Multi-step checkout form dengan auto-fill dari profile
- **Midtrans payment integration**
- **Google Gemini AI chatbot** (product recommendations)
- Order success confirmation
- **Order history & order detail pages**
- **User authentication** (login, register, profile)
- **Profile management** dengan photo upload (Cloudinary)

### UI/UX Excellence
- Fully responsive (mobile-first)
- Accessible (WCAG compliant)
- Dark mode support
- Error boundaries (graceful errors)
- Skeleton loading screens
- Smooth animations
- Lighthouse score 95+

---

## Quick Start

### Prerequisites

**WAJIB Running Backend dari Modul 5:**

PENTING: Frontend ini memerlukan backend dari Modul 5 yang sudah complete. Pastikan backend running sebelum menjalankan frontend.

```bash
# 1. Navigate ke Backend Modul 5 (Final Backend Project)
cd ../../backend/health-ecommerce-external-integration/finished-project

# 2. Install dependencies
npm install

# 3. Setup .env file dengan API keys yang diperlukan:
# Buat file .env di folder finished-project backend
# Isi dengan:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/health_ecommerce
# JWT_SECRET=your_jwt_secret_key
# GEMINI_API_KEY=your_google_gemini_api_key
# MIDTRANS_SERVER_KEY=your_midtrans_server_key
# MIDTRANS_CLIENT_KEY=your_midtrans_client_key
# CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# 4. Pastikan MongoDB running
# Opsi A: Jika menggunakan MongoDB Compass atau MongoDB Atlas
# - Buka MongoDB Compass
# - Connect ke database: mongodb://localhost:27017
# - Atau gunakan connection string dari MongoDB Atlas
# Opsi B: Jika ingin menggunakan mongod command
# - Buka terminal baru
# - Jalankan: mongod
# - Pastikan MongoDB service running

# 5. Seed database dengan sample data
npm run seed

# 6. Start backend server (keep running di terminal ini!)
npm run dev

# Backend akan running di: http://localhost:5000
# Pastikan backend URL ini sama dengan VITE_API_URL di frontend .env
```

**VERIFIKASI BACKEND:**
```bash
# Test backend health endpoint
curl http://localhost:5000/health

# Jika berhasil, akan return: { "status": "ok" }
```

**PENTING:**
- Backend HARUS running di http://localhost:5000 sebelum menjalankan frontend
- Pastikan .env di frontend memiliki: VITE_API_URL=http://localhost:5000
- Jika backend running di port lain, update VITE_API_URL sesuai dengan port backend yang digunakan

### Run Frontend

```bash
# 1. Masuk ke finished-project
cd komdigi-fsd-intermediate-modul-3-frontend-health-ecommerce-production-uiux/finished-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Browser opens at http://localhost:3000
```

---

## Complete Pages & Features

### 1. Homepage (`/`)
- Hero section
- Featured products
- Category sections
- AI Chatbot button

### 2. Products Page (`/products`)
- Product grid dengan filters
- Search functionality
- Category filter
- Price range filter
- Pagination
- Sorting options

### 3. Product Detail Page (`/products/:id`)
- Product images
- Product information
- Add to cart (requires login)
- Related products
- AI recommendations

### 4. Shopping Cart (`/cart`)
- Cart items list
- Quantity update
- Remove items
- Total calculation
- Checkout button

### 5. Checkout Page (`/checkout`)
- Multi-step form
- Shipping information (auto-fill dari profile)
- Order summary
- Payment integration (Midtrans)
- Cart auto-clear setelah payment

### 6. Order Success Page (`/order-success`)
- Payment confirmation
- Order details
- Link ke order history

### 7. Order History (`/orders`)
- Order list dengan pagination
- Status filter
- Status badges
- Link ke order detail

### 8. Order Detail (`/orders/:orderId`)
- Complete order information
- Customer details
- Item list
- Payment details
- Midtrans transaction info

### 9. Login Page (`/login`)
- Email & password login
- Link ke register
- Error handling
- Redirect setelah login

### 10. Register Page (`/register`)
- User registration form
- Validation
- Auto-login setelah register
- Link ke login

### 11. Profile Page (`/profile`)
- View & edit profile
- Profile photo upload (Cloudinary)
- Update name, email, phone, address
- Password change (optional)

---

## Authentication System

### Features
- JWT token management
- Protected routes
- Auto-logout on token expiry
- Profile management
- Persistent login (localStorage)

### Protected Routes
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/profile` - User profile
- `/orders` - Order history
- `/orders/:orderId` - Order detail
- `/order-success` - Order success page

### Auth Context
**File:** `src/context/AuthContext.jsx`

**Features:**
- Global auth state
- Login/logout functions
- Token management
- User data management
- Auto-refresh on page load

---

## Shopping Cart System

### Features
- Backend sync (database)
- LocalStorage fallback (guest users)
- Auto-sync saat login/logout
- Real-time updates
- Quantity management

### Cart Context
**File:** `src/context/CartContext.jsx`

**API Integration:**
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:productId` - Update quantity
- `DELETE /api/cart/:productId` - Remove item

---

## Payment Integration

### Midtrans Payment Flow

1. User fills checkout form
2. Click "Bayar Sekarang via Midtrans"
3. Frontend calls `POST /api/external/payment/create`
4. Backend creates order & Midtrans transaction
5. Returns `paymentUrl`
6. Frontend redirects to Midtrans payment page
7. User completes payment
8. Midtrans redirects back to `/order-success`
9. Backend webhook updates order status

### Test Credit Card (Sandbox)
```
Card Number: 4811 1111 1111 1114
CVV: 123
Exp: 01/25
```

---

## AI Chatbot Integration

### Features
- Google Gemini AI integration
- Product recommendations
- Health advice
- Add recommended products to cart
- Chat history

### Usage
1. Click "AI Assistant" button (bottom-right)
2. Type question: "Saya butuh vitamin untuk daya tahan tubuh"
3. AI processes dengan Google Gemini
4. Receive product recommendations
5. Click product untuk view detail atau add to cart

**Backend endpoint:**
```
POST http://localhost:5000/api/external/ai/chat
Body: { message: "user question", context: "health_product_recommendation" }
```

---

## Cloudinary Image Upload

### Features
- Profile photo upload
- Image optimization
- Auto-resize
- Cloudinary integration

### Usage
1. Go to Profile page
2. Click camera icon
3. Select image
4. Image uploaded to Cloudinary
5. Profile photo updated

**Backend endpoint:**
```
POST http://localhost:5000/api/upload/profile
Body: FormData { image: <file> }
```

---

## UI Components

### Ant Design Components Used
- **Form** - Login, Register, Checkout, Profile
- **Input** - Text inputs, search
- **Button** - Actions, navigation
- **Card** - Product cards, order cards
- **Table** - Order history, cart
- **Pagination** - Product list, order history
- **Select** - Filters, dropdowns
- **Alert** - Messages, notifications
- **Tag** - Status badges
- **Avatar** - Profile photos
- **Upload** - Image upload
- **Drawer** - Mobile menu
- **Result** - Success/error pages

### Custom Components
- **Navbar** - Responsive navigation dengan auth menu
- **Footer** - Site footer
- **ProductCard** - Product display card
- **ProductSkeleton** - Loading skeleton
- **ErrorBoundary** - Error handling
- **AIChatbot** - AI chatbot modal
- **ProtectedRoute** - Route protection

---

## Project Structure

```
finished-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive nav + auth menu
│   │   ├── Footer.jsx            # Footer
│   │   ├── ProductSkeleton.jsx   # Loading skeleton
│   │   ├── ErrorBoundary.jsx     # Error handling
│   │   ├── AIChatbot.jsx         # AI modal dengan Gemini
│   │   └── ProtectedRoute.jsx    # Route protection
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero + features
│   │   ├── ProductsPage.jsx      # Catalog + filters
│   │   ├── ProductDetailPage.jsx # Product detail + AI suggest
│   │   ├── CartPage.jsx          # Cart management
│   │   ├── CheckoutPage.jsx      # Multi-step checkout
│   │   ├── OrderSuccessPage.jsx  # Success confirmation
│   │   ├── OrderHistoryPage.jsx  # Order list
│   │   ├── OrderDetailPage.jsx    # Order detail
│   │   ├── LoginPage.jsx         # Authentication
│   │   ├── RegisterPage.jsx      # Registration
│   │   └── ProfilePage.jsx       # Profile management
│   │
│   ├── context/
│   │   ├── CartContext.jsx       # Global cart state + API sync
│   │   ├── ThemeContext.jsx      # Dark mode state
│   │   └── AuthContext.jsx       # Authentication state
│   │
│   ├── services/
│   │   ├── api.js                # Axios base config
│   │   ├── authService.js        # Auth API calls
│   │   ├── aiService.js          # Gemini AI integration
│   │   └── paymentService.js     # Midtrans integration
│   │
│   ├── App.jsx                   # Router config + protected routes
│   └── main.jsx                  # All providers
│
├── tests/
│   └── e2e/
│       └── shopping-flow.spec.js # Playwright tests
│
├── public/
│   └── favicon.svg               # Site favicon
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Key Technologies

### Frontend Stack
- **React 18.3** - Latest React
- **Vite 5.0** - Lightning fast build
- **React Router 6.21** - Multi-page routing
- **TanStack Query 5.17** - Smart caching & data fetching
- **Ant Design 5.12** - Professional UI components
- **TailwindCSS 4.0** - Utility-first CSS

### Backend Integration
- **Google Gemini AI** - Product recommendations
- **Midtrans Payment** - Sandbox untuk testing
- **Cloudinary** - Image upload & optimization
- **REST API** - Backend di `localhost:5000`

### Testing
- **Playwright 1.40** - E2E automation
- **ESLint 8.56** - Code quality

---

## Testing

### Manual Testing Checklist

**Authentication:**
- [ ] Register new user → Success
- [ ] Login dengan credentials → Success
- [ ] Logout → Redirect to home
- [ ] Protected route tanpa login → Redirect to login
- [ ] Profile page → View & edit works

**Shopping Flow:**
- [ ] Browse products → Products load
- [ ] Click product → Detail page shows
- [ ] Add to cart (without login) → Redirect to login
- [ ] Add to cart (with login) → Item added
- [ ] Cart page → Items listed
- [ ] Update quantity → Cart updates
- [ ] Remove item → Item removed
- [ ] Checkout → Form validates
- [ ] Payment → Midtrans opens
- [ ] Success page → Confirmation shows

**Order Management:**
- [ ] Order history → Orders listed
- [ ] Filter by status → Filter works
- [ ] Order detail → Details shown
- [ ] Pagination → Navigation works

**AI Chatbot:**
- [ ] Click AI button → Modal opens
- [ ] Type question → Send works
- [ ] AI responds → Recommendations show
- [ ] Click product → Navigates correctly
- [ ] Add to cart from AI → Works

**Responsive:**
- [ ] Resize 375px → Mobile layout
- [ ] Resize 768px → Tablet layout
- [ ] Resize 1920px → Desktop layout
- [ ] No horizontal scroll

### Automated Testing (Playwright)

```bash
# Run E2E tests
npm run test:e2e

# With UI mode (see browser)
npm run test:e2e:ui

# Specific test
npx playwright test shopping-flow
```

---

## Troubleshooting

###  "AI Chatbot tidak respond"

**Problem:** Backend tidak running atau API key tidak configured

**Fix:**
```bash
# 1. Check backend running
curl http://localhost:5000/health

# 2. Check backend .env
GOOGLE_AI_API_KEY=your_actual_api_key_here

# 3. Restart backend
cd ../../health-ecommerce-external-integration/finished-project
npm run dev
```

###  "Payment redirect tidak muncul"

**Problem:** Midtrans credentials tidak configured

**Fix:**
```bash
# Backend .env
MIDTRANS_SERVER_KEY=SB-Mid-server-xxx
MIDTRANS_CLIENT_KEY=SB-Mid-client-xxx

# Test di Postman:
POST http://localhost:5000/api/external/payment/create
```

###  "CORS error saat fetch data"

**Problem:** Backend CORS tidak configured

**Fix:**
```javascript
// Backend server.js
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

###  "Cart tidak sync per user"

**Problem:** Cart API tidak dipanggil atau token invalid

**Fix:**
1. Check user logged in
2. Check token valid
3. Check backend cart API running
4. Check browser console untuk errors

###  "Order history kosong"

**Problem:** Order tidak dibuat saat payment atau user tidak match

**Fix:**
1. Check order dibuat saat payment (backend console)
2. Check order.user match dengan logged in user
3. Check order API response

###  "Image upload gagal"

**Problem:** Cloudinary credentials tidak configured

**Fix:**
```bash
# Backend .env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

---

## Lighthouse Audit

**Current Scores:**
- Performance: 95
- Accessibility: 98
- Best Practices: 100
- SEO: 92

**Target:** 95+ on all metrics!

---

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder ke Netlify
```

### Environment Variables

Set di deployment platform:
```
VITE_API_URL=https://your-backend-api.com
```

---

## Documentation

- **ARCHITECTURE.md** - Project architecture explanation
- **AUTHENTICATION_SYSTEM.md** - Auth system details
- **CART_AND_CLOUDINARY_GUIDE.md** - Cart & Cloudinary setup
- **PAYMENT_FLOW_COMPLETE.md** - Payment flow documentation

---

## What You'll Learn

**Production Skills:**
- Integrate real payment gateway (Midtrans)
- Integrate AI services (Google Gemini)
- Build accessible UIs (WCAG)
- Write E2E tests (Playwright)
- Optimize performance (Lighthouse)
- Deploy production apps
- Authentication & authorization
- State management (Context API)
- Image upload & optimization

**This is REAL-WORLD development!**

---

## Challenge untuk Peserta

### Challenge #1: Add Product Reviews
Implement review system:
- POST /api/products/:id/reviews
- Display reviews di product detail
- Star rating dengan Ant Design Rate component

### Challenge #2: Add Wishlist
Create wishlist feature:
- Save/remove to wishlist
- Persist in database
- Show wishlist page

### Challenge #3: Optimize Performance
Improve Lighthouse score to 100:
- Lazy load images
- Code splitting
- Reduce bundle size
- Add service worker (optional)

---

**Complete MERN E-Commerce - Ready to Deploy!**

---

**Repository:** `komdigi-fsd-intermediate-modul-3-frontend-health-ecommerce-production-uiux/finished-project`  
**Backend:** `localhost:5000` (ULTIMATE Backend)  
**Status:** Deploy-worthy!

**Happy Coding!**
