import React from 'react';
import { useSelector } from "react-redux";
import Header from '../layout/Header';
import Footer from '../components/generalComponents/Footer';
import Breadcrumb from '../components/generalComponents/Breadcrumb';
import BrandLogos from '../components/contactPageComponents/BrandLogos';
import ProductDescriptionCard from '../components/shopPageComponents/shopDetailPageComponents/ProductDescriptionCard';
import BestSellerProducts from '../layout/BestSellerProducts';
import ProductDetailSlider from '../components/shopPageComponents/shopDetailPageComponents/ProductDetailSlider';

function ProductDetailPage() {
  // Fetch the list of products from Redux state
  const products = useSelector((store) => store.product.productList);
  
  // Assume we're getting the product ID from the URL params (example: 'productId')
  const productId = "someProductId";  // Replace with actual logic (e.g., useParams from react-router-dom)

  // Get the specific product data from the list using productId
  const product = products.find(product => product.id === productId);

  // Ensure that product exists before rendering detailed information
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Header />
      <Breadcrumb fromProductDetailPage />

      {/* Product Slider with Images */}
      <ProductDetailSlider images={product.images} />

      {/* Product Description */}
      <ProductDescriptionCard
        name={product.name}
        description={product.description}
        price={product.price}
        specifications={product.specifications}
      />

      {/* Best Seller Products */}
      {products.length > 0 && (
        <BestSellerProducts
          products={products}
          title="Featured Products"
          subtitle="BESTSELLER PRODUCTS"
          description="Problems trying to resolve the conflict between"
          isInsideProductDescription={true}
        />
      )}

      <BrandLogos />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
