import { clients } from '@/lib/data/clients'

const track = [...clients, ...clients]

export const SocialProof = () => {
  return (
    <section className="py-10 md:py-14 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-wider mb-8">
          Empresas que confían en nosotros
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />

          <div className="flex items-center gap-16 w-max animate-logo-marquee">
            {track.map((client, index) => (
              <img
                key={`${client.name}-${index}`}
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
