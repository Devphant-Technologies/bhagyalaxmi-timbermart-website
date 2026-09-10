import type { Metadata } from "next"; import ProductDetail from "../product-detail"; import { furnitureWood } from "../product-data";
export const metadata: Metadata={title:"Indian Imported Furniture Wood | Bhagyalaxmi Timber Mart",description:"Indian and imported furniture woods including teak, oak, walnut, ash, wenge, sisam, pine, IPE and more."};
export default function Page(){return <ProductDetail product={furnitureWood}/>}
