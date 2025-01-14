import BreadCrumb from "@/components/breadcrumb";
import DetailCarousel from "@/pages/ProductPage/productpagecomponents/detailcarousel";
import ProductDetails from "./productpagecomponents/ProductDetails";
import ProductActions from "./productpagecomponents/ProductActions";
import ProductNavbar from "./productpagecomponents/ProductNavbar";
import Detail from "./productpagecomponents/Detail";
import BestSellerProducts from "./BestSellerProducts";
import Brands from "../ShopPage/shoppagecomponents/Brands";

export default function ProductDetailPage() {
  return (
    <div className="font-montserrat bg-[#FAFAFA]">
      {/* BreadCrumb */}
      <BreadCrumb />

      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Carousel */}
        <DetailCarousel />
        
        {/* Product Info */}
        <div className="lg:ml-5">
          <ProductDetails />
          <ProductActions />
        </div>
      </div>

      {/* Product Navigation and Detail */}
      <div className="lg:bg-striped lg:flex-col lg:gap-5 mt-10">
        <ProductNavbar />
        <Detail />
      </div>

      {/* Best Seller Products Section */}
      <BestSellerProducts />

      {/* Brands Section */}
      <Brands />
    </div>
  );
}
