import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Header = () => {
  const { total } = useContext(CartContext);
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <div className="header-logo_icon">
            <i className="bx bxs-bowl-hot"></i>
          </div>
          <div className="header-logo_title">MY SUSHI</div>
        </div>
      </Link>
      <div className="header-list">
        <Link to="/">Меню</Link>
        <Link to="/delivery">Доставка</Link>
        <Link to="/restaurant">Рестораны</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
      <div className="header-icons">
        <Link to="/basket">
          <div className="header-icons_basket">
            <i className="bx bxs-basket"></i>
            <p>{total} ₸</p>
          </div>
        </Link>
        <Link to="/login">
          <div className="header-icons_user">
            <i className="bx bxs-user-circle"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
