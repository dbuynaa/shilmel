// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// import { SiteHeader } from "@/components/site-header";
// import { ProductRepositoryImpl } from "@/lib/repositories/product-repository-impl";
// import { ProductService } from "@/lib/services/product-service";
// import { ProductGallery } from "@/components/product/product-gallery";
// import { ProductInfo } from "@/components/product/product-info";
// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const productService = new ProductService(new ProductRepositoryImpl());

//   let product;
//   try {
//     product = await productService.getProduct(params.id);
//   } catch (_) {
//     notFound();
//   }

//   return (
//     <div className="flex min-h-screen flex-col">
//       <SiteHeader />
//       <main className="flex-1">
//         <div className="container py-8">
//           <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-foreground">
//               Нүүр
//             </Link>
//             <ChevronRight className="h-4 w-4" />
//             <span>{product.title}</span>
//           </div>
//           <div className="grid gap-8 lg:grid-cols-2">
//             <Suspense fallback={<div>Loading...</div>}>
//               <ProductGallery images={product.images} />
//             </Suspense>
//             <ProductInfo product={product} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
