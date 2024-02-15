import React, { useState } from "react";
import BookList from "./BookList";
import Cart from "./Cart";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AW8X5in4VKnvycnAwZHX4n8n1HS4v2pV3LivXjJiHJp4t0yND9yUZAdcxJutwpBj2o4nIfi9a_eO0YKz",
  currency: "USD",
  intent: "capture",
};
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <Cart cartItems={cartItems} />
      </PayPalScriptProvider>
      <BookList addToCart={addToCart} />
    </div>
  );
}

export default App;
