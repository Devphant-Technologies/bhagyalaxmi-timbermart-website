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
  ["01", "Wooden Pallets", "/products/wooden-pallets"],
  ["02", "Wooden Boxes", "/products/wooden-boxes"],
  ["03", "Wooden Crates", "/products/wooden-crates"],
  ["04", "Wooden Cases", "/products/wooden-cases"],
];

export default function MobileMenu() {
  return <Sheet>
    <SheetTrigger className="mobile-menu-trigger" aria-label="Open navigation menu">
      <span /><span /><span /><b>Menu</b>
    </SheetTrigger>
    <SheetContent className="mobile-menu-panel" side="right">
      <SheetHeader className="mobile-menu-head">
        <img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" />
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>Explore Bhagyalaxmi Timber Mart</SheetDescription>
      </SheetHeader>
      <div className="mobile-primary-links">
        <SheetClose asChild><a href="/"><span>01</span><strong>Home</strong><b>↗</b></a></SheetClose>
        <SheetClose asChild><a href="/about"><span>02</span><strong>About us</strong><b>↗</b></a></SheetClose>
        <SheetClose asChild><a href="/#services"><span>03</span><strong>Services</strong><b>↗</b></a></SheetClose>
        <SheetClose asChild><a href="/contact"><span>04</span><strong>Contact</strong><b>↗</b></a></SheetClose>
      </div>
      <div className="mobile-products"><p>Product range</p>{products.map(([n,title,href])=><SheetClose asChild key={href}><a href={href}><span>{n}</span><strong>{title}</strong><b>→</b></a></SheetClose>)}</div>
      <SheetFooter className="mobile-menu-footer"><a href="tel:+919033933063"><span>Talk to our team</span><strong>+91 90339 33063</strong></a><p>Complete wooden packaging solutions<br />for export & domestic use.</p></SheetFooter>
    </SheetContent>
  </Sheet>;
}
