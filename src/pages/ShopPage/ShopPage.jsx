import Brands from "@/pages/ShopPage/shoppagecomponents/Brands";
import FilteredProducts from "@/pages/ShopPage/shoppagecomponents/FilteredProducts";
import ShopContainer from "@/pages/ShopPage/shoppagecomponents/ShopContainer";

export default function ShopPage() {
  return (
    <div>
      <ShopContainer />
      <FilteredProducts />
      <Brands />
    </div>
  );
}
