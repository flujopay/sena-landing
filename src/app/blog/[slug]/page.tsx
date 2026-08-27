import { blogPosts } from '@/lib/data/blogPosts'
import { SinglePostPage } from '@/ui/blog/SinglePostPage'
import { notFound } from 'next/navigation'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.intro,
    alternates: { canonical: `https://www.somossena.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.intro,
      images: [{ url: post.image }],
      type: 'article',
      url: `https://somossena.com/blog/${post.slug}`,
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return notFound()

  return <SinglePostPage post={post} />
}
