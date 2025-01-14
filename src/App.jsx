import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <>
      <Switch>
        <PageContent>
          <Route path="/">
            <HomePage />
          </Route>
        </PageContent>
      </Switch>
      <ToastContainer />
    </>
  );