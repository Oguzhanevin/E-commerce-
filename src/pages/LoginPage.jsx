import React from 'react'
import Header from '../layout/Header'
import LoginForm from '../components/loginSignUp/LoginForm'
import Footer from '../components/generalComponents/Footer'

function LoginPage() {
  return (
    <div>
        <Header />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default LoginPage