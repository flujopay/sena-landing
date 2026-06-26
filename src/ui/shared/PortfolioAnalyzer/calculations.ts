export const RATES = [0.875, 0.725, 0.575, 0.405, 0.225, 0.1]
export const SENA_FACTOR = 0.82

export const BUCKET_LABELS = ['1–30 días', '31–60 días', '61–90 días', '3–6 meses', '6–12 meses', '1+ año']
export const BUCKET_COLORS = [
  '#3771D1',
  'rgba(55,113,209,.65)',
  '#F6793A',
  'rgba(246,121,58,.7)',
  '#DC2626',
  '#7f1d1d',
]

export function parseCLP(s: string): number {
  const n = parseFloat(s.replace(/[^0-9]/g, ''))
  return isNaN(n) ? 0 : n
}

export function fmtCLP(n: number): string {
  if (n >= 1e9) return `CLP ${(n / 1e9).toFixed(1).replace('.', ',')}B`
  if (n >= 1e6) return `CLP ${Math.round(n / 1e6)}M`
  return `CLP ${Math.round(n).toLocaleString('es-CL')}`
}

export interface CalcResult {
  totalRiesgo: number
  recuperable: number
  urgency: number
  criticalBucket: number
  recovPct: number
}

export function calcular(montos: number[]): CalcResult {
  const totalRiesgo = montos.reduce((a, b) => a + b, 0)
  const recuperable = montos.reduce((a, m, i) => a + m * RATES[i] * SENA_FACTOR, 0)
  const urgency = montos.reduce((a, m, i) => {
    const nextRate = RATES[Math.min(i + 1, RATES.length - 1)]
    return a + m * (RATES[i] - nextRate)
  }, 0)
  const criticalBucket = montos.reduce((maxI, m, i) => (m > montos[maxI] ? i : maxI), 0)
  const recovPct = totalRiesgo > 0 ? Math.round((recuperable / totalRiesgo) * 100) : 0
  return { totalRiesgo, recuperable, urgency, criticalBucket, recovPct }
}

export function getDynamicCopy(criticalBucket: number, recuperable: number, urgency: number): string {
  if (criticalBucket <= 1) {
    return `Tienes una ventana de oportunidad. La mayor parte de tu cartera todavía tiene una tasa de recuperación superior al 70%. Cada semana que pasa cierra esa ventana. Sena puede activar la cobranza esta semana y recuperar <strong>${fmtCLP(recuperable)}</strong> antes de que esa probabilidad caiga.`
  }
  if (criticalBucket <= 3) {
    return `Tu cartera está en zona de riesgo medio-alto. Sin gestión activa, la recuperación se vuelve cada vez más difícil. Sena puede intervenir ahora y recuperar hasta <strong>${fmtCLP(recuperable)}</strong>. Cada mes de espera destruye <strong>${fmtCLP(urgency / 2)}</strong> adicionales en probabilidad de cobro.`
  }
  return `El grueso de tu cartera ya lleva más de 6 meses vencida. A este punto, sin gestión especializada, solo recuperas 1 de cada 10 pesos. Sena puede intervenir ahora y recuperar hasta <strong>${fmtCLP(recuperable)}</strong> antes de que esa ventana se cierre para siempre.`
}
