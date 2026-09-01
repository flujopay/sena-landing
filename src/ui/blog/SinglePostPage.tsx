'use client'

import { blogPosts } from '@/lib/data/blogPosts'
import { BlogPost } from '@/lib/types/blog'
import { ArrowLeft, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import Button from '../shared/Button'

const renderContentBlock = (block: any, index: number) => {
  switch (block.type) {
    case 'title':
      return (
        <h2 key={index} className="text-3xl font-bold text-brand-primary mt-8 mb-4">
          {block.text}
        </h2>
      )

    case 'subtitle':
      return (
        <h3 key={index} className="text-2xl font-semibold text-brand-primary-dark mt-6 mb-3">
          {block.text}
        </h3>
      )

    case 'paragraph':
      return (
        <p key={index} className="mb-4">
          {block.fragments.map((frag: any, i: number) => {
            if (frag.type === 'bold') {
              return <strong key={i}>{frag.text}</strong>
            }
            if (frag.type === 'link') {
              return (
                <a
                  key={i}
                  href={frag.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary underline hover:text-brand-primary-dark"
                >
                  {frag.text}
                </a>
              )
            }
            return <span key={i}>{frag.text}</span>
          })}
        </p>
      )

    case 'quote':
      return (
        <blockquote
          key={index}
          className="border-l-4 border-brand-secondary pl-4 italic text-text-primary my-6 bg-gray-50 py-4"
        >
          {block.text}
        </blockquote>
      )

    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 mb-4 ml-4">
          {block.items.map((item: any, i: number) => {
            if (typeof item === 'string') {
              return <li key={i}>{item}</li>
            }
            return (
              <li key={i}>
                {item.map((frag: any, j: number) => {
                  if (frag.type === 'bold') {
                    return <strong key={j}>{frag.text}</strong>
                  }
                  if (frag.type === 'link') {
                    return (
                      <a
                        key={j}
                        href={frag.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-primary underline"
                      >
                        {frag.text}
                      </a>
                    )
                  }
                  return <span key={j}>{frag.text}</span>
                })}
              </li>
            )
          })}
        </ul>
      )

    case 'image':
      return (
        <div key={index} className="my-8">
          <Image
            src={block.link}
            alt="Contenido del blog"
            width={900}
            height={500}
            className="w-full h-auto rounded-xl"
            sizes="100vw"
          />
        </div>
      )

    default:
      return null
  }
}

export const SinglePostPage = ({ post }: { post: BlogPost }) => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const relatedPosts = blogPosts
    .filter((p) => String(p.id) !== String(post.id) && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <section className="bg-white px-4 md:px-10 lg:px-52 py-6 font-adobe">
        {/* Cabecera */}
        <div className="max-w-[900px] mx-auto">
          <Link
            href="/blog"
            className="text-sm text-text-secondary flex gap-1 items-center mb-4 hover:text-brand-primary transition"
          >
            <ArrowLeft className="w-3 h-3" /> Regresar al Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">{post.title}</h1>
          <div className="flex gap-2 items-center text-sm text-text-secondary mb-6 flex-wrap">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center w-fit text-xs font-medium text-white bg-brand-secondary rounded-full px-3 pt-1.5 pb-1"
              >
                {tag}
              </span>
            ))}
            {/* <span>|</span> */}
            {/* <span>{post.author}</span> */}
            <span>|</span>
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>

          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={`Sena - ${post.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="max-w-[900px] mx-auto text-[17px] leading-relaxed text-text-primary space-y-6">
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>

        {/* Preguntas frecuentes — misma fuente que el JSON-LD FAQPage de la página */}
        {post.faq && post.faq.length > 0 && (
          <div className="max-w-[900px] mx-auto mt-16 text-[17px] leading-relaxed text-text-primary">
            <h2 className="text-3xl font-bold text-brand-primary mt-8 mb-4">Preguntas frecuentes</h2>
            <dl className="space-y-6">
              {post.faq.map((item, idx) => (
                <div key={idx}>
                  <dt className="font-semibold text-brand-primary-dark mb-1">{item.question}</dt>
                  <dd className="m-0">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Call to action */}
        <div className="max-w-[900px] mx-auto mt-24 bg-surface-secondary border border-border-default rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-brand-primary text-2xl font-bold mb-2">
            ¿Quieres recibir más artículos como este?
          </h3>
          <p className="text-text-secondary mb-6">
            Suscríbete para estar al tanto de lo nuevo en gestión, productividad y tecnología B2B.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 pt-2.5 pb-2 border border-border-default rounded-full w-full sm:w-[300px]"
            />
            <Button size="md" text="Suscribirme" variant={'primaryFilled'} className="text-md" />
          </div>
        </div>

        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <div className="max-w-[900px] mx-auto mt-24">
            <h3 className="text-3xl font-bold text-brand-primary mb-8">Artículos relacionados</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  href={`/blog/${rel.slug}`}
                  key={rel.id}
                  className="border border-border-default rounded-2xl hover:shadow-lg transition"
                >
                  <Image
                    src={rel.image}
                    alt={`Sena - ${rel.title}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {rel.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="flex items-center w-fit text-xs font-medium text-white bg-brand-secondary-light rounded-full px-3 pt-1.5 pb-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-brand-primary font-semibold mb-1 line-clamp-2">{rel.title}</p>
                    <p className="text-sm text-text-secondary">{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="w-full max-w-[900px] mx-auto py-12">
          <Button
            size="md"
            text="Regresar al Blog"
            variant={'primaryFilled'}
            className="text-md"
            onClick={() => router.push('/blog')}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}
