import React, { useContext, useEffect, useState } from "react";
import productService from "../../services/product.service";
import { useParams } from "react-router-dom";
import "./Category.scss";
import CartContext from "../../context/CartContext";
import cartService from "../../services/cart.service";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const { cart, updateCart } = useContext(CartContext);

  useEffect(() => {
    productService
      .getProductsByCategory(category)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category]);

  const handleAddToCart = (productId) => (e) => {
    e.target.disabled = true;
    cartService
      .addProduct(productId)
      .then(() => {
        updateCart();
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        e.target.disabled = false;
      });
  };

  const handleRemoveFromCart = (productId) => (e) => {
    e.target.disabled = true;
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
      const newQuantity = cartItem.quantity > 1 ? cartItem.quantity - 1 : 0;
      const action =
        newQuantity > 0
          ? cartService.updateQuantity(productId, newQuantity)
          : cartService.deleteProduct(productId);

      action
        .then(() => {
          updateCart();
        })
        .catch((err) => alert(err.message))
        .finally(() => {
          e.target.disabled = false;
        });
    } else {
      e.target.disabled = false;
    }
  };

  return (
    <div className="category-products">
      {products.map((p) => {
        const cartItem = cart.find((item) => item.id === p.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div key={p.id} className="category-product">
            <img src={p.img} alt="" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="price">
              {p.pieces && <p className="pieces">{`${p.pieces} шт`}</p>}
              <p>{p.price} ₸</p>
            </div>
            <div className="quantity">
              <button
                onClick={handleRemoveFromCart(p.id)}
                disabled={quantity === 0}
              >
                -
              </button>
              <p>{quantity}</p>
              <button onClick={handleAddToCart(p.id)}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
