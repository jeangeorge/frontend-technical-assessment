import { Product } from "./product";

export interface Category {
  id: number;
  name: string;
  description: string;
  Products: Product[];
}
