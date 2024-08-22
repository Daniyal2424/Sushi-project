import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Delivery from "./Pages/Delivery/Delivery";
import Restaurant from "./Pages/Restaurant/Restaurant";
import Contacts from "./Pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import UserProvider from "./context/UserPovider";
import Category from "./Pages/Category/Category";
import Basket from "./Pages/Basket/Basket";
import { CartProvider } from "./context/CartContext";
import Decor from "./Pages/Decor/Decor";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/decor" element={<Decor />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </div>
  );
};

export default App;
