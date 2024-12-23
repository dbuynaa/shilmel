import type { Product } from "@/types/domain/product"
import type { IProductRepository } from "@/lib/repositories/product-repository"

export interface IProductService {
  getProduct(id: string): Promise<Product>
  getRelatedProducts(productId: string): Promise<Product[]>
  getAllProducts(): Promise<Product[]>
  searchProducts(query: string): Promise<Product[]>
}

export class ProductService implements IProductService {
  constructor(private repository: IProductRepository) {}

  async getProduct(id: string): Promise<Product> {
    return this.repository.getById(id)
  }

  async getRelatedProducts(productId: string): Promise<Product[]> {
    return this.repository.getRelated(productId)
  }

  async getAllProducts(): Promise<Product[]> {
    return this.repository.getAll()
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.repository.search(query)
  }
}

