import Button from '@/ui/shared/Button'

export type TPlan = {
  name: string
  price: number
  subtitle: string
  includedClients: string
  invoicesPerMonth: string
  features: string[]
  variant: 'starter' | 'growth' | 'enterprise'
  popular?: boolean
  cta: string
  onCtaClick?: () => void
}

export const PlanCard = ({ plan }: { plan: TPlan }) => {
  const isGrowth = plan.variant === 'growth'
  const isEnterprise = plan.variant === 'enterprise'

  return (
    <div className="relative rounded-3xl border border-[#EDEDED] bg-[#F9F9F9] shadow-md px-6 py-8 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex items-start gap-2">
          <div>
            <p className="text-brand-primary-dark  font-extrabold text-3xl leading-tight">Plan</p>
            <p className="text-brand-primary-dark font-extrabold text-3xl leading-tight">
              {plan.name.replace('Plan ', '')}
            </p>
          </div>
          {plan.popular && (
            <span className="ml-auto bg-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
              Más popular
            </span>
          )}
        </div>
        <p className="text-sm mt-1">{plan.subtitle}</p>
      </div>

      {/* Price */}
      <div>
        <p className="text-brand-primary flex items-center">
          <span className="text-xl font-extrabold mr-2">USD </span>
          <span className="text-5xl font-extrabold">{plan.price}</span>
          <span className="text-sm font-medium">/mes</span>
        </p>
      </div>

      {/* Clients & Invoices */}
      <div className="mt-4 grid grid-cols-2 gap-x-4  text-sm font-bold text-black">
        <p>Clientes incluidos</p>
        <p>{plan.includedClients}</p>
        <p>Facturas / mes</p>
        <p>{plan.invoicesPerMonth}</p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Button variant={'primaryFilled'} text={plan.cta} size="sm" onClick={plan.onCtaClick} />
      </div>

      {/* Features */}
      <div className="mt-6 flex-1">
        {isGrowth && <p className="text-xs text-slate-500 mb-2">Todo lo de Starter, más:</p>}
        {isEnterprise && <p className="text-xs text-slate-500 mb-2">Todo lo de Growth, más:</p>}
        <ul className="flex flex-col gap-2 text-sm text-slate-700">
          {plan.features
            .filter((f) => !f.startsWith('Todo lo de'))
            .map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{f}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
