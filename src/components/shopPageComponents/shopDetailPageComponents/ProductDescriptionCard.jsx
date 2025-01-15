
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../../../store/actions/productActions';
import LoadingSpinner from '../../../layout/LoadingSpinner';

function ProductDescriptionCard() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);
  const params = useParams();
  const productId = Number(params.productId);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <LoadingSpinner />;
  }

  // Log the product details for debugging
  console.log("Product Details:", product.name, product.images[0]);

  return (
    <div className="bg-white py-6">
      <div className="flex flex-col items-center justify-center w-[92%] mx-auto">
        <div className="flex flex-row gap-2 text-sm text-textColorLightGray mb-4">
          <div className="underline md:text-lg">{product.name}</div>
          <div className="font-semibold md:text-lg">Additional Info</div>
          <div className="font-semibold md:text-lg">Reviews</div>
          <span className="text-sliderBgColorGreen md:text-lg"> (0)</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-[92%]">
          {/* Product Image Section */}
          <div className="flex flex-col md:flex-row gap-4 md:w-1/3 text-center">
            <div className="p-4 flex items-center justify-center">
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="border-none rounded-md object-cover w-[50%]"
              />
            </div>
          </div>

          {/* Product Description Section */}
          <div className="mt-4 md:items-end md:w-1/3">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-textColorLightGray mb-2">{product.description}</p>
            <p className="text-textColorLightGray mb-2">{product.description}</p>
            <p className="text-textColorLightGray mb-2">{product.description}</p>
          </div>

          {/* Additional Info Section */}
          <div className="mt-4 flex flex-col md:items-end md:w-1/3">
            <div className="mt-4 flex flex-col">
              <h1 className="text-3xl text-black font-bold mb-2">Quick Overview</h1>
              <div className="text-textColorLightGray mb-2 font-semibold">
                <i className="fa-solid fa-chevron-right"></i> Feature 1
              </div>
              <div className="text-textColorLightGray mb-2 font-semibold">
                <i className="fa-solid fa-chevron-right"></i> Feature 2
              </div>
              <div className="text-textColorLightGray mb-2 font-semibold">
                <i className="fa-solid fa-chevron-right"></i> Feature 3
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <h1 className="text-3xl text-black font-bold mb-2">Product Details</h1>
              <div className="text-textColorLightGray mb-2 font-semibold">
                <i className="fa-solid fa-chevron-right"></i> Detail 1
              </div>
              <div className="text-textColorLightGray mb-2 font-semibold">
                <i className="fa-solid fa-chevron-right"></i> Detail 2
              </div>
              <div className="text-textColorLightGray mb-2 font-semibold">
                <i className="fa-solid fa-chevron-right"></i> Detail 3
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/shop"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300 mt-6"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default ProductDescriptionCard;
