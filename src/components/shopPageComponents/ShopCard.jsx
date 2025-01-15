import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/actions/categoryActions';
import LoadingSpinner from '../../layout/LoadingSpinner';

function ShopCard() {
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold">
        Error: {error}
      </div>
    );
  }

  const topCategories = categories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="flex flex-wrap justify-center bg-mainBackgroundWhite p-4">
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:w-[92%] mx-auto">
        {topCategories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 my-4"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-lg">
                <h2 className="text-xl font-bold text-center truncate">
                  {item.code.startsWith('k:') ? 'Kadın ' : 'Erkek '}
                  {item.title}
                </h2>
                <p className="text-sm text-center">Rating: {item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCard;

