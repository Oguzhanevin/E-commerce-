import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../../store/actions/categoryActions';

const ProductCard = ({ product, isInsideProductDescription }) => {
  const colors = ['#23A6F0', '#23856D', '#E77C40', '#252B42'];
  const history = useHistory();
  const dispatch = useDispatch();

  // Slugify function to convert product name and category to URL-friendly format
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(state => state.categories.categories);

  // Redirect to product page when clicked
  const handleClick = () => {
    const categoryId = product.category_id || 'undefined';
    const category = categories.find(cat => cat.id === categoryId);

    if (category) {
      const productGender = category.gender || 'undefined';
      const productCategoryName = slugify(category.title);
      const productNameSlug = slugify(product.name);
      const productId = product.id;

      history.push(`/shop/${productGender}/${productCategoryName}/${categoryId}/${productNameSlug}/${productId}`);
    } else {
      console.error(`Category with ID ${categoryId} not found`);
    }
  };

  // Rendered JSX for when inside product description page
  const isInsideTrue = () => (
    <div className="max-w-xs rounded overflow-hidden m-2 cursor-pointer bg-white hover:shadow-lg transition-shadow duration-200" onClick={handleClick}>
      <img className="w-full" src={product.images[0].url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="mt-4">
          <span className="text-green-500 text-xl font-semibold">${product.price}</span>
          <span className="line-through text-gray-500 ml-2">${(product.price + 10).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  // Rendered JSX for when inside product list page
  const isInsideFalse = () => (
    <div className="max-w-xs rounded overflow-hidden p-4 m-2 cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={handleClick}>
      <img className="w-full" src={product.images[0].url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="mt-4">
          <span className="text-green-500 text-xl font-semibold">${product.price}</span>
          <span className="line-through text-gray-500 ml-2">${(product.price + 10).toFixed(2)}</span>
        </div>
        <div className="flex mt-4">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full mr-2 cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {isInsideProductDescription ? isInsideTrue() : isInsideFalse()}
    </div>
  );
}

export default ProductCard;
