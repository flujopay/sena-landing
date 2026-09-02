export type TextFragment =
  | { type: 'text'; text: string }
  | { type: 'bold'; text: string }
  | { type: 'link'; text: string; href: string }

export type ListItem = string | TextFragment[]

export type BlogContentBlock =
  | { type: 'title'; text: string }
  | { type: 'subtitle'; text: string }
  | { type: 'paragraph'; fragments: TextFragment[] }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: ListItem[] }
  | { type: 'image'; link: string }

export interface BlogFaqItem {
  question: string
  answer: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  intro: string
  date: string
  // author: string;
  tags: string[]
  image: string
  /**
   * Preguntas frecuentes del post. Fuente única: de acá salen tanto el bloque
   * visible al final del artículo como el JSON-LD `FAQPage` que permite que los
   * motores de respuesta extraigan y citen las respuestas. No duplicar en `content`.
   */
  faq?: BlogFaqItem[]
  content: BlogContentBlock[]
}
