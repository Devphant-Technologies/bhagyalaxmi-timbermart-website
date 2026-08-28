import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { pallets } from "../product-data";
export const metadata: Metadata={title:"Wooden Pallets | Bhagyalaxmi Timber Mart",description:"Custom stringer, block and perimeter-base wooden pallets for warehousing, shipping and export handling."};
export default function Page(){return <ProductDetail product={pallets}/>}
