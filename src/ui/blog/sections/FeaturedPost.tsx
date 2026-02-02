import Image from "next/image";

interface FeaturedPostProps {
  category: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export const FeaturedPost = ({
  category,
  author,
  date,
  title,
  excerpt,
  imageUrl,
}: FeaturedPostProps) => {
  return (
    <section className="px-4 md:px-12 pb-12 md:pb-16">
      <div className="bg-brand-primary rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="inline-block w-fit">
            <span className="bg-[#00D9A3] text-white text-sm font-bold px-4 py-1.5 rounded-full">
              {category}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2 text-white/90">
            <span className="font-semibold">{author}</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              {date}
            </span>
          </div>

          <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-white/90 leading-relaxed text-sm md:text-base">
            {excerpt}
          </p>
        </div>

        <div className="relative h-64 lg:h-auto min-h-[300px] bg-slate-200">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
