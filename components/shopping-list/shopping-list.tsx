import { Heading } from "./heading";
import { Menu } from "./menu";
import { ProductList } from "./product-list";

export const ShoppingList = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col px-3 pt-5 pb-2 overflow-y-auto gap-7">
        <Heading />
        <ProductList />
      </div>
      <div className="flex-shrink-0 h-12">
        <Menu />
      </div>
    </div>
  );
};
