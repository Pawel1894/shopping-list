import { Heading } from "./heading";
import { Menu } from "./menu";
import { ProductList } from "./product-list";

export const ShoppingList = () => {
  return (
    <div>
      <Heading />
      <ProductList />
      <Menu />
    </div>
  );
};
