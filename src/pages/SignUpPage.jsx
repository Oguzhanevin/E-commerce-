import React from 'react';
import Header from '../layout/Header';
import SignupForm from '../components/loginSignUp/SignupForm';
import Footer from '../components/generalComponents/Footer';

const SignUpPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Optimization */}
      <head>
        <title>Sign Up | My Website</title>
        <meta name="description" content="Create a new account to enjoy our services." />
      </head>

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
