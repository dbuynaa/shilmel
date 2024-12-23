export interface Product {
  id: string
  title: string
  code: string
  price: number
  images: ProductImage[]
  colors: ProductColor[]
  sizes: ProductSize[]
  description: string
  specifications: string[]
  category: string
}

export interface ProductImage {
  id: string
  src: string
  alt: string
}

export interface ProductColor {
  id: string
  name: string
  value: string
}

export interface ProductSize {
  id: string
  name: string
  inStock: boolean
}

