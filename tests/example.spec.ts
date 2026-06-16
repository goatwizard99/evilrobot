import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://www.goatskull.com/');

  await expect(page).toHaveTitle(/GOAT/);
});

test('enters Goat Skull Records site', async ({ page }) => {
  await page.goto('http://www.goatskull.com/');

  const coverImage = page.getByRole('img', { name: 'Goat Skull Records' });
  await expect(coverImage).toBeVisible();

  await coverImage.click({ position: { x: 100, y: 100 } });
  await expect(page).toHaveURL(/goatskullrecords_main\.html$/);
});
