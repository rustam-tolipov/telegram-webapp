import Button from "../button/Button";

const Cart = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div>
      Cart: ({cartItems.length === 0 ? "no items" : cartItems.length})
      <br />
      Total Price: ${totalPrice.toFixed(2)}
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
        type={"bg-green-500"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
