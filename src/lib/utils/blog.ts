export function slug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function parseSpanishDate(dateString: string): Date {
  const monthsMap: { [key: string]: number } = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  }

  const parts = dateString.split(' ')
  const day = parseInt(parts[0], 10)
  const monthName = parts[2].toLowerCase()
  const year = parseInt(parts[3], 10)

  return new Date(year, monthsMap[monthName], day)
}
