import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faUser as farUser,
} from "@fortawesome/free-regular-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { logoutUser } from "../../store/thunks/authThunks";
import { setShowCart } from "../../store/actions/shoppingCartActions";
import HeaderMenuItems from "./HeaderMenuItems";

const HeaderLogin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const showCart = useSelector((state) => state.shoppingCart.showCart);
  const history = useHistory();
  const dispatch = useDispatch();
  const cartRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  const toggleCart = () => {
    dispatch(setShowCart(!showCart));
  };

  const handleClickOutside = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      !event.target.closest(".cart-toggle") &&
      !event.target.closest(".cart-button")
    ) {
      dispatch(setShowCart(false));
    }
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest(".dropdown-toggle")
    ) {
      setDropdownOpen(false);
    }
  };

  const handleBasketRedirect = (event) => {
    event.stopPropagation();
    dispatch(setShowCart(false));
    history.push("/basket");
  };

  const handleOrderRedirect = (event) => {
    event.stopPropagation();
    dispatch(setShowCart(false));
    history.push("/order");
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePreviousOrdersRedirect = () => {
    history.push("/PreviousOrders");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <div className="flex items-center space-x-6">
      <div className="md:flex md:items-center md:flex-wrap">
        {user?.name ? (
          <div className="relative flex items-center md:text-[#23A6F0]">
            <img
              src={gravatar.url(user.email, {
                s: "100",
                r: "pg",
                d: "identicon",
              })}
              alt={user.name}
              className="rounded-full w-6 h-6 mr-1"
            />
            <span className="ml-1 text-sm font-semibold">{user.name}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-1 cursor-pointer dropdown-toggle"
              onClick={handleDropdownToggle}
            />
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-36 w-48 bg-white shadow-lg rounded-lg p-2 z-50"
              >
                <div
                  className="cursor-pointer p-2 hover:bg-gray-200 rounded"
                  onClick={handlePreviousOrdersRedirect}
                >
                  Önceki Siparişlerim
                </div>
                <div
                  className="cursor-pointer p-2 hover:bg-gray-200 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="md:flex items-center md:text-[#23A6F0]">
            <FontAwesomeIcon icon={farUser} size="xs" />
            <span className="ml-1 text-sm font-bold">Login /</span>
          </Link>
        )}
        {!user?.name && (
          <Link
            to="/register"
            className="md:flex items-center md:text-[#23A6F0]"
          >
            <span className="ml-1 text-sm font-bold">Register</span>
          </Link>
        )}
      </div>

      <div className="relative">
        <a
          href="#"
          className="text-[#252B42] md:text-[#23A6F0] flex items-center cart-toggle"
          onClick={toggleCart}
        >
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          <span className=" ml-1 text-xs">{cartItemCount}</span>
        </a>
        {showCart && (
          <div
            ref={cartRef}
            className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          >
            {cart.length === 0 ? (
              <p className="text-sm">Sepetiniz şu an için boş</p>
            ) : (
              <div>
                <div className="mb-2">
                  <p className="font-bold text-sm">
                    Sepetim ({cartItemCount} Ürün)
                  </p>
                </div>
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between mb-2"
                  >
                    <div>
                      <p className="font-bold text-sm">{item.product.name}</p>
                      <p className="text-sm">
                        ${item.product.price} x {item.count}
                      </p>
                    </div>
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                ))}
                <div className="flex justify-between mt-4 gap-4">
                  <button
                    className="bg-gray-200 text-black rounded-lg px-4 py-2 font-bold text-sm cart-button"
                    onClick={handleBasketRedirect}
                  >
                    Sepete Git
                  </button>
                  <button
                    className="bg-[#23A6F0] text-white rounded-lg px-4 py-2 font-bold text-sm cart-button"
                    onClick={handleOrderRedirect}
                  >
                    Siparişi Tamamla
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* 
      <a href="#" className="hidden md:flex items-center md:text-[#23A6F0]">
        <FontAwesomeIcon icon={farHeart} size="sm" />
        <span className="ml-1 text-xs">1</span>
      </a> 
      */}
    </div>
  );
};

export default HeaderLogin;
