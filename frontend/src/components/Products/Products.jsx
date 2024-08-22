import React, { useContext, useState, useEffect } from "react";
import productService from "../../services/product.service";
import "./Products.scss";
import CartContext from "../../context/CartContext";
import cartService from "../../services/cart.service";

const Products = () => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const { cart, updateCart } = useContext(CartContext);

  useEffect(() => {
    productService
      .getProducts()
      .then((res) => {
        const products = res.data;
        const grouped = products.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {});

        setGroupedProducts(grouped);
      })
      .catch((err) => alert(err.message));
  }, []);

  useEffect(() => {
    updateCart();
  }, [cart]);

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
    <div className="home-products">
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="category-group">
          <h1>{category}</h1>
          <div className="home-products-list">
            {groupedProducts[category].map((p) => {
              const cartItem = cart.find((item) => item.id === p.id);
              const quantity = cartItem ? cartItem.quantity : 0;
              return (
                <div key={p.id} className="home-product">
                  <img src={p.img} alt={p.title} />
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
        </div>
      ))}
    </div>
  );
};

export default Products;
