import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
    {
        question: "The quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "The quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "The quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "The quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "The quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "The quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
];

const FAQComponent = () => (
    <div className="bg-white py-6">
        <div className="max-w-screen-lg p-8 mx-auto">
            <h2 className="text-4xl text-gray-800 font-bold mb-4 text-center">Pricing FAQs</h2>
            <p className="text-textColorLightGray text-xl mb-8 text-center">
                Problems trying to resolve the conflict between the two major realms of Classical physics
            </p>
            <div className="flex flex-wrap -mx-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full md:w-1/2 px-2 mb-4">
                        <FAQItem question={faq.question} answer={faq.answer} />
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <p className="text-textColorLightGray text-xl">
                    Haven't got your answer? <a href="/contact" className="text-navbarLigthBlue hover:underline">Contact our support</a>
                </p>
            </div>
        </div>
    </div>
);

export default FAQComponent;
