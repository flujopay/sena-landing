import { BlogPage } from '@/ui/blog/BlogPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de cobranza B2B | Sena',
  description:
    'Artículos sobre cobranza B2B, flujo de caja, cartera vencida y venta a crédito para empresas en Chile y Latinoamérica.',
  alternates: { canonical: 'https://www.somossena.com/blog' },
  openGraph: {
    title: 'Blog de cobranza B2B | Sena',
    description:
      'Artículos sobre cobranza B2B, flujo de caja, cartera vencida y venta a crédito para empresas en Chile y Latinoamérica.',
    type: 'website',
    url: 'https://www.somossena.com/blog',
  },
}

const Blog = () => {
  return <BlogPage />
}

export default Blog
