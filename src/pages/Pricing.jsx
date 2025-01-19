import React from 'react';
import Header from '../layout/Header';
import Footer from '../components/generalComponents/Footer';
import PricingHeader from '../components/pricingPageComponents/PricingHeader';
import PricingHero from '../components/pricingPageComponents/PricingHero';
import BrandLogos from '../components/contactPageComponents/BrandLogos';
import FreeTrial from '../components/generalComponents/FreeTrial';
import FAQ from '../components/pricingPageComponents/FAQ';

function Pricing() {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Pricing Section */}
            <PricingHeader />
            <PricingHero />

            {/* Brand Logos Section */}
            <section className="text-center bg-mainBackgroundWhite pt-16">
                <h1 className="text-xl font-bold text-textColorDarkGray">
                    Trusted By Over 4000 Big Companies
                </h1>
                <BrandLogos />
            </section>

            {/* FAQ Section */}
            <FAQ />

            {/* Free Trial Section */}
            <FreeTrial showIcon={false} />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Pricing;
