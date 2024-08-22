import React, { useContext } from "react";
import cartService from "../../services/cart.service";
import CartContext from "../../context/CartContext";
import "./Basket.scss";
import { Link } from "react-router-dom";

const Basket = () => {
  const { total } = useContext(CartContext);
  const { cart, updateCart } = useContext(CartContext);

  const deleteClick = (id) => {
    cartService
      .deleteProduct(id)
      .then((res) => updateCart(res.data))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="basket">
      <div className="basket-products">
        <h1>Корзина</h1>
        {cart &&
          cart.map((p) => (
            <div key={p.id} className="basket-product">
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.price} ₸</p>
              <i
                onClick={() => deleteClick(p.id)}
                className="bx bx-x delete"
              ></i>
            </div>
          ))}
      </div>
      <div className="buy">
        <img src="https://mysato-sushi.kz/assets/images/delivery.svg" alt="" />
        <h3>Доставка заказа</h3>
        <p>My Sushi обслуживает ограниченную территорию города.</p>
        <p>
          Стоимость доставки зависит от вашего местоположения и способа
          доставки. Доставка от 500 тенге, более подробно по вашему адресу
          можете уточнить у наших операторов.
        </p>
        <p>
          Вы также можете забрать заказ самостоятельно на наших точках со
          скидкой 500 тенге при заказа от 5000 тенге пр.Мауленова 92.
          Минимальная сумма заказа 3000 тг.
        </p>
        <p className="price">Стоимость заказа: {total} ₸</p>
        <Link to="/decor">
          <button className="btn-buy">Перейти к оформлению</button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
