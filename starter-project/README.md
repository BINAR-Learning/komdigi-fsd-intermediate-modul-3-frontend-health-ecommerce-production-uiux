# 📝 Health E-Commerce: Frontend Starter Project

> **Starter Template untuk Practice - Build dari Scratch!**

[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.12-cyan)](https://ant.design/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)

**Starter project** untuk belajar step-by-step implementasi Health E-Commerce frontend dengan React, Ant Design, dan external API integrations.

---

## 🎯 Tujuan Starter Project

**Ini adalah template untuk practice!**

- ✅ Basic structure sudah ada
- ✅ TODO comments untuk guidance
- ✅ Example code snippets
- ✅ Step-by-step instructions
- ⚠️ **Implementasi belum lengkap** - Kamu yang akan build!

**Gunakan finished-project sebagai reference:**
- `../finished-project/` - Complete implementation
- Lihat finished untuk best practices
- Copy code jika stuck

---

## 📁 Project Structure

```
starter-project/
├── README.md                    # 📖 Dokumentasi ini
├── package.json                 # Dependencies (sudah ada)
├── vite.config.js              # ✅ Vite config
├── tailwind.config.js          # ✅ Tailwind config
│
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx   # ✅ Basic error boundary
│   │   └── ProductSkeleton.jsx # ✅ Loading skeleton
│   │
│   ├── context/
│   │   ├── CartContext.jsx     # ⚠️ TODO: Cart management
│   │   └── ThemeContext.jsx    # ⚠️ TODO: Dark mode
│   │
│   ├── services/
│   │   ├── api.js              # ✅ Axios base config
│   │   ├── aiService.js        # ⚠️ TODO: AI integration
│   │   └── paymentService.js   # ⚠️ TODO: Payment integration
│   │
│   └── main.jsx                # ⚠️ TODO: Setup providers
│
└── index.html                   # ✅ HTML template
```

**Legend:**
- ✅ = Sudah ada (basic structure)
- ⚠️ = Perlu diimplementasikan (TODO)

---

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Setup Environment Variables (Optional)

```bash
# Buat .env file
touch .env
# Windows: type nul > .env
```

**Edit `.env`:**

```env
VITE_API_URL=http://localhost:5000
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Frontend akan running di:** `http://localhost:3000`

---

## 📋 TODO Checklist

### Phase 1: Basic Setup

- [ ] **Setup Providers (`src/main.jsx`)**
  - [ ] Wrap dengan BrowserRouter
  - [ ] Setup QueryClient
  - [ ] Add ThemeProvider
  - [ ] Add CartProvider
  - [ ] Add ErrorBoundary

- [ ] **Theme Context (`src/context/ThemeContext.jsx`)**
  - [ ] Create theme state
  - [ ] Toggle dark/light mode
  - [ ] Persist theme in localStorage

### Phase 2: Cart Management

- [ ] **Cart Context (`src/context/CartContext.jsx`)**
  - [ ] Create cart state
  - [ ] Add to cart function
  - [ ] Remove from cart function
  - [ ] Update quantity function
  - [ ] Persist in localStorage
  - [ ] Sync dengan backend API

### Phase 3: Services

- [ ] **AI Service (`src/services/aiService.js`)**
  - [ ] Setup API call ke backend
  - [ ] Handle AI responses
  - [ ] Parse product recommendations

- [ ] **Payment Service (`src/services/paymentService.js`)**
  - [ ] Create payment function
  - [ ] Handle payment response
  - [ ] Redirect to Midtrans

### Phase 4: Pages & Components

- [ ] **Homepage**
  - [ ] Hero section
  - [ ] Featured products
  - [ ] Category sections

- [ ] **Products Page**
  - [ ] Product grid
  - [ ] Filters
  - [ ] Search
  - [ ] Pagination

- [ ] **Product Detail Page**
  - [ ] Product information
  - [ ] Add to cart button
  - [ ] Related products

- [ ] **Cart Page**
  - [ ] Cart items list
  - [ ] Quantity update
  - [ ] Remove items
  - [ ] Checkout button

- [ ] **Checkout Page**
  - [ ] Shipping form
  - [ ] Order summary
  - [ ] Payment integration

- [ ] **AI Chatbot Component**
  - [ ] Chat modal
  - [ ] Message input
  - [ ] AI responses
  - [ ] Product recommendations

---

## 🎓 Learning Path

### Step 1: Read the Code

1. Baca semua file di starter project
2. Pahami struktur dan TODO comments
3. Lihat finished-project untuk reference

### Step 2: Setup Basic Providers

1. Setup `main.jsx` dengan providers
2. Test theme toggle
3. Test cart context

### Step 3: Implement Cart

1. Create cart state
2. Implement add/remove functions
3. Test cart functionality

### Step 4: Implement Services

1. Setup AI service
2. Test AI chatbot
3. Setup payment service
4. Test payment flow

### Step 5: Build Pages

1. Create Homepage
2. Create Products Page
3. Create Product Detail Page
4. Create Cart Page
5. Create Checkout Page

### Step 6: Test Everything

1. Test semua pages
2. Test cart functionality
3. Test payment flow
4. Fix bugs

---

## 💡 Tips & Tricks

### 1. Use Finished Project as Reference

```bash
# Lihat finished implementation
cd ../finished-project
# Baca code, pahami pattern
# Copy jika perlu (tapi pahami dulu!)
```

### 2. Use Ant Design Components

```jsx
import { Button, Card, Form } from 'antd';

// Ant Design sudah include banyak components
// Gunakan untuk UI yang professional
```

### 3. Use React Query

```jsx
import { useQuery } from '@tanstack/react-query';

// React Query handle caching, loading, errors
// Sangat helpful untuk API calls
```

### 4. Test Incrementally

```bash
# Test setiap component
# Jangan langsung build semua pages
# Test → Fix → Continue
```

### 5. Use Browser DevTools

- React DevTools
- Network tab untuk API calls
- Console untuk debugging

---

## 🐛 Common Issues

### ❌ "Cannot find module"

**Solution:**
```bash
npm install
```

### ❌ "CORS error"

**Solution:**
- Check backend CORS configured
- Check API URL di `.env`

### ❌ "API connection failed"

**Solution:**
- Check backend running
- Check API URL correct
- Check network tab untuk errors

### ❌ "Dark mode not working"

**Solution:**
- Check ThemeContext implementation
- Check localStorage
- Check CSS variables

---

## 📚 Resources

### Documentation
- **Finished Project:** `../finished-project/README.md`
- **React Docs:** https://react.dev/
- **Ant Design:** https://ant.design/
- **React Router:** https://reactrouter.com/
- **TanStack Query:** https://tanstack.com/query

### API Documentation
- **Backend API:** `http://localhost:5000/api-docs`
- **Google Gemini:** https://ai.google.dev/docs
- **Midtrans:** https://docs.midtrans.com/

### Tools
- **React DevTools** - Browser extension
- **Postman** - API testing
- **Lighthouse** - Performance audit

---

## ✅ Completion Checklist

Setelah selesai, pastikan:

- [ ] All providers setup
- [ ] Theme toggle works
- [ ] Cart functionality works
- [ ] AI chatbot works
- [ ] Payment integration works
- [ ] All pages render correctly
- [ ] Responsive design works
- [ ] Error handling implemented
- [ ] Loading states implemented

---

## 🎉 Next Steps

Setelah starter project selesai:

1. **Compare dengan finished-project**
   - Lihat perbedaan
   - Pahami best practices
   - Improve code quality

2. **Add More Features**
   - Authentication
   - Order history
   - Profile management
   - Image upload

3. **Optimize Performance**
   - Lazy loading
   - Code splitting
   - Image optimization

4. **Deploy to Production**
   - Vercel
   - Netlify
   - Railway

---

**Happy Coding! 🚀**

**Remember:** Practice makes perfect! Don't give up! 💪

---

**📁 Repository Info:**

- **Name:** `health-ecommerce-production-uiux/starter-project`
- **Type:** Starter Template (untuk practice)
- **Finished Version:** `health-ecommerce-production-uiux/finished-project`

_Frontend Modul 3 - UI/UX (Starter)_  
_Health E-Commerce Frontend Series_
