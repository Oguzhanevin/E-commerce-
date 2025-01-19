// PricingCard.jsx
import React from 'react';

const PricingCard = ({ plan }) => (
  <div
    className={`border border-buttonFullBlue shadow-md xl:rounded-lg p-10 w-96 min-h-[700px] ${
      plan.name === 'STANDARD' ? 'bg-textColorDarkGray text-white' : 'bg-white'
    } mb-10`}
  >
    <h2 className="text-2xl font-bold mb-6 text-center mt-10">{plan.name}</h2>
    <p
      className={`mb-6 text-center ${
        plan.name === 'STANDARD' ? 'text-gray-200' : 'text-textColorLightGray'
      }`}
    >
      {plan.description}
    </p>
    <p className="text-4xl font-bold mb-6 text-center text-buttonFullBlue flex flex-row items-center justify-center gap-2">
      {plan.price}
      <div className="text-xl text-lightBluePricing flex flex-col">
        <p className="text-buttonFullBlue">{plan.priceUnit}</p>
        <p>{plan.period}</p>
      </div>
    </p>
    <ul className="mb-10 mt-5 gap-8">
      {plan.features.map((feature, index) => (
        <li
          key={index}
          className={`flex items-center mb-4 gap-8 ${feature.color}`}
        >
          <i className="fa-solid fa-circle-check fa-2xl"></i>
          {feature.text}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded ${plan.buttonClass}`}>
      Try for free
    </button>
  </div>
);

export default PricingCard;
