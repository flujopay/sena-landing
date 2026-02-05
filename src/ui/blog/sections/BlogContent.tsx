"use client";

import { BlogPost } from "@/lib/types/blog";
import Image from "next/image";
import { useState } from "react";

interface BlogContentProps {
  featuredPost: BlogPost;
  otherPosts: BlogPost[];
}

export const BlogContent = ({ featuredPost, otherPosts }: BlogContentProps) => {
  const [selectedTag, setSelectedTag] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  const allTags = Array.from(new Set(otherPosts.flatMap((post) => post.tags)));

  const filteredPosts =
    selectedTag === "Todos"
      ? otherPosts
      : otherPosts.filter((post) => post.tags.includes(selectedTag));

  return (
    <section className="py-12 md:py-16 px-4 md:px-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-4">
        Blog
      </h1>
      <div className="inline-block bg-[#00D9A3] rounded-full px-6 py-2 mb-12">
        <p className="text-white font-bold text-lg md:text-xl">
          últimas novedades
        </p>
      </div>

      {featuredPost && (
        <a
          href={`/blog/${featuredPost.slug}`}
          aria-label={`Ver Blog: ${featuredPost.title}`}
          className="hover:shadow-xl transition-all hover:cursor-pointer flex flex-col md:flex-row gap-6 rounded-2xl bg-linear-to-br from-brand-primary to-brand-primary-dark p-6 md:p-10 mb-16"
        >
          <div className="md:w-[60%] w-full flex flex-col justify-between">
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredPost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center w-fit text-xs font-bold text-brand-primary bg-[#00D9A3] rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-200 text-sm mb-4">
              {/* <p className="font-medium">{featuredPost.author}</p> */}
              <span>|</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-medium">{featuredPost.date}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
              {featuredPost.title}
            </h2>

            <p className="text-gray-200 text-base leading-relaxed">
              {featuredPost.intro}
            </p>
          </div>

          <div className="md:w-[40%] w-full h-64 md:h-auto rounded-xl overflow-hidden bg-white">
            <Image
              alt={featuredPost.title}
              src={featuredPost.image}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      )}

      <h3 className="text-brand-primary mx-auto border-b-2 border-brand-primary w-fit mb-10 text-3xl md:text-4xl font-extrabold flex items-center pt-4 pb-1 gap-2">
        Publicaciones más recientes
      </h3>

      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setSelectedTag("Todos")}
          className={`hover:cursor-pointer px-4 py-2 rounded-full border-2 font-semibold text-sm transition-colors ${
            selectedTag === "Todos"
              ? "bg-brand-primary text-white border-brand-primary"
              : "border-brand-primary text-brand-primary hover:bg-brand-primary/10"
          }`}
        >
          Todos
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`hover:cursor-pointer px-4 py-2 rounded-full border-2 font-semibold text-sm transition-colors ${
              selectedTag === tag
                ? "bg-brand-primary text-white border-brand-primary"
                : "border-brand-primary text-brand-primary hover:bg-brand-primary/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.slice(0, visibleCount).map((post) => (
          <a
            href={`/blog/${post.slug}`}
            aria-label={`Ver Blog: ${post.title}`}
            key={post.id}
            className="hover:scale-[1.01] hover:cursor-pointer transition-all ease-in-out duration-300 border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center w-fit text-xs font-bold text-brand-primary bg-[#00D9A3] rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              {/* <span>{post.author}</span> */}
              {/* <span>|</span> */}
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-extrabold text-brand-primary mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {post.intro}
            </p>
          </a>
        ))}
      </div>

      {visibleCount < filteredPosts.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-brand-primary cursor-pointer text-white font-bold px-8 py-3 rounded-full hover:bg-brand-primary-dark transition-colors"
          >
            Cargar más
          </button>
        </div>
      )}
    </section>
  );
};
