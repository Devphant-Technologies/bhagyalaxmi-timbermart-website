import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { solidBox } from "../product-data";
export const metadata: Metadata={title:"Solid Wooden Box | Bhagyalaxmi Timber Mart",description:"Heavy-duty solid timber boxes for machinery, equipment and high-value cargo in domestic and export transit."};
export default function Page(){return <ProductDetail product={solidBox}/>}
