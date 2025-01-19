import React from 'react';
import { Helmet } from 'react-helmet'; // react-helmet import'u
import Header from '../layout/Header';
import SignupForm from '../components/loginSignUp/SignupForm';
import Footer from '../components/generalComponents/Footer';

const SignUpPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Optimization with react-helmet */}
      <Helmet>
        <title>Sign Up | My Website</title>
        <meta name="description" content="Create a new account to enjoy our services." />
      </Helmet>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-screen-md mx-auto p-4">
          <SignupForm />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SignUpPage;
