/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import Button from "./components/button/Button.jsx";
import Card from "./components/card/Card.jsx";
import Cart from "./components/cart/Cart.jsx";
import { getData } from "./db/db.js";

const foods = getData();

const tele = window.Telegram.WebApp;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay ;)";
    tele.MainButton.show();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div>
        <Button disable={false} title="Add" type={"bg-yellow-300"} />
        <Button disable={false} title="Remove" type={"bg-red-500"} />
        <Button disable={false} title="Check" type={"bg-blue-500"} />
      </div>
      {foods.map((food) => (
        <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default App;
