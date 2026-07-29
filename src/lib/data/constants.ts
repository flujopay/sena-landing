// ==========================================
// Social Links
// ==========================================
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/sena.latam',
  instagram: 'https://www.instagram.com/sena.latam',
  linkedin: 'https://www.linkedin.com/company/flujolink/posts/?feedView=all',
  youtube: 'https://www.youtube.com/@flujolink',
}

// ==========================================
// Contact Info
// ==========================================
export const CONTACT_INFO = {
  web: 'www.somossena.com',
  email: 'hola@somossena.com',
  email2: 'contacto@somossena.com',
  phone: '+569 4448 9673',
}

// ==========================================
// Footer Navigation Links
// ==========================================
export const FOOTER_EMPRESA = [
  { label: 'Sobre nosotros', href: '/nosotros', type: 'redirect' as const, disabled: false },
  { label: 'Documentación', href: '/docs', type: 'redirect' as const, disabled: false },
  { label: 'FAQs', href: '#', type: 'redirect' as const, disabled: true },
]

export const FOOTER_DESCUBRIR = [
  {
    label: 'Plataforma de autogestión',
    href: 'https://www.somossena.com',
    type: 'external' as const,
    disabled: false,
  },
  {
    label: 'Recupera',
    href: 'https://recupera.somossena.com',
    type: 'external' as const,
    disabled: false,
  },
  {
    label: 'Opera',
    href: 'https://agente.somossena.com',
    type: 'external' as const,
    disabled: false,
  },
  {
    label: 'Cómo funciona',
    href: '#como-funciona',
    type: 'scroll' as const,
    disabled: false,
  },
  {
    label: 'Preguntas frecuentes',
    href: '#preguntas-frecuentes',
    type: 'scroll' as const,
    disabled: false,
  },
]

export const FOOTER_LEGAL = [
  { label: 'Términos y condiciones', href: '/term', type: 'redirect' as const, disabled: false },
  { label: 'Políticas de privacidad', href: '/privacy', type: 'redirect' as const, disabled: false },
  { label: 'Actualizar configuración de cookies', href: '#', type: 'redirect' as const, disabled: true },
  { label: 'Servicios de Tecnología Flujolink S.A.', href: '#', type: 'redirect' as const, disabled: true },
]
