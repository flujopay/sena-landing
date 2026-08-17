import { AssetImage } from '@/lib/utils/assets/image'
import { LogoSlider } from '@/ui/shared/LogoSlider'

const clients = [
  {
    id: 0,
    name: "L'Oréal",
    logo: AssetImage.lorealLogo.src,
  },
  {
    id: 1,
    name: 'Científica Andina',
    logo: AssetImage.cientificaLogo.src,
  },
  // {
  //   id: 4,
  //   name: "Telefónica",
  //   logo: AssetImage.telefonicaLogo.src,
  // },
  {
    id: 5,
    name: 'Top Space',
    logo: AssetImage.topSpaceLogo.src,
  },
  {
    id: 6,
    name: 'Maruz',
    logo: AssetImage.maruzLogo.src,
  },
  {
    id: 7,
    name: 'AOM',
    logo: AssetImage.aomLogo.src,
  },
  {
    id: 8,
    name: 'Recsa',
    logo: AssetImage.recsaLogo.src,
  },
]

export const Clients = () => {
  const sliderItems = clients.map((client) => ({
    id: client.id,
    content: (
      <img
        src={client.logo}
        alt={client.name}
        className="w-[100px] h-[60px] object-contain"
        style={{
          filter: 'grayscale(100%) opacity(0.7)',
        }}
      />
    ),
  }))

  return (
    <div className="bg-surface-secondary py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-8 px-4">
        <p className="text-brand-primary-dark font-extrabold text-xl sm:text-4xl text-center">
          Nuestra trayectoria y nuestros clientes nos avalan
        </p>

        {/* Desktop: logos en fila */}
        <div className="hidden md:flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt={client.name}
              className="w-[120px] h-[70px] object-contain"
              style={{
                filter: 'grayscale(100%) opacity(0.7)',
              }}
            />
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="md:hidden w-full">
          <LogoSlider items={sliderItems} />
        </div>
      </div>
    </div>
  )
}
