import React, { useState, useEffect } from 'react';

function HomeContainerFluid() {
    const [isMobile, setIsMobile] = useState(false);

    // Ekran boyutunu kontrol etme
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // 640px altındaki ekranlar için mobil görünüm
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // component ilk yüklendiğinde ekran boyutunu kontrol et

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const commonContent = (
        <>
            <p className="text-sm text-textColorH2">SUMMER 2020</p>
            <h2 className="text-2xl font-bold mt-2 text-textColorDarkGray">Part of the Neural Universe</h2>
            <p className="mt-4 text-textColorLightGray">We know how large objects will act, but things on a small scale.</p>
        </>
    );

    const commonButtons = (
        <div className="pt-6 flex flex-row items-center gap-3 text-white text-center">
            <button className="bg-buttonFullBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                BUY NOW
            </button>
            <button className="text-buttonFullBlue border-[1px] border-buttonFullBlue hover:bg-blue-600 font-bold py-2 px-4 rounded">
                Learn More
            </button>
        </div>
    );

    const mobileView = (
        <div className="flex flex-col items-center justify-center bg-mainBackgroundWhite">
            <div className="max-w-sm pt-16 mt-16 relative">
                <div className="p-6 text-white text-center">
                    {commonContent}
                </div>

                {commonButtons}

                <div className="relative">
                    <img src="img/homeContainerFluid/homeContainerFluid.png" alt="ContainerFluid" className="h-4/5 w-full object-cover" />
                </div>
            </div>
        </div>
    );

    const desktopView = (
        <div className="pt-16 pb-2 flex flex-col items-center justify-center bg-mainBackgroundWhite">
            <div className="flex flex-row items-center justify-center">
                <div className="pt-6 relative w-1/2 flex items-center justify-center">
                    <img src="img/homeContainerFluid/homeContainerFluid.png" className="h-full object-cover" alt="ContainerFluid" />
                </div>
                <div className="p-6 text-white justify-start text-left w-1/2">
                    {commonContent}

                    {commonButtons}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobil görünüm */}
            <div className="sm:hidden">
                {mobileView}
            </div>

            {/* Masaüstü görünüm */}
            <div className="hidden sm:block">
                {desktopView}
            </div>
        </>
    );
}

export default HomeContainerFluid;
