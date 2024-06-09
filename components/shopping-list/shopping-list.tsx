import { Heading } from "./heading";
import { Menu } from "./menu";
import { ProductList } from "./product-list";

export const ShoppingList = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col px-3 py-5 gap-4">
        <Heading />
        <ProductList />
      </div>
      <Menu />
    </div>
  );
};
