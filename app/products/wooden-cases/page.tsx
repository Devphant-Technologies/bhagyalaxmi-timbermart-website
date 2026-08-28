import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { cases } from "../product-data";
export const metadata: Metadata={title:"Wooden Cases | Bhagyalaxmi Timber Mart",description:"Secure domestic, export pine, hardwood and custom machinery cases for demanding transit."};
export default function Page(){return <ProductDetail product={cases}/>}
