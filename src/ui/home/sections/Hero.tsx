'use client'

import { AssetImage } from '@/lib/utils/assets/image'
import Button from '@/ui/shared/Button'
import { useCallback, useEffect, useState } from 'react'

const rotatingWords = ['bien', 'con criterio', 'a tiempo', 'con cuidado']

export const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const typeSpeed = 100
  const deleteSpeed = 50
  const pauseTime = 2000

  const tick = useCallback(() => {
    const currentWord = rotatingWords[currentIndex]
    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1))
      if (displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1))
      if (displayText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length)
        return
      }
    }
  }, [currentIndex, displayText, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  const onContactClick = () => {
    window.open('https://meetings.hubspot.com/francisco502', '_blank')
  }

  return (
    <div className="flex flex-col mx-auto max-w-[1280px] px-4 md:px-10 py-10">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center">
        <div className="w-[60%] flex flex-col gap-4">
          <h1 className="text-brand-primary-dark font-canaro text-7xl font-extrabold">
            El arte de <br /> cobrar{' '}
            <span className="text-brand-primary font-semibold font-caslon">
              {displayText}
              <span className="animate-pulse">|</span>
              <span className="text-brand-secondary">.</span>
            </span>
          </h1>
          <p className="font-adobe text-black text-xl max-w-[90%]">
            El servicio de cobranza B2B que cuida tu cartera y tus relaciones.
          </p>
          <p className="font-adobe text-slate-500 text-base max-w-[85%]">
            Para empresas que venden a crédito y están{' '}
            <span className="font-semibold text-slate-700">cansadas de perseguir pagos</span>.
            Sena automatiza la cobranza y convierte{' '}
            <span className="font-semibold text-slate-700">cartera en caja</span>.
          </p>
        </div>
        <div className="w-[40%] flex justify-end">
          <img src={AssetImage.home4.src} alt="home" className="w-full max-h-[340px] object-contain" />
        </div>
      </div>

      <div className="md:flex hidden flex-row items-start gap-2 mt-4">
        <Button text="Habla con nosotros" size="md" className="text-xl" onClick={onContactClick} />
        <Button
          text="Ver cómo funciona"
          variant="primaryDarkOutlined"
          size="md"
          className="text-xl"
          onClick={() => {
            const element = document.getElementById('como-funciona')
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-4">
        <div className="flex">
          <div className="flex flex-col gap-4">
            <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold">
              El arte de <br /> cobrar{' '}
              <span className="text-brand-primary font-semibold font-caslon">
                {displayText}
                <span className="animate-pulse">|</span>
                <span className="text-brand-secondary">.</span>
              </span>
            </h1>
            <div className="flex flex-row gap-2">
              <p className="font-adobe text-black text-sm flex-1">
                El servicio de cobranza B2B que cuida tu cartera y tus relaciones.
              </p>
            </div>
          </div>
          <img
            src={AssetImage.home4.src}
            alt="home"
            className="flex-1 my-auto max-h-[200px] object-contain"
          />
        </div>
        <div className="flex flex-row items-start gap-2">
          <Button text="Habla con nosotros" size="sm" className="text-xs" onClick={onContactClick} />
          <Button
            text="Ver cómo funciona"
            variant="primaryDarkOutlined"
            size="sm"
            className="text-xs"
            onClick={() => {
              const element = document.getElementById('como-funciona')
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          />
        </div>
      </div>

      <div className="py-3 mt-4 md:mt-0">
        <p className="text-slate-500 text-xs md:text-sm text-left md:text-right">
          Respaldados por{' '}
          <a className="font-bold text-brand-secondary underline" href="https://recsa.com/" target="_blank">
            Recsa
          </a>
          , con más de 40 años de experiencia en cobranza y presencia en 15 países de Latinoamérica.
        </p>
      </div>
    </div>
  )
}
