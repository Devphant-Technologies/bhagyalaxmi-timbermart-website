"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const products = [
  ["Furniture Wood", "/products/furniture-wood"],
  ["Wooden Pallets", "/products/wooden-pallets"],
  ["Wooden Boxes", "/products/wooden-boxes"],
  ["Wooden Crates", "/products/wooden-crates"],
  ["Solid Wooden Box", "/products/solid-wooden-box"],
  ["Wooden Saddle", "/products/wooden-saddle"],
];

export default function MobileMenu() {
  return <Sheet>
    <SheetTrigger className="mobile-menu-trigger" aria-label="Open navigation menu">
      <span /><span /><span /><b>Menu</b>
    </SheetTrigger>
    <SheetContent className="mobile-menu-panel" side="right">
      <SheetHeader className="mobile-menu-head">
        <img src="/btm-logo-light.png" alt="Bhagyalaxmi Timber Mart" />
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>Explore Bhagyalaxmi Timber Mart</SheetDescription>
      </SheetHeader>
      <div className="mobile-primary-links">
        <SheetClose asChild><a href="/"><strong>Home</strong><b>↗</b></a></SheetClose>
        <SheetClose asChild><a href="/about"><strong>About us</strong><b>↗</b></a></SheetClose>
        <SheetClose asChild><a href="/#services"><strong>Services</strong><b>↗</b></a></SheetClose>
        <SheetClose asChild><a href="/contact"><strong>Contact</strong><b>↗</b></a></SheetClose>
      </div>
      <div className="mobile-products"><p>Product range</p>{products.map(([title,href])=><SheetClose asChild key={href}><a href={href}><strong>{title}</strong><b>→</b></a></SheetClose>)}</div>
      <SheetFooter className="mobile-menu-footer"><a href="tel:+919898727522"><span>Call now</span><strong>+91 98987 27522</strong></a><a className="mobile-whatsapp" href="https://wa.me/919033933063" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+91 90339 33063</strong></a><p>Complete wooden packaging solutions<br />for export & domestic use.</p></SheetFooter>
    </SheetContent>
  </Sheet>;
}
