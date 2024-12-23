"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ProductImage } from "@/types/domain/product"

interface ProductGalleryProps {
  images: ProductImage[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const next = () => setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  const prev = () => setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  return (
    <div className="flex gap-4">
      <div className="flex w-20 flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={cn(
              "relative aspect-square overflow-hidden rounded border",
              selectedIndex === index && "ring-2 ring-primary ring-offset-2"
            )}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </button>
        ))}
      </div>
      <div className="relative flex-1">
        <div className="relative aspect-square">
          <Image
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="object-cover"
            fill
          />
        </div>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

