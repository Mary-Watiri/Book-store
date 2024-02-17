import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"; // Importing PayPalButtons component and usePayPalScriptReducer hook

const Checkout = () => {
  // State and dispatch for managing PayPal options and loading state
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  // State for managing currency selection
  const [currency, setCurrency] = useState(options.currency);

  // Function to handle currency change
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    // Resetting PayPal options with new currency
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  // Function to create PayPal order
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "8.99", // Hardcoded order amount for demonstration
            currency_code: currency, // Dynamic currency selection
          },
        },
      ],
    });
  };

  // Function to capture and approve PayPal order
  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name; // Extracting payer's first name
      alert(`Transaction completed by ${name}`); // Showing completion alert
    });
  };

  return (
    <div className="checkout" style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Display loading message if PayPal script is pending */}
      {isPending ? (
        <p style={{ fontSize: '18px', color: 'blue' }}>LOADING...</p>
      ) : (
        // Render currency selector and PayPal buttons
        <>
          <select
            value={currency}
            onChange={onCurrencyChange}
            style={{ backgroundColor: 'black', color: 'white', marginTop: '10px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            {/* Currency options */}
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 Euro</option>
            <option value="KES">💰 KES</option> {/* Adding Kenyan Shilling (KES) */}
          </select>
          {/* Render PayPal buttons */}
          <PayPalButtons
            style={{ marginTop: '20px' }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
};

export default Checkout;
