import { test, expect } from '@playwright/test'

test('form inline renderiza con todos los campos y captura UTM + gclid de la URL', async ({ page }) => {
  await page.goto('/plataforma?utm_source=google&utm_medium=cpc&utm_campaign=test-e2e&gclid=test-gclid-123')

  // Campos del formulario
  await expect(page.getByPlaceholder('Tu nombre')).toBeVisible({ timeout: 15_000 })
  await expect(page.getByPlaceholder('Tu apellido')).toBeVisible()
  await expect(page.getByPlaceholder('Nombre de tu empresa')).toBeVisible()
  await expect(page.getByPlaceholder('tu@empresa.com')).toBeVisible()
  await expect(page.getByPlaceholder('Número')).toBeVisible()

  // CTA submit presente
  await expect(page.getByRole('button', { name: /solicitar demo|agenda demo|enviar/i }).first()).toBeVisible()

  // Los params UTM persisten en la URL (next.js no los elimina en navegación)
  const url = page.url()
  expect(url).toContain('utm_source=google')
  expect(url).toContain('gclid=test-gclid-123')
})

test('/plataforma/gracias muestra confirmación y embed de HubSpot meetings', async ({ page }) => {
  await page.goto('/plataforma/gracias')

  // Success card
  await expect(page.getByText(/recibimos tu solicitud/i)).toBeVisible({ timeout: 15_000 })

  // Contenedor del meetings embed con data-src correcto
  const meetingsContainer = page.locator('.meetings-iframe-container')
  await expect(meetingsContainer).toBeAttached()
  const dataSrc = await meetingsContainer.getAttribute('data-src')
  expect(dataSrc).toContain('meetings.hubspot.com/francisco502')

  // Fallback link disponible
  await expect(page.getByRole('link', { name: /abrir calendario/i })).toBeVisible()
})
