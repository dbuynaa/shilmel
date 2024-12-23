import { HeroSection } from "@/components/hero-section";
import { CategoryNav } from "@/components/category-nav";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";

const products = [
  {
    id: "1",
    title: "T1 Navy Shirt T.B Ти-1 Хөх ажлын цамц",
    price: 96000,
    image: "/products/product1.png",
    category: "shirts",
  },
  {
    id: "2",
    title: "T1 Navy Shirt T.B Ти-1 Хөх ажлын цамц",
    price: 96000,
    image: "/products/product2.png",
    category: "shirts",
  },
  {
    id: "3",
    title: "T1 Navy Shirt T.B Ти-1 Хөх ажлын цамц",
    price: 96000,
    image: "/products/product3.png",
    category: "shirts",
  },
  {
    id: "4",
    title: "T1 Navy Shirt T.B Ти-1 Хөх ажлын цамц",
    price: 96000,
    image: "/products/product4.png",
    category: "shirts",
  },
  {
    id: "5",
    title: "T1 Navy Shirt T.B Ти-1 Хөх ажлын цамц",
    price: 96000,
    image: "/placeholder.svg",
    category: "shirts",
  },
  {
    id: "6",
    title: "T1 Navy Shirt T.B Ти-1 Хөх ажлын цамц",
    price: 96000,
    image: "/placeholder.svg",
    category: "shirts",
  },
];

export default function Home() {
  return (
    <main className="flex-1 ">
      <HeroSection />
      <CategoryNav />
      <div className="container py-8 px-[10%] md:px-[5%]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Ажлын цамц</h2>
          <ProductFilters />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
