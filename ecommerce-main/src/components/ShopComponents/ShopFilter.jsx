import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { setSort, setFilter } from "../../store/actions/productActions";
import { getProducts } from "../../store/thunks/productThunks";

const ShopFilter = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.product.sort);
  const filter = useSelector((state) => state.product.filter);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    dispatch(setSort(sortValue));
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  const handleFilterClick = () => {
    dispatch(getProducts(null, filter, sort, null, null));
  };

  return (
    <div className="flex flex-col items-center justify-between rounded font-sans mt-12 md:mx-4">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:w-full">
        <div className="text-sm font-semibold text-center text-[#737373] mb-4 md:mb-0">
          Filter or sort products
        </div>
        <div className="flex items-center justify-center text-[#737373] mb-4 md:mb-0 md:mr-4">
          <span className="mr-4 font-semibold">Views:</span>
          <button className="border-2 border-[#ECECEC] rounded-md w-10 h-10 mr-2">
            <FontAwesomeIcon
              icon={faTableCellsLarge}
              className="cursor-pointer"
            />
          </button>
          <button className="border-2 border-[#ECECEC] rounded-md w-10 h-10 ml-2">
            <FontAwesomeIcon icon={faList} className="cursor-pointer mx-1" />
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:w-auto">
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter"
            className="border border-gray-300 bg-[#F9F9F9] rounded py-2 px-3 text-gray-700 mb-4 md:mb-0 md:mr-2 w-full md:w-auto"
          />
          <select
            value={sort}
            onChange={handleSortChange}
            className="border border-gray-300 bg-[#F9F9F9] rounded py-2 px-3 text-gray-700 mb-4 md:mb-0 md:mr-2 w-full md:w-auto"
          >
            <option value="popularity">Sort</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
          <button
            onClick={handleFilterClick}
            className="bg-[#23A6F0] text-white font-bold py-2 px-4 rounded w-full md:w-auto"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
