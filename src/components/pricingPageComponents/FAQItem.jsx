import React from 'react';

const FAQItem = ({ question, answer }) => (
  <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
    <div className="flex-shrink-0">
      <i className="fas fa-chevron-right text-buttonFullBlue hidden md:block"></i>
    </div>
    <div>
      <h3 className="font-semibold text-xl text-gray-800">{question}</h3>
      <p className="text-textColorLightGray mt-2">{answer}</p>
    </div>
  </div>
);

export default FAQItem;
