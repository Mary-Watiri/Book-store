import Checkout from './Checkout';
import Footer from './Footer';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './App.css';


const initialOptions = {
  "client-id": "AW8X5in4VKnvycnAwZHX4n8n1HS4v2pV3LivXjJiHJp4t0yND9yUZAdcxJutwpBj2o4nIfi9a_eO0YKz",
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Checkout />
      <Footer />
    </PayPalScriptProvider>
  );
}

export default App;
