# 🎨 Health E-Commerce - UI/UX Best Practices (STARTER)

> **Practice Project: Build production-ready UI dengan TODOs**

**Goal:** Practice responsive design, accessibility, dark mode, dan advanced React patterns!

---

## 🎯 **What You'll Practice**

Di starter project ini, kamu akan implement:

- ✅ **Theme Context** - Dark mode dengan localStorage persistence
- ✅ **Cart Context** - Shopping cart management
- ✅ **API Services** - Axios client, AI service, Payment service
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Skeleton Loading** - Professional loading states
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessibility** - WCAG compliant

---

## 📁 **Project Structure**

```
starter-project/
├── package.json              ✅ All dependencies ready
├── vite.config.js            ✅ Configured
├── tailwind.config.js        ✅ Configured
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx      ⚠️ TODO: Implement error catcher
│   │   └── ProductSkeleton.jsx    ⚠️ TODO: Create loading skeleton
│   ├── context/
│   │   ├── ThemeContext.jsx       ⚠️ TODO: Complete dark mode (4 TODOs)
│   │   └── CartContext.jsx        ⚠️ TODO: Complete cart (8 TODOs)
│   ├── services/
│   │   ├── api.js                 ⚠️ TODO: Setup axios (5 TODOs)
│   │   ├── aiService.js           ⚠️ TODO: AI integration (2 TODOs)
│   │   └── paymentService.js      ⚠️ TODO: Payment integration (3 TODOs)
│   ├── pages/
│   │   └── (From Modul 2)         ✅ Ready to use
│   └── main.jsx                   ⚠️ TODO: Add providers
└── README.md (This file!)
```

**Total TODOs:** 22 untuk kamu complete!

---

## 🚀 **Quick Start**

### Step 1: Install Dependencies

```bash
cd starter-project
npm install
```

### Step 2: Setup Environment

```bash
# Create .env file
cp ../finished-project/env.example .env

# Edit .env:
# VITE_API_URL=http://localhost:5000
```

### Step 3: Ensure Backend Running

```bash
# Backend must be at http://localhost:5000
curl http://localhost:5000/health
# Should return: {"success":true}
```

### Step 4: Start Development Server

```bash
npm run dev
```

**Browser opens:** http://localhost:3000

---

## ✅ **Learning Path**

### Task 1: Theme Context (Easy - 30 min)

**File:** `src/context/ThemeContext.jsx`

**TODOs:**
- [ ] TODO 1: Initialize theme state
- [ ] TODO 2: Load from localStorage
- [ ] TODO 3: Implement toggleTheme
- [ ] TODO 4: Create useTheme hook

**Test:**
```bash
npm run dev
# Add toggle button di navbar
# Click → theme changes
# Reload → theme persists
```

---

### Task 2: Cart Context (Medium - 1 hour)

**File:** `src/context/CartContext.jsx`

**TODOs:**
- [ ] TODO 1: Initialize cart dari localStorage
- [ ] TODO 2: Save to localStorage on changes
- [ ] TODO 3: Implement addToCart
- [ ] TODO 4: Implement removeFromCart
- [ ] TODO 5: Implement updateQuantity
- [ ] TODO 6: Implement clearCart
- [ ] TODO 7: Implement getCartTotal
- [ ] TODO 8: Implement getCartCount

**Test:**
```bash
# Add product to cart
# Check localStorage (DevTools → Application → Local Storage)
# Reload page → cart persists
```

---

### Task 3: API Services (Medium - 1 hour)

**Files:**
- `src/services/api.js` (5 TODOs)
- `src/services/aiService.js` (2 TODOs)
- `src/services/paymentService.js` (3 TODOs)

**TODOs:**
- [ ] api.js: Setup baseURL, interceptors
- [ ] aiService.js: Implement sendChatMessage
- [ ] paymentService.js: Implement createPayment, loadSnapScript

**Test:**
```bash
# Check browser console
# Should fetch products successfully
# No CORS errors
```

---

### Task 4: Error Boundaries (Easy - 20 min)

**File:** `src/components/ErrorBoundary.jsx`

**TODO:**
- [ ] Implement componentDidCatch
- [ ] Show fallback UI on error
- [ ] Add reset functionality

---

### Task 5: Skeleton Loading (Easy - 20 min)

**File:** `src/components/ProductSkeleton.jsx`

**TODO:**
- [ ] Create skeleton card layout
- [ ] Use Ant Design Skeleton component
- [ ] Match ProductCard structure

---

## 💡 **Hints & Resources**

### React Context Pattern:

```javascript
// Create context
const MyContext = createContext();

// Provider
export function MyProvider({ children }) {
  const [state, setState] = useState(initial);
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) throw new Error('Must be within Provider');
  return context;
}
```

### localStorage Pattern:

```javascript
// Save
localStorage.setItem('key', JSON.stringify(data));

// Load
const data = JSON.parse(localStorage.getItem('key') || '[]');
```

---

## 🐛 **Troubleshooting**

### "Cannot connect to backend"
```bash
# Check backend running:
curl http://localhost:5000/health

# Check .env file:
cat .env
# Should show: VITE_API_URL=http://localhost:5000
```

### "Theme not persisting"
```javascript
// Check localStorage in DevTools
// Application → Local Storage
// Should have 'theme' key
```

### "Cart not updating"
```javascript
// Check console for errors
// Verify CartProvider wraps App
// Check localStorage for 'cart' key
```

---

## ✅ **Success Criteria**

You're done when:

- ✅ All 22 TODOs completed
- ✅ Dark mode works dan persists
- ✅ Cart adds/removes items dan persists
- ✅ API calls succeed (check network tab)
- ✅ No console errors
- ✅ All features functional
- ✅ Ready for finished-project comparison!

---

## 📚 **Resources**

- [React Context API](https://react.dev/reference/react/useContext)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Ant Design Components](https://ant.design/components/overview)
- **Compare:** `../finished-project/` untuk reference

---

## 🚀 **Next Steps**

After completing:

1. ✅ Test all features manually
2. ✅ Compare dengan finished-project
3. ✅ Add AI chatbot component (bonus!)
4. ➡️ Common Modul 1: Add E2E tests

---

**Build amazing UI! 🎨✨**

_Starter Project - Frontend Modul 3_  
_Practice UI/UX with TODOs_
