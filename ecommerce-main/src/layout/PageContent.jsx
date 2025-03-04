import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import Team from "../pages/Team";
import SignUp from "../pages/SignUp";
import Basket from "../pages/Basket";
import Order from "../pages/Order";
import PreviousOrders from "../pages/PreviousOrders";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          component={ProductDetail}
        />
        <Route
          path="/shop/:gender/:categoryName/:categoryId"
          exact
          component={Shop}
        />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/team" component={Team} />
        <Route path="/basket" component={Basket} />
        <Route path="/order" component={Order} />
        <Route path="/PreviousOrders" component={PreviousOrders} />
      </Switch>
    </div>
  );
};

export default PageContent;
