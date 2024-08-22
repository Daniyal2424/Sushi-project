import React, { useContext } from "react";
import "./Decor.scss";
import CartContext from "../../context/CartContext";
import cartService from "../../services/cart.service";

const Decor = () => {
  const { total } = useContext(CartContext);
  const { cart, updateCart } = useContext(CartContext);
  const handleClick = (e) => {
    e.target.disabled = true;
    cartService
      .clearCart()
      .then(() => {
        updateCart();
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        alert("Заказ успешно выполено");
      });
  };

  return (
    <div className="decor">
      <h1>Оформление заказа</h1>
      <h3>Информация для связи</h3>
      <input type="text" placeholder="Имя" />
      <input type="number" placeholder="Телефон" />
      <p className="price">Стоимость заказа: {total} ₸</p>
      <button onClick={handleClick}>Создать заказ</button>
    </div>
  );
};

export default Decor;
