import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { crates } from "../product-data";
export const metadata: Metadata={title:"Wooden Crates | Bhagyalaxmi Timber Mart",description:"Ordinary, pinewood, palletized and heavy-duty wooden crates for industrial and export cargo."};
export default function Page(){return <ProductDetail product={crates}/>}
