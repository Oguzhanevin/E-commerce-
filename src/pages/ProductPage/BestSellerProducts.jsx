import { products } from "@/mockdatas/product";

export default function BestSellerProducts() {
  const lgBestSellers = products.slice(11);

  const ProductCard = ({ product }) => (
    <div key={product.id} className="flex flex-col items-center justify-center gap-3">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="h-[330px] w-[332px] object-cover rounded-lg"
      />
      <p className="mt-4 text-center text-base font-semibold">{product.title}</p>
      <p className="text-center text-sm font-semibold text-gray-500">{product.subtitle}</p>
      <div className="mt-2 flex items-center justify-center">
        <p className="mr-2 text-base font-semibold text-[#BDBDBD]">{product.oldPrice}</p>
        <p className="text-base font-semibold text-[#23856D]">{product.newPrice}</p>
      </div>
    </div>
  );

  return (
    <div className="mx-5 flex flex-col items-center font-montserrat">
      <h2 className="m-5 text-center text-2xl font-bold leading-[32px] tracking-[0.1px] lg:max-w-96">
        BESTSELLER PRODUCTS
      </h2>

      {/* Mobile View */}
      <div className="lg:hidden">
        {products.slice(11, 15).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-10 lg:mb-10">
        {lgBestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
