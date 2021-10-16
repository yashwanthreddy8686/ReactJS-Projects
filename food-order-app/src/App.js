import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setshowModal] = useState(false);

  const showModalHandler = () => setshowModal(true);

  const closeModalHandler = () => setshowModal(false);
  return (
    <CartProvider>
      {showModal && <Cart onCloseModal={closeModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
