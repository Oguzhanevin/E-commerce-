 
import React, { useState } from 'react';
import PricingCard from './PricingCard';

function PricingHero() {
    const [isYearly, setIsYearly] = useState(false);

    const pricingPlans = [
        {
            name: "FREE",
            description: "Organize across all apps by hand",
            price: "0",
            priceUnit: "$",
            period: "Per Month",
            features: [
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "1GB Cloud storage", color: "text-textColorLightGray" },
                { text: "Email and community support", color: "text-textColorLightGray" },
            ],
            buttonClass: "bg-textColorDarkGray text-white",
        },
        {
            name: "STANDARD",
            description: "Organize across all apps by hand",
            price: "9.99",
            priceUnit: "$",
            period: "Per Month",
            features: [
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "1GB Cloud storage", color: "text-textColorLightGray" },
                { text: "Email and community support", color: "text-textColorLightGray" },
            ],
            buttonClass: "bg-buttonFullBlue",
        },
        {
            name: "PREMIUM",
            description: "Organize across all apps by hand",
            price: "19.99",
            priceUnit: "$",
            period: "Per Month",
            features: [
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "1GB Cloud storage", color: "text-textColorLightGray" },
                { text: "Email and community support", color: "text-textColorLightGray" },
            ],
            buttonClass: "bg-buttonFullBlue text-white",
        },
    ];

    return (
        <div className="w-[92%] p-8 mx-auto">
            <div className="flex flex-col items-center xl:items-stretch gap-2 justify-between py-16">
                {/* Pricing Header Section */}
                <div className="text-center mb-10 flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Pricing</h1>
                    <p className="text-textColorLightGray">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    {/* Toggle Buttons */}
                    <div className="flex items-center justify-center mt-4">
                        <button
                            className={`px-4 py-2 rounded-l text-lg ${!isYearly ? 'text-buttonFullBlue' : ''}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>

                        <i
                            className={`fas ${isYearly ? 'fa-toggle-on' : 'fa-toggle-off'} mx-2 text-3xl text-blue-400 cursor-pointer`}
                            onClick={() => setIsYearly(!isYearly)}
                        ></i>

                        <button
                            className={`px-4 py-2 rounded-r text-lg ${isYearly ? 'text-buttonFullBlue' : ''}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                        {/* Save 25% banner */}
                        {isYearly && (
                            <span className="px-4 py-2 font-semibold text-blue-400 bg-saveBColor rounded-full ml-4">
                                Save 25%
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="flex justify-center flex-col xl:flex-row xl:justify-between gap-10 xl:gap-1">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PricingHero;
