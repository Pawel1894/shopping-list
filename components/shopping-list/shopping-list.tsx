import { Heading } from "./heading";
import { Menu } from "./menu";
import { ProductList } from "./product-list";

export const ShoppingList = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Heading />
        <ProductList />
      </div>
      <Menu />
    </>
  );
};
