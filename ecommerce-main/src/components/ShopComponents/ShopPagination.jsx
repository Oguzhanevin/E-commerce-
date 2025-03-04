import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../../store/actions/productActions";
import { getProducts } from "../../store/thunks/productThunks";
import { useHistory, useLocation } from "react-router-dom";

const ShopPagination = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const total = useSelector((state) => state.product.total);
  const limit = useSelector((state) => state.product.limit);
  const offset = useSelector((state) => state.product.offset);
  const pageCount = Math.ceil(total / limit);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    const newOffset = selectedPage * limit;

    const params = new URLSearchParams(location.search);
    params.set("limit", limit);
    params.set("offset", newOffset);
    history.push({ search: params.toString() });

    dispatch(setOffset(newOffset));
    /*dispatch(
      getProducts(null, null, null, limit, newOffset)
    ); /*2 Kere request geldiğinden kapattım*/
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center mb-12 font-sans font-bold">
      <div className="border-2 rounded-lg overflow-hidden flex bg-white">
        <ReactPaginate
          previousLabel={"First"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex"}
          pageClassName={
            "px-4 py-2 text-sm border-r hover:bg-gray-100 text-[#23A6F0] flex items-center justify-center"
          }
          activeClassName={"bg-[#23A6F0] text-white"}
          previousClassName={
            "px-4 py-2 text-sm border-r hover:bg-gray-100 text-[#23A6F0] flex items-center justify-center"
          }
          nextClassName={
            "px-4 py-2 text-sm hover:bg-gray-100 text-[#23A6F0] flex items-center justify-center"
          }
          breakClassName={
            "px-4 py-2 text-sm border-r hover:bg-gray-100 text-[#23A6F0] flex items-center justify-center"
          }
        />
      </div>
    </div>
  );
};

export default ShopPagination;
