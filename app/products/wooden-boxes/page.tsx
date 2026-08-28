import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { boxes } from "../product-data";
export const metadata: Metadata={title:"Wooden Boxes | Bhagyalaxmi Timber Mart",description:"Solid wood, plywood, bolting and export wooden boxes for protected industrial transport."};
export default function Page(){return <ProductDetail product={boxes}/>}
