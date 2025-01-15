import React from 'react';
import Header from '../layout/Header';
import LoginForm from '../components/loginSignUp/LoginForm';
import Footer from '../components/generalComponents/Footer';

function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <LoginForm />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default LoginPage;
