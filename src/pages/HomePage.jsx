import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../layout/Header';
import Carousel from '../components/HomePageComponents/Carousel';
import EditorPick from '../layout/EditorPick';
import BestSellerProducts from '../layout/BestSellerProducts';
import Slider from '../components/generalComponents/Slider';
import HomeContainerFluid from '../layout/HomeContainerFluid';
import FeaturedPosts from '../layout/FeaturedPosts';
import Footer from '../components/generalComponents/Footer';

function HomePage() {
    // Fetch products from Redux store
    const products = useSelector((store) => store.product.productList);

    return (
        <div className="flex flex-col">
            {/* Header */}
            <Header />

            {/* Carousel */}
            <Carousel />

            {/* Editor Pick Section */}
            <EditorPick />

            {/* Best Seller Products */}
            <BestSellerProducts 
                products={products}
                title="Featured Products"
                subtitle="BESTSELLER PRODUCTS"
                description="Problems trying to resolve the conflict between"
                isInsideProductDescription={false}
            />

            {/* Slider Section */}
            <Slider />

            {/* Home Container (Fluid) */}
            <HomeContainerFluid />

            {/* Featured Posts Section */}
            <FeaturedPosts />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HomePage;
