import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { saddle } from "../product-data";
export const metadata: Metadata={title:"Wooden Saddle | Bhagyalaxmi Timber Mart",description:"Custom wooden saddles and cradles for pipes, machinery and irregular cargo during packing and transit."};
export default function Page(){return <ProductDetail product={saddle}/>}
