import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'src/content')

export interface PostMeta {
  slug: string
  title: string
  description: string
  category: string
  readTime: number
  date: string
  author: string
}

export interface Post extends PostMeta {
  content: string
}

export interface ProduitMeta {
  slug: string
  titleFr: string
  titleEn: string
  descriptionFr: string
  descriptionEn: string
  materials: string[]
  certifications: string[]
  applications: { fr: string[]; en: string[] }
}

export interface Produit extends ProduitMeta {
  content: string
}

function readMdxFile(filePath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { data, content }
}

export function getAllPosts(locale: 'fr' | 'en'): PostMeta[] {
  const dir = path.join(contentDir, 'blog', locale)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const { data } = readMdxFile(path.join(dir, filename))
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        category: data.category as string,
        readTime: data.readTime as number,
        date: data.date as string,
        author: data.author as string,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(locale: 'fr' | 'en', slug: string): Post | null {
  const filePath = path.join(contentDir, 'blog', locale, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const { data, content } = readMdxFile(filePath)
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    category: data.category as string,
    readTime: data.readTime as number,
    date: data.date as string,
    author: data.author as string,
    content,
  }
}

export function getAllProduits(): ProduitMeta[] {
  const dir = path.join(contentDir, 'produits')
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const { data } = readMdxFile(path.join(dir, filename))
      return {
        slug: data.slug as string,
        titleFr: data.titleFr as string,
        titleEn: data.titleEn as string,
        descriptionFr: data.descriptionFr as string,
        descriptionEn: data.descriptionEn as string,
        materials: data.materials as string[],
        certifications: data.certifications as string[],
        applications: data.applications as { fr: string[]; en: string[] },
      }
    })
}

export function getProduitBySlug(slug: string): Produit | null {
  const filePath = path.join(contentDir, 'produits', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const { data, content } = readMdxFile(filePath)
  return {
    slug: data.slug as string,
    titleFr: data.titleFr as string,
    titleEn: data.titleEn as string,
    descriptionFr: data.descriptionFr as string,
    descriptionEn: data.descriptionEn as string,
    materials: data.materials as string[],
    certifications: data.certifications as string[],
    applications: data.applications as { fr: string[]; en: string[] },
    content,
  }
}
