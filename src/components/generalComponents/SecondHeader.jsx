import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../store/api/loginConfig';
import Gravatar from 'react-gravatar';
import { setUser } from '../../store/actions/clientActions';
import { fetchCategories } from '../../store/actions/categoryActions';
import LoadingSpinner from '../../layout/LoadingSpinner';
import ShoppingCartBox from '../shoppingCartComponent/ShoppingCartBox';

const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Shop', to: '/shop' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Contact', to: '/contact' },
    { name: 'About Us', to: '/aboutus' },
    { name: 'Team', to: '/team' },
    { name: 'Previous Order', to: '/previousorder' },
];

const SecondHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopDropDownOpen, setIsShopDropDownOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const user = useSelector(state => state.client.user);
    const categories = useSelector(state => state.categories.categories);
    const cart = useSelector(state => state.cart ? state.cart.cart : []); // cart'ı güvenli şekilde alıyoruz
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
            .then(() => setLoading(false))
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false);
            });
    }, [dispatch]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleShopDropdown = (e) => {
        e.stopPropagation();
        setIsShopDropDownOpen(!isShopDropDownOpen);
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const handleLogout = () => {
        dispatch(setUser(null));
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    const renderDropdown = () => {
        if (!categories || categories.length === 0) {
            return null;
        }

        const kadınCategories = categories.filter(category => category.code.startsWith('k:'));
        const erkekCategories = categories.filter(category => category.code.startsWith('e:'));

        return (
            <div className="bg-white shadow-md absolute mt-2 w-auto rounded-md py-2 text-gray-700 flex">
                <CategoryDropdown title="Kadın" categories={kadınCategories} />
                <CategoryDropdown title="Erkek" categories={erkekCategories} />
            </div>
        );
    };

    return (
        <header className="bg-white mt-6 relative z-10 mb-4">
            {loading && <LoadingSpinner />}
            <div className="px-4 justify-between flex items-center w-[92%] mx-auto">
                <div className='flex items-center space-x-28'>
                    <Link to="/" className="font-bold text-xl">Bandage</Link>
                    <nav className="hidden md:flex space-x-6 items-center relative">
                        {menuItems.map((item) => (
                            <MenuItem key={item.name} item={item} isShopDropDownOpen={isShopDropDownOpen} toggleShopDropdown={toggleShopDropdown} categories={categories} />
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    {user ? (
                        <UserInfo user={user} handleLogout={handleLogout} />
                    ) : (
                        <AuthLinks />
                    )}
                    <CartIcon cart={cart} toggleCart={toggleCart} />
                    <i className="fas fa-search text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
                    <i className="fa-regular fa-heart hidden md:block text-navbarLigthBlue cursor-pointer"></i>
                    <i className={`fas fa-bars text-3xl cursor-pointer md:hidden`} onClick={toggleMenu}></i>
                </div>
            </div>
            {isCartOpen && (
                <div className="absolute right-10 mt-5 rounded-md p-4 z-20">
                    <ShoppingCartBox />
                </div>
            )}
            {isMenuOpen && (
                <MobileMenu categories={categories} isShopDropDownOpen={isShopDropDownOpen} toggleShopDropdown={toggleShopDropdown} />
            )}
        </header>
    );
};

// Menu Item Bileşeni
const MenuItem = ({ item, isShopDropDownOpen, toggleShopDropdown, categories }) => {
    return (
        <div className="relative">
            <Link to={item.to} className="text-gray-500 hover:text-gray-700">
                {item.name}
            </Link>
            {item.name === 'Shop' && (
                <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'} cursor-pointer`} onClick={toggleShopDropdown}></i>
            )}
            {item.name === 'Shop' && isShopDropDownOpen && renderDropdown(categories)}
        </div>
    );
};

// Kategoriler için Dropdown Bileşeni
const CategoryDropdown = ({ title, categories }) => (
    <div className="mr-4">
        <h3 className="font-semibold text-center">{title}</h3>
        {categories.map((category) => (
            <Link
                key={category.id}
                to={`/shop/${category.gender}/${category.title}/${category.id}`}
                className="block px-4 py-2 text-center hover:bg-gray-100"
            >
                {category.title}
            </Link>
        ))}
    </div>
);

// Kullanıcı Bilgisi Bileşeni
const UserInfo = ({ user, handleLogout }) => (
    <div className="flex items-center gap-2">
        <Gravatar email={user.email} size={32} className="rounded-full" />
        <span className="text-navbarLigthBlue">{user.name}</span>
        <button className="text-navbarLigthBlue hover:underline" onClick={handleLogout}>Logout</button>
    </div>
);

// Giriş ve Kayıt Linkleri Bileşeni
const AuthLinks = () => (
    <>
        <i className="fas fa-user hidden md:block text-navbarLigthBlue cursor-pointer"></i>
        <Link to="/signup" className="hidden md:block text-navbarLigthBlue hover:underline">Login / Register</Link>
    </>
);

// Sepet İkonu Bileşeni
const CartIcon = ({ cart, toggleCart }) => (
    <div className="flex items-center">
        <i className="fas fa-shopping-cart text-gray-700 md:text-navbarLigthBlue cursor-pointer" onClick={toggleCart}></i>
        {cart.length > 0 && (
            <span className="ml-1 text-gray-700 md:text-navbarLigthBlue">
                ({cart.length})
            </span>
        )}
    </div>
);

// Mobil Menü Bileşeni
const MobileMenu = ({ categories, isShopDropDownOpen, toggleShopDropdown }) => (
    <div className="bg-white shadow-md md:hidden">
        <div className="flex flex-col items-center">
            <ul className="p-4">
                {menuItems.map((item) => (
                    <li key={item.name} className="py-2">
                        <Link to={item.to} className="block text-gray-700 hover:text-blue-500" onClick={item.name === 'Shop' ? toggleShopDropdown : undefined}>
                            {item.name}
                            {item.name === 'Shop' && (
                                <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'}`}></i>
                            )}
                        </Link>
                        {item.name === 'Shop' && isShopDropDownOpen && (
                            <div className="bg-white shadow-md mt-2 w-48 rounded-md py-2 text-gray-700">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/shop/${category.gender}/${category.title}/${category.id}`}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        {category.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default SecondHeader;

