import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const checkOutHandler = (event) => {
    setIsCheckedOut(true);
  };

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    fetch(
      "https://react-udemy-http-71c0f-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.resetItem();
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const checkoutItemsLists = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseModal}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkOutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalCartContent = <Fragment>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckedOut && (
        <Checkout
          onCancel={props.onCloseModal}
          onConfirm={submitOrderHandler}
        />
      )}

      {!isCheckedOut && checkoutItemsLists}
  </Fragment>

  const modalSubmittingContent = <p>submitting</p>;

  const modalDidSubmit = <p>Successfully placed your order</p>


  return (
    <Modal onClose={props.onCloseModal}>
      {!isSubmitting && !didSubmit && modalCartContent}
      {isSubmitting && !didSubmit && modalSubmittingContent}
      {!isSubmitting && didSubmit && modalDidSubmit}
    </Modal>
  );
};

export default Cart;
