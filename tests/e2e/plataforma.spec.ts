import { test, expect } from '@playwright/test'

// Tests 1-2: confirman features ya en producción (#230, #231)
// Test 3: valida sección productos post-deploy del PR con Opera (#250)

test('form inline renderiza con todos los campos y captura UTM + gclid de la URL', async ({ page }) => {
  await page.goto('/plataforma?utm_source=google&utm_medium=cpc&utm_campaign=test-e2e&gclid=test-gclid-123')

  await expect(page.getByPlaceholder('Tu nombre')).toBeVisible({ timeout: 15_000 })
  await expect(page.getByPlaceholder('Tu apellido')).toBeVisible()
  await expect(page.getByPlaceholder('Nombre de tu empresa')).toBeVisible()
  await expect(page.getByPlaceholder('tu@empresa.com')).toBeVisible()
  await expect(page.getByPlaceholder('Número')).toBeVisible()

  await expect(page.getByRole('button', { name: /solicitar demo|agenda demo|enviar/i }).first()).toBeVisible()

  const url = page.url()
  expect(url).toContain('utm_source=google')
  expect(url).toContain('gclid=test-gclid-123')
})

test('/plataforma/gracias muestra confirmación y embed de HubSpot meetings', async ({ page }) => {
  await page.goto('/plataforma/gracias')

  await expect(page.getByText(/recibimos tu solicitud/i)).toBeVisible({ timeout: 15_000 })

  const meetingsContainer = page.locator('.meetings-iframe-container')
  await expect(meetingsContainer).toBeAttached()
  const dataSrc = await meetingsContainer.getAttribute('data-src')
  expect(dataSrc).toContain('meetings.hubspot.com/francisco502')

  await expect(page.getByRole('link', { name: /abrir calendario/i })).toBeVisible()
})

test.skip('sección productos — Opera como 3er tab (post-deploy)', async ({ page }) => {
  await page.goto('/?tab=opera#productos')

  await expect(page.getByText(/el equipo de cobranza que tu empresa no tiene/i).first()).toBeVisible({
    timeout: 15_000,
  })
  await expect(page.getByRole('button', { name: /solicitar propuesta/i }).first()).toBeVisible()

  await expect(page.getByText(/plataforma de/i).first()).toBeVisible()
  await expect(page.getByText(/recupera deuda/i).first()).toBeVisible()
  await expect(page.getByText(/opera/i).first()).toBeVisible()
})

test('mobile 375px — CTA header "Solicitar demo" visible arriba del fold (#202)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/plataforma?utm_source=google&utm_medium=cpc')

  await expect(page.getByRole('button', { name: /solicitar demo/i }).first()).toBeVisible({ timeout: 15_000 })
})
