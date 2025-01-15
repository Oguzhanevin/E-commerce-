import React from 'react';
import Header from '../layout/Header';
import Footer from '../components/generalComponents/Footer';

// Importing Contact Page Specific Sections
import ContactUs from '../components/contactPageComponents/ContactUs';
import ContactBar from '../components/contactPageComponents/ContactBar';
import ContactMeet from '../components/contactPageComponents/ContactMeet';

function Contact() {
    return (
        <div>
            {/* Header Section */}
            <Header />

            {/* Main Contact Us Section */}
            <ContactUs />

            {/* Contact Information Bar */}
            <ContactBar />

            {/* Meet the Team Section */}
            <ContactMeet />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default Contact;
