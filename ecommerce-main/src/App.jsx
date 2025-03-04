import { useDispatch } from "react-redux";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyToken } from "./store/thunks/authThunks";
import { useEffect } from "react";
import { fetchCategories, fetchProducts } from "./store/thunks/productThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
