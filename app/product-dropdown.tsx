"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  ["01", "Wooden Pallets", "Shipping & warehousing", "/products/wooden-pallets"],
  ["02", "Wooden Boxes", "Solid wood & plywood", "/products/wooden-boxes"],
  ["03", "Wooden Crates", "Open & heavy-duty", "/products/wooden-crates"],
  ["04", "Wooden Cases", "Secure enclosed packing", "/products/wooden-cases"],
];

export default function ProductDropdown({ active = false }: { active?: boolean }) {
  return <DropdownMenu>
    <DropdownMenuTrigger className={`product-menu-trigger${active ? " active" : ""}`}>
      Products <span aria-hidden="true">⌄</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="product-menu-content" align="center" sideOffset={10}>
      <DropdownMenuLabel className="product-menu-label"><span>Product range</span><b>04 solutions</b></DropdownMenuLabel>
      <DropdownMenuSeparator />
      {products.map(([number, title, description, href]) =>
        <DropdownMenuItem key={href} className="product-menu-item" asChild>
          <a href={href}><span>{number}</span><span className="product-menu-copy"><strong>{title}</strong><small>{description}</small></span><b>↗</b></a>
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  </DropdownMenu>;
}
