import { ProductCard } from "@/components/product-card"

const relatedProducts = [
  {
    id: "1",
    title: "T1 Navy Shirt T.S Tn-1 Хаа",
    price: 96000,
    image: "/placeholder.svg",
    category: "vests"
  },
  {
    id: "2",
    title: "T1 Navy Shirt T.S Tn-1 Хаа",
    price: 96000,
    image: "/placeholder.svg",
    category: "vests"
  },
  {
    id: "3",
    title: "T1 Navy Shirt T.S Tn-1 Хаа",
    price: 96000,
    image: "/placeholder.svg",
    category: "vests"
  },
  {
    id: "4",
    title: "T1 Navy Shirt T.S Tn-1 Хаа",
    price: 96000,
    image: "/placeholder.svg",
    category: "vests"
  },
]

export function RelatedProducts() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Төстэй бараанууд</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

