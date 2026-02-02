"use client";

import { getBlogPostsSorted, getFeaturedPost } from "@/lib/data/blogPosts";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { BlogContent } from "./sections/BlogContent";

export const BlogPage = () => {
  const featuredPost = getFeaturedPost();
  const otherPosts = getBlogPostsSorted().filter(
    (post) => post.id !== featuredPost.id,
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">
        <div className="bg-[#F9F9F9]">
          <div className="max-w-[1280px] mx-auto">
            <Header variant="primary" />
            <BlogContent featuredPost={featuredPost} otherPosts={otherPosts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
