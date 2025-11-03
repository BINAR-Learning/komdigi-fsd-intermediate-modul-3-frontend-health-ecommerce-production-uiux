import { test, expect } from '@playwright/test';

test.describe('Shopping Flow', () => {
  
  test('complete shopping flow from browse to cart', async ({ page }) => {
    // 1. Navigate to homepage
    await page.goto('/');
    
    // 2. Check homepage loaded
    await expect(page).toHaveTitle(/Health E-Commerce/);
    await expect(page.getByRole('heading', { name: /Selamat Datang/i })).toBeVisible();
    
    // 3. Navigate to products
    await page.click('text=Products');
    await expect(page).toHaveURL(/.*products/);
    
    // 4. Wait for products to load
    await page.waitForSelector('article', { timeout: 5000 });
    
    // 5. Add first product to cart
    await page.locator('article').first().locator('button:has-text("Tambah")').click();
    
    // 6. Verify cart badge updated
    const cartBadge = page.locator('[class*="ant-badge"]');
    await expect(cartBadge).toBeVisible();
    
    // 7. Navigate to cart
    await page.click('text=Cart');
    await expect(page).toHaveURL(/.*cart/);
    
    // 8. Verify product in cart
    await expect(page.locator('h1')).toContainText('Keranjang');
    const table = page.locator('table');
    await expect(table).toBeVisible();
  });

  test('search products functionality', async ({ page }) => {
    await page.goto('/products');
    
    // Fill search input
    await page.fill('input[placeholder*="Cari"]', 'Vitamin');
    await page.keyboard.press('Enter');
    
    // Wait for results
    await page.waitForTimeout(500);
    
    // Verify results shown
    const products = page.locator('article');
    const count = await products.count();
    expect(count).toBeGreaterThan(0);
  });

  test('responsive navigation works', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Desktop nav should be visible
    await expect(page.locator('nav a:has-text("Home")')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Mobile hamburger should appear
    // (This would need actual hamburger implementation)
  });
});

