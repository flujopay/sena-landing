'use client'

import { useCountries } from '@/lib/services/countryService'
import { useCurrencyStore } from '@/lib/store/useCurrencyStore'
import Button from '@/ui/shared/Button'
import { Input } from '@/ui/shared/Input'
import SimpleCountrySelect, { OptionSelect } from '@/ui/shared/SimpleCountrySelect'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

type FormData = {
  nombre: string
  empresa: string
  email: string
  whatsapp: string
}

export const OperaContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { data: countries = [] } = useCountries()
  const { ipCurrency } = useCurrencyStore()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [countrySelect, setCountrySelect] = useState<string | null>(null)
  const [gclid, setGclid] = useState<string | null>(null)
  const [fbclid, setFbclid] = useState<string | null>(null)

  const utmSource = searchParams?.get('utm_source') || null
  const utmMedium = searchParams?.get('utm_medium') || null
  const utmCampaign = searchParams?.get('utm_campaign') || null
  const utmContent = searchParams?.get('utm_content') || null
  const utmTerm = searchParams?.get('utm_term') || null

  const countryOptions = useMemo(() => {
    if (!countries.length) return []
    const priority = ['+51', '+56', '+57', '+593', '+52']
    const priorityItems: OptionSelect[] = []
    const otherItems: OptionSelect[] = []
    countries.forEach((item) => {
      const option: OptionSelect = { id: item.country, label: item.country, icon: item.icon, subValue: item.country }
      if (priority.includes(item.country)) priorityItems.push(option)
      else otherItems.push(option)
    })
    priorityItems.sort((a, b) => priority.indexOf(a.id) - priority.indexOf(b.id))
    return [...priorityItems, ...otherItems]
  }, [countries])

  useEffect(() => {
    const currencyMap: Record<string, string> = { PEN: '+51', CLP: '+56', COP: '+57', MXN: '+52', USD: '+593' }
    if (ipCurrency && currencyMap[ipCurrency]) setCountrySelect(currencyMap[ipCurrency])
  }, [ipCurrency])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const gc = params.get('gclid') || sessionStorage.getItem('gclid')
    const fb = params.get('fbclid') || sessionStorage.getItem('fbclid')
    if (gc) { setGclid(gc); sessionStorage.setItem('gclid', gc) }
    if (fb) { setFbclid(fb); sessionStorage.setItem('fbclid', fb) }
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { nombre: '', empresa: '', email: '', whatsapp: '' },
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    const telefono = (countrySelect || '') + data.whatsapp
    try {
      await fetch('/api/lead-opera', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.nombre,
          empresa: data.empresa,
          email: data.email,
          telefono,
          utmSource: utmSource ?? undefined,
          utmMedium: utmMedium ?? undefined,
          utmCampaign: utmCampaign ?? undefined,
          utmContent: utmContent ?? undefined,
          utmTerm: utmTerm ?? undefined,
          gclid: gclid ?? undefined,
          fbclid: fbclid ?? undefined,
          landingPage: window.location.href,
        }),
      }).catch(() => {})

      if (window.gtag) {
        window.gtag('event', 'completar_formulario', { product: 'opera' })
      }
      if (window.fbq) window.fbq('track', 'Lead', { content_name: 'opera' })

      router.push('/opera/gracias')
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        name="nombre"
        control={control}
        rules={{ required: 'Ingresa tu nombre' }}
        render={({ field }) => (
          <Input label="Nombre" placeholder="Tu nombre" {...field} error={errors.nombre?.message} />
        )}
      />
      <Controller
        name="empresa"
        control={control}
        rules={{ required: 'Ingresa el nombre de tu empresa' }}
        render={({ field }) => (
          <Input label="Empresa" placeholder="Nombre de tu empresa" {...field} error={errors.empresa?.message} />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Ingresa tu email',
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
        }}
        render={({ field }) => (
          <Input label="Email empresarial" type="email" placeholder="tu@empresa.com" {...field} error={errors.email?.message} />
        )}
      />
      <Controller
        name="whatsapp"
        control={control}
        rules={{ required: 'Ingresa tu WhatsApp' }}
        render={({ field }) => (
          <Input
            label="WhatsApp"
            type="tel"
            placeholder="Número"
            value={field.value || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value.replace(/\D/g, ''))}
            error={errors.whatsapp?.message}
            leftElement={
              <SimpleCountrySelect
                options={countryOptions}
                value={countrySelect}
                onChange={(value: string) => setCountrySelect(value)}
                placeholder="+56"
              />
            }
          />
        )}
      />
      <Button
        type="submit"
        text={isLoading ? 'Enviando...' : 'Solicitar propuesta gratuita'}
        variant="secondaryFilled"
        size="lg"
        className="w-full mt-2"
        disabled={isLoading}
      />
      <p className="text-xs text-slate-400 text-center">
        Sin compromiso. Te contactamos en menos de 24 horas.
      </p>
    </form>
  )
}
