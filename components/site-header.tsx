import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FilterDialog } from "./filter-dialog";
import { LoginModal } from "./login-modal";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-14">
      <div className="container flex h-16 items-center justify-between">
        <FilterDialog />
        <Link href="/" className="mx-auto">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-14 w-14"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-14 w-14" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-14 w-14" />
          </Button>
          <LoginModal />
        </div>
      </div>
    </header>
  );
}
