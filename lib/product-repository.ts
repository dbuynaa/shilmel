import type { Product } from "@/types/domain/product"

export interface IProductRepository {
  getById(id: string): Promise<Product>
  getAll(): Promise<Product[]>
  getRelated(productId: string): Promise<Product[]>
  search(query: string): Promise<Product[]>
}

