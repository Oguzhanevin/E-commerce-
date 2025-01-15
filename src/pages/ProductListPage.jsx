
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../layout/Header';
import Footer from '../components/generalComponents/Footer';
import Breadcrumb from '../components/generalComponents/Breadcrumb';
import ShopCard from '../components/shopPageComponents/ShopCard';
import BestSellerProducts from '../layout/BestSellerProducts';
import FilterComponent from '../components/shopPageComponents/FilterComponent';
import Pagination from '../components/shopPageComponents/Pagination';
import BrandLogos from '../components/contactPageComponents/BrandLogos';
import { fetchProducts, fetchProductsByCategoryId } from '../store/actions/productActions';

const ProductListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const location = useLocation();
    const dispatch = useDispatch();
    
    // Get the products and fetch state from the Redux store
    const { productList: products, fetchState } = useSelector((state) => state.product);

    // Extract search params from the URL
    const searchParams = new URLSearchParams(location.search);
    const sortOption = searchParams.get('sort') || 'price:asc';
    const filterText = searchParams.get('filter') || '';

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const lastSegment = pathSegments[pathSegments.length - 1];

        // Fetch products based on categoryId, or all products
        if (lastSegment && !isNaN(parseInt(lastSegment))) {
            const categoryId = parseInt(lastSegment);
            dispatch(fetchProductsByCategoryId(categoryId, sortOption, filterText));
        } else {
            dispatch(fetchProducts(sortOption, filterText));
        }
    }, [dispatch, location.pathname, location.search]);

    // Pagination calculations
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Display products for the current page
    const displayedProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    // Conditional rendering for loading state
    if (fetchState === 'loading') {
        return (
            <div className="loading-container">
                <p>Loading products...</p>
            </div>
        );
    }

    // Conditional rendering for no products found
    if (fetchState === 'success' && totalProducts === 0) {
        return (
            <div className="no-products-container">
                <p>No products found for the selected filters.</p>
            </div>
        );
    }

    return (
        <>
            <Header />
            <Breadcrumb />
            <ShopCard />
            <FilterComponent totalResults={totalProducts} />
            <BestSellerProducts products={displayedProducts} />
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
            <BrandLogos />
            <Footer />
        </>
    );
};

export default ProductListPage;
