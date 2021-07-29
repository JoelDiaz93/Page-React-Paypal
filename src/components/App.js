import "../styles/App.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "../lib/auth";
import Routes from "../constants/routes";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";
import TermCondPage from "../pages/TermCondPage";
import PetsPage from "../pages/PetsPage";
import CategoryPage from "../pages/CategoryPage";
import FoodPage from "../pages/FoodPage";
import ServicePage from "../pages/ServicePage";
import AccesoriesPage from "../pages/AccesoriesPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <MainLayout>
            <Switch>
              <Route path="/" exact={true}>
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
              <Route path="/users">
                <UsersPage />
              </Route>
              <Route path="/termsconditions">
                <TermCondPage />
              </Route>
              <Route path="/category">
                <CategoryPage />
              </Route>
              <Route path="/pets">
                <PetsPage />
              </Route>
              <Route path="/food">
                <FoodPage />
              </Route>
              <Route path="/service">
                <ServicePage />
              </Route>
              <Route path="/accesories">
                <AccesoriesPage />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </MainLayout>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
