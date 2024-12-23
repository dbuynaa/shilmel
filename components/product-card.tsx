import Image from "next/image"
import { Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-white/80"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <div className="aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-medium">{product.title}</h3>
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold">{product.price.toLocaleString()}₮</p>
          <Button size="sm" variant="secondary">
            Сагсанд нэмэх
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

