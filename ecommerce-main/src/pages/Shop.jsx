import React, { useEffect } from "react";
import ShopTitle from "../components/ShopComponents/ShopTitle";
import ShopCloths from "../components/ShopComponents/ShopCloths";
import ShopFilter from "../components/ShopComponents/ShopFilter";
import ShopFilterCards from "../components/ShopComponents/ShopFilterCards";
import ShopPagination from "../components/ShopComponents/ShopPagination";
import ShopBrands from "../components/ShopComponents/ShopBrands";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setOffset } from "../store/actions/productActions";
import { getProducts } from "../store/thunks/productThunks";

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const sort = useSelector((state) => state.product.sort);
  const filter = useSelector((state) => state.product.filter);
  const total = useSelector((state) => state.product.total);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit);

  const { pathname, search } = location;
  const pathnameArr = pathname.split("/");
  const categoryId = pathnameArr[pathnameArr.length - 1];

  useEffect(() => {
    const params = new URLSearchParams(search);
    const limitParam = params.get("limit") || limit;
    const offsetParam = params.get("offset") || offset;

    dispatch(setOffset(Number(offsetParam)));
    dispatch(
      getProducts(
        categoryId,
        filter,
        sort,
        Number(limitParam),
        Number(offsetParam)
      )
    );
  }, [categoryId, sort, limit, offset, search, dispatch]);

  return (
    <div>
      <div>
        <div className="md:mx-36">
          <ShopTitle />
          <ShopCloths />
          <ShopFilter />
          <ShopFilterCards />
          <ShopPagination />
          <ShopBrands />
        </div>
      </div>
    </div>
  );
};

export default Shop;
