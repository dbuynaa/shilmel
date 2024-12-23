"use client";

import { useState } from "react";
import type {
  Product,
  ProductColor,
  ProductSize,
} from "@/types/domain/product";

interface UseProductReturn {
  selectedColor: ProductColor | null;
  selectedSize: ProductSize | null;
  quantity: number;
  setSelectedColor: (color: ProductColor) => void;
  setSelectedSize: (size: ProductSize) => void;
  setQuantity: (quantity: number) => void;
  isValid: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useProduct(product: Product): UseProductReturn {
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);

  const isValid = Boolean(selectedColor && selectedSize && quantity > 0);

  return {
    selectedColor,
    selectedSize,
    quantity,
    setSelectedColor,
    setSelectedSize,
    setQuantity,
    isValid,
  };
}
