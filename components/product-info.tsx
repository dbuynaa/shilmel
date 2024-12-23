"use client"

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useProduct } from "@/lib/hooks/use-product"
import { useCart } from "@/lib/contexts/cart-context"
import type { Product } from "@/types/domain/product"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { dispatch } = useCart()
  const {
    selectedColor,
    selectedSize,
    quantity,
    setSelectedColor,
    setSelectedSize,
    setQuantity,
    isValid,
  } = useProduct(product)

  const addToCart = () => {
    if (!isValid || !selectedColor || !selectedSize) return

    dispatch({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        quantity,
        color: selectedColor.id,
        size: selectedSize.name,
      },
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-2 text-sm text-muted-foreground">
          Барааны код: {product.code}
        </div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="mt-4 text-3xl font-bold">
          {product.price.toLocaleString()}₮
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="mb-2 font-medium">
            Өнгө ({product.colors.length})
          </div>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.id}
                className={`relative h-12 w-12 overflow-hidden rounded-full border ${
                  selectedColor?.id === color.id ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <span
                  className="absolute inset-0"
                  style={{ backgroundColor: color.value }}
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 font-medium">
            Хэмжээ ({product.sizes.length})
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                className={`rounded border px-3 py-1 ${
                  selectedSize?.id === size.id ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
                onClick={() => setSelectedSize(size)}
                disabled={!size.inStock}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          className="flex-1"
          size="lg"
          onClick={addToCart}
          disabled={!isValid}
        >
          Сагсанд нэмэх
        </Button>
        <Button variant="outline" size="lg">
          <Heart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

