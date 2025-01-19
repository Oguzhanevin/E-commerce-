import React from 'react';

function FreeTrial({ showIcon }) {
    return (
        <div className="bg-white mb-6">
            <div className="flex flex-col text-center items-center justify-between p-8 mx-auto w-[92%] relative">
                <div className="text-center gap-6">
                    {/* Üst Başlık ve Açıklama */}
                    <div className="relative mb-4">
                        {showIcon && <ArrowIcon />}
                        <h1 className="text-3xl font-bold text-textColorDarkGray mb-4">
                            Start your 14 days free trial
                        </h1>
                        <h2 className="mt-6 text-sm font-semibold text-textColorLightGray">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                        </h2>
                    </div>
                    {/* Buton */}
                    <button className="bg-navbarLigthBlue text-white px-6 py-2 rounded-lg font-semibold hover:bg-buttonFullBlueHover transition-colors">
                        Try it free now
                    </button>
                    {/* Sosyal Medya İkonları */}
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
}

// Ok İkonu Bileşeni
const ArrowIcon = () => (
    <div className="mb-6">
        <i className="fa-solid fa-arrow-turn-down fa-2xl text-navbarLigthBlue"></i>
    </div>
);

// Sosyal Medya İkonları Bileşeni
const SocialIcons = () => {
    const icons = [
        { className: "fa-brands fa-twitter", color: "text-twitterIconBlue" },
        { className: "fa-brands fa-square-facebook", color: "text-facebookIconBlue" },
        { className: "fa-brands fa-instagram", color: "text-black" },
        { className: "fa-brands fa-linkedin", color: "text-linkedinIconBlue" },
    ];

    return (
        <div className="flex pt-4 pb-8 text-2xl gap-3 mt-3 items-center justify-center">
            {icons.map((icon, index) => (
                <i
                    key={index}
                    className={`${icon.className} ${icon.color} cursor-pointer hover:scale-110 transition-transform`}
                ></i>
            ))}
        </div>
    );
};

export default FreeTrial;
