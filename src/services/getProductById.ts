import { Product } from "types";

const product = {
  id: "1",
  name: "Tasty Rubber Pizza",
  description:
    "They were lost without the loving seal that composed their apricot. The punctual grapes reveals itself as a confident eagle to those who look; Their zebra was, in this moment, an agreeable plum. Authors often misinterpret the pineapple as a kind pineapple, when in actuality it feels more like a glorious dolphin.",
  color: "lime",
  stock: 0,
  price: 24.95,
  category_id: "1",
};

export async function getProductById(id: string): Promise<Product> {
  return product;
}
