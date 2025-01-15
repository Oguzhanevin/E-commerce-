import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../store/actions/productActions';
import { addToCart } from '../../../store/actions/shoppingCartActions';
import LoadingSpinner from '../../../layout/LoadingSpinner';

const ProductDetailSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const images = product.images.map((image) => image.url);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-mainBackgroundWhite py-12">
      <div className="mx-auto flex flex-col md:flex-row gap-8 p-3 w-[92%]">
        {/* Image Slider Section */}
        <div className="md:w-1/2 flex flex-col">
          <div className="relative w-full max-w-md h-64 overflow-hidden items-center">
            {/* Image Slider */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="w-full flex-shrink-0" key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white p-2 cursor-pointer"
              onClick={prevSlide}
            >
              <i className="fa-solid fa-chevron-left fa-2xl text-white"></i>
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white p-2 cursor-pointer"
              onClick={nextSlide}
            >
              <i className="fa-solid fa-chevron-right fa-2xl text-white"></i>
            </button>
          </div>

          {/* Thumbnail Preview */}
          <div className="flex justify-start space-x-4 py-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer ${currentSlide === index ? 'border-2' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>

          {/* Rating Section */}
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${i < product.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                ></i>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.rating} Reviews)</span>
          </div>

          {/* Price Section */}
          <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>

          {/* Availability Section */}
          <p className="text-textColorLightGray mb-2">
            Availability: <span className="text-navbarLigthBlue">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </p>

          {/* Product Description */}
          <p className="text-[#858585] text-sm mb-4 border-b-2">{product.description}</p>

          {/* Color Options */}
          <div className="flex space-x-2 mb-4">
            {['#23A6F0', '#23856D', '#E77C40', '#252B42'].map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full block"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          {/* Add to Cart and Other Actions */}
          <div className="flex space-x-4 mt-8">
            <button
              onClick={handleAddToCart}
              className="bg-navbarLigthBlue text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add To Cart
            </button>
            <button className="bg-white border rounded-full hover:text-gray-700 p-2">
              <i className="far fa-lg fa-heart"></i>
            </button>
            <button className="bg-white border rounded-full hover:text-gray-700 p-2">
              <i className="fas fa-lg fa-shopping-cart"></i>
            </button>
            <button className="bg-white border rounded-full hover:text-gray-700 p-2">
              <i className="far fa-lg fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
