export interface Product {
  id: string
  title: string
  price: number
  image: string
  category: string
}

export interface Category {
  id: string
  name: string
  icon: string
}

export interface Filter {
  category?: string
  minPrice?: number
  maxPrice?: number
  sort?: 'asc' | 'desc'
}

