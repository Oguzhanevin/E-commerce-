import React from 'react';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

function HomePage() {
    return (
        <div>
            <div className="flex flex-col">
                <Navbar />
                <Header />
            </div>
        </div>
    );
}

export default HomePage;
