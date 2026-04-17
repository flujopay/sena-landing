'use client'

import { getBlogPostsSorted, getFeaturedPost } from '@/lib/data/blogPosts'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { BlogContent } from './sections/BlogContent'

export const BlogPage = () => {
  const featuredPost = getFeaturedPost()
  const otherPosts = getBlogPostsSorted().filter((post) => post.id !== featuredPost.id)

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <div className="max-w-[1280px] mx-auto">
          <BlogContent featuredPost={featuredPost} otherPosts={otherPosts} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
