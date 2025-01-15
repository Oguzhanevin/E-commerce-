import React from 'react';

const BrandLogos = () => {
    const logos = [
        { className: 'fa-brands fa-hooli', name: 'Hooli' },
        { className: 'fa-brands fa-lyft', name: 'Lyft' },
        { className: 'fa-brands fa-redhat', name: 'Redhat' },
        { className: 'fa-brands fa-stripe', name: 'Stripe' },
        { className: 'fa-brands fa-aws', name: 'Aws' },
        { className: 'fa-brands fa-reddit-alien', name: 'Reddit' }
    ];

    return (
        <div className="bg-mainBackgroundWhite py-8">
            {/* Desktop view */}
            <div className="hidden md:flex justify-between space-x-8 w-[92%] mx-auto text-6xl text-gray-600">
                {logos.map((logo, index) => (
                    <i
                        key={index}
                        className={`${logo.className} hover:text-navbarLigthBlue transition-colors`}
                        title={logo.name}
                    ></i>
                ))}
            </div>
            {/* Mobile view */}
            <div className="md:hidden flex flex-col items-center space-y-6">
                {logos.map((logo, index) => (
                    <i
                        key={index}
                        className={`${logo.className} text-6xl text-gray-600 hover:text-navbarLigthBlue transition-colors`}
                        title={logo.name}
                    ></i>
                ))}
            </div>
        </div>
    );
};

export default BrandLogos;
