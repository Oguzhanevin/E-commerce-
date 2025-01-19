import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LoadingSpinner from "./layout/LoadingSpinner";
import ShoppingCartPages from "./pages/ShoppingCartPages";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/auth";
import CreateOrder from "./pages/CreateOrder";
import PreviousOrderPage from "./pages/PreviousOrderPage";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Loading state to simulate app initialization
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);  // Set loading state for 1 second
  }, []);

  // Verify token to check user authentication status
  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* Show loading spinner until app is ready */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Switch>
            {/* Public Routes */}
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ProductListPage} />
            <Route
              path="/shop/:gender/:category/:categoryid"
              exact
              component={ProductListPage}
            />
            <Route
              path="/shop/:gender/:category/:categoryid/:productnameslug/:productId"
              exact
              component={ProductDetailPage}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/shoppingcart" component={ShoppingCartPages} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/team" component={Team} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            
            {/* Private Routes */}
            <PrivateRoute path="/previousorder" component={PreviousOrderPage} />
            <Route path="/order" component={CreateOrder} />
          </Switch>
        )}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
