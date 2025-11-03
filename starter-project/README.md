# 🎨 Health E-Commerce UI/UX - Starter Project

> **Frontend Modul 3: Responsive Design, Accessibility & Best Practices**

[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-cyan)](https://tailwindcss.com/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.12-blue)](https://ant.design/)
[![Playwright](https://img.shields.io/badge/Playwright-1.40-green)](https://playwright.dev/)

**Project untuk practice responsive design & accessibility!** (Dengan TODO yang jelas)

---

## 📦 Apa Isi Project Ini?

Project ini adalah **starter template** untuk belajar:
- ✅ **Responsive Design** - Mobile-first dengan Tailwind breakpoints
- ✅ **Accessibility (a11y)** - Semantic HTML, ARIA labels, keyboard nav
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Loading States** - Skeleton screens untuk better UX
- ✅ **Dark Mode** (optional) - Theme switching
- ✅ **Playwright Testing** (intro) - Automated UI tests

**Status:** ⚠️ **Incomplete** - Ada banyak TODO yang harus kamu selesaikan!

---

## 🎯 Learning Objectives

Dengan menyelesaikan TODO di project ini, kamu akan belajar:

1. **Mobile-First Design** - Build untuk mobile dulu, scale up ke desktop
2. **Tailwind Breakpoints** - Responsive utilities (sm:, md:, lg:, xl:)
3. **Semantic HTML** - Use proper tags (nav, article, main)
4. **ARIA Labels** - Screen reader support
5. **Error Boundaries** - Catch component errors
6. **Skeleton Screens** - Professional loading UX
7. **Playwright Basics** - Write E2E tests

---

## 🚀 Quick Start (Untuk Newbie)

### Prerequisites

**Wajib Running:**
- ✅ **ULTIMATE Backend** di `http://localhost:5000`
- ✅ **Sudah Selesai:** Frontend Modul 1 & 2

```bash
# Setup Backend (jika belum)
cd ../../../Backend/Modul_5-External_API_Integration/finished-project
npm install
npm run seed
npm run dev
```

---

### Setup Instructions

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-responsive-checkout.git
cd health-ecommerce-responsive-checkout

# 2. Masuk ke starter-project
cd starter-project

# 3. Install dependencies
npm install
# Tunggu 2-3 menit

# 4. Start development server
npm run dev

# 5. Open browser
# http://localhost:3000
```

---

## ⚠️ TODO List (Yang Harus Kamu Kerjakan)

### 1. Responsive Design
- [ ] Make Navbar responsive (hamburger menu mobile)
- [ ] Responsive product grid (1 col mobile → 4 cols desktop)
- [ ] Responsive hero section (stack mobile, side-by-side desktop)
- [ ] Responsive typography (text-2xl md:text-3xl lg:text-4xl)

### 2. Accessibility (a11y)
- [ ] Add semantic HTML tags (nav, article, main)
- [ ] Add ARIA labels untuk icons & buttons
- [ ] Ensure keyboard navigation works
- [ ] Add focus states (ring-2 ring-blue-500)

### 3. Error Handling
- [ ] Create ErrorBoundary component
- [ ] Wrap routes dengan ErrorBoundary
- [ ] Create fallback UI untuk errors

### 4. Loading States
- [ ] Create ProductCardSkeleton component
- [ ] Show skeletons while loading
- [ ] Progressive image loading

### 5. Playwright Tests (Optional)
- [ ] Install Playwright
- [ ] Write test untuk homepage
- [ ] Write test untuk shopping flow

---

## 📁 Project Structure

```
starter-project/
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx      # ⚠️ TODO: Catch errors
│   │   ├── ProductSkeleton.jsx    # ⚠️ TODO: Loading skeleton
│   │   └── ResponsiveNavbar.jsx   # ⚠️ TODO: Mobile hamburger
│   ├── pages/
│   │   ├── CheckoutPage.jsx       # ⚠️ TODO: Multi-step checkout
│   │   └── ...                    # Reuse from Modul 2
│   ├── utils/
│   │   └── accessibility.js       # ⚠️ TODO: A11y helpers
│   ├── App.jsx                    # ⚠️ TODO: Wrap dengan ErrorBoundary
│   └── index.css                  # ⚠️ TODO: Dark mode styles
├── tests/
│   └── e2e/
│       └── shopping.spec.js       # ⚠️ TODO: Playwright test
└── package.json
```

---

## 🧪 How to Test

### Test Responsive Design

**Method 1: Browser DevTools**
```
1. Open browser (http://localhost:3000)
2. Press F12 (DevTools)
3. Click "Toggle device toolbar" (Ctrl+Shift+M)
4. Test different devices:
   - iPhone 13 (375px)
   - iPad (768px)
   - Desktop (1920px)
```

**Method 2: Resize Browser**
- Drag browser window dari wide → narrow
- Check navbar changes (hamburger appears)
- Check grid changes (4 cols → 2 cols → 1 col)

---

### Test Accessibility

**Keyboard Navigation:**
```
1. Close mouse, use only keyboard
2. Press Tab → Focus moves to next element
3. Press Enter → Activates button/link
4. Press Shift+Tab → Focus moves back
5. Check: All interactive elements focusable!
```

**Screen Reader Test** (Windows):
```
1. Enable Narrator (Win+Ctrl+Enter)
2. Navigate page dengan Tab
3. Listen to announcements
4. Check: All images have alt text!
```

---

### Test Error Boundary

**Create intentional error:**
```jsx
// Add to any component
if (someCondition) {
  throw new Error('Test error!');
}
```

**Expected:**
- Error caught by ErrorBoundary ✅
- Fallback UI shows ✅
- App doesn't crash ✅

---

## 🐛 Common Issues & Fixes

### ❌ "Responsive classes not working"

**Problem:** Tailwind config issue

**Fix:**
```js
// tailwind.config.js - Check content paths
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",  // Must include all source files!
],
```

---

### ❌ "Focus ring not showing"

**Problem:** Browser default outline removed

**Fix:**
```css
/* index.css - Don't remove outline! */
button:focus {
  outline: 2px solid blue;  /* Or use Tailwind: focus:ring-2 */
}
```

---

### ❌ "Hamburger menu not closing"

**Problem:** State not updating

**Fix:**
```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// On link click:
onClick={() => {
  setMobileMenuOpen(false);  // Close menu
  navigate('/path');
}}
```

---

## 💡 Learning Tips

**1. Mobile-First Mindset**
- Design untuk mobile dulu (320px width)
- Add breakpoints untuk larger screens
- Test on real devices jika memungkinkan

**2. Use Lighthouse**
```
1. Open DevTools
2. Go to "Lighthouse" tab
3. Run audit (Mobile + Accessibility)
4. Target: 90+ score untuk accessibility!
```

**3. Test dengan Real Users**
- Ask friend untuk navigate dengan keyboard only
- Ask someone test on mobile phone
- Get feedback on UX

---

## 💡 Challenge untuk Peserta

### Challenge #1: Implement Dark Mode

Add theme toggle functionality:
- Create ThemeContext
- Toggle light/dark mode
- Persist theme ke localStorage
- Use Tailwind dark: prefix

**Hint:**
```jsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
```

---

### Challenge #2: Add Loading Skeletons

Create skeleton screens untuk better perceived performance:
- ProductCardSkeleton component
- Show while data fetching
- Match actual ProductCard layout

**Hint:**
```jsx
<div className="bg-gray-300 h-48 rounded animate-pulse"></div>
```

---

### Challenge #3: Write Playwright Test

Test complete shopping flow:
```javascript
test('user can add product to cart', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Products');
  await page.click('button:has-text("Tambah")').first();
  // Assert cart badge updated
});
```

---

## 🚀 Next Steps

After completing all TODOs:

1. ✅ **Test on mobile device** - Real phone/tablet
2. ✅ **Run Lighthouse audit** - Aim for 90+ accessibility
3. ✅ **Compare dengan finished-project** - See best practices
4. ✅ **Try challenges** - Extend functionality
5. ➡️ **Common Modul 1** - Testing Suite

---

**Happy Coding! Make it responsive & accessible! 🎨♿**

_Accessibility benefits everyone, not just disabled users!_

---

**📁 Repository Info:**
- **Name:** `health-ecommerce-responsive-checkout`
- **Type:** UI/UX Best Practices (Starter)
- **Backend:** `localhost:5000`
- **Level:** Intermediate-Advanced

