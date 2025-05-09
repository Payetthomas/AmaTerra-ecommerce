import { Tcategory } from "./catTypes";
import { TSupplier } from "./supplierTypes";

export type TProduct = {
  id: number,
  title: string,
  description: string,
  price: string,
  image: string,
  stock: number,
  category_id: number,
  supplier_id: number,

  category?: Tcategory,

  supplier?: TSupplier,
  };