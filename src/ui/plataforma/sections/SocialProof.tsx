import { clients } from '@/lib/data/clients'

const track = [...clients, ...clients]

export const SocialProof = () => {
  return (
    <section className="bg-white py-10 border-y border-border-default overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        <p className="text-center text-text-secondary text-sm font-medium uppercase tracking-wider mb-6">
          Empresas que confían en nosotros
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex items-center gap-16 w-max animate-logo-marquee">
            {track.map((client, index) => (
              <img
                key={`${client.name}-${index}`}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes logo-marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-logo-marquee {
            animation: logo-marquee-scroll 25s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
