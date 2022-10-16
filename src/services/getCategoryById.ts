import { Category } from "types";

export async function getCategoryById(id: string): Promise<Category> {
  const category = {
    id: "1",
    name: "Kids",
    description:
      "The literature would have us believe that a self-disciplined tiger is not but a grapefruit.",
    products: [
      {
        id: "1",
        name: "Tasty Rubber Pizza",
        description:
          "They were lost without the loving seal that composed their apricot. The punctual grapes reveals itself as a confident eagle to those who look; Their zebra was, in this moment, an agreeable plum. Authors often misinterpret the pineapple as a kind pineapple, when in actuality it feels more like a glorious dolphin.",
        color: "lime",
        stock: 0,
        price: 24.95,
        category_id: "1",
      },
      {
        id: "61",
        name: "Ergonomic Steel Soap",
        description:
          "Shouting with happiness, those oranges are nothing more than currants. The dog is a cherry? The chicken of a cherry becomes a capable cherry! Shy chimpanzees show us how hippopotamus can be dogs. This is not to discredit the idea that the first fantastic bee is, in its own way, a dog!",
        color: "gold",
        stock: 9,
        price: 300.31,
        category_id: "1",
      },
    ],
  };
  return category;
}
