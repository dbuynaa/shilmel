import type { Product } from "@/types/domain/product"
import type { IProductRepository } from "./product-repository"

// This would typically connect to an API or database
export class ProductRepositoryImpl implements IProductRepository {
  private products: Product[] = [
    {
      id: "1",
      code: "#2524",
      title: "Blue Winter Bomber Jacket",
      price: 49900,
      images: [
        { id: "1", src: "/placeholder.svg", alt: "Product front" },
        { id: "2", src: "/placeholder.svg", alt: "Product back" },
        { id: "3", src: "/placeholder.svg", alt: "Product side" },
      ],
      colors: [
        { id: "1", name: "Yellow", value: "#FFEB3B" },
        { id: "2", name: "Orange", value: "#FF9800" },
      ],
      sizes: [
        { id: "1", name: "4XL", inStock: true },
        { id: "2", name: "XXL", inStock: true },
        { id: "3", name: "XL", inStock: true },
        { id: "4", name: "L", inStock: true },
        { id: "5", name: "M", inStock: true },
      ],
      description: "High visibility bomber jacket with reflective material for enhanced safety.",
      specifications: [
        "ANSI/ISEA 107 Compliant",
        "Type R Class 3",
        "2\" ANSI-compliant reflective material",
      ],
      category: "jackets",
    },
    // Add more products...
  ]

  async getById(id: string): Promise<Product> {
    const product = this.products.find(p => p.id === id)
    if (!product) throw new Error('Product not found')
    return product
  }

  async getAll(): Promise<Product[]> {
    return this.products
  }

  async getRelated(productId: string): Promise<Product[]> {
    const product = await this.getById(productId)
    return this.products.filter(p => 
      p.category === product.category && p.id !== productId
    ).slice(0, 4)
  }

  async search(query: string): Promise<Product[]> {
    return this.products.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    )
  }
}

