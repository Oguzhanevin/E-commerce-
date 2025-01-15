import React from 'react';

const stats = [
    { value: '15K', message: 'Happy Customers' },
    { value: '150K', message: 'Monthly Visitors' },
    { value: '15', message: 'Countries Worldwide' },
    { value: '100+', message: 'Top Partners' },
];

function AboutUsStat() {
    return (
        <div className="w-[92%] mx-auto py-16 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center md:text-start flex-1">
                        <h4 className="text-[58px] font-bold text-textColorDarkGray mb-4">{stat.value}</h4>
                        <p className="text-[16px] text-textColorLightGray">{stat.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsStat;
