// import React from 'react';
// import { PayPalButtons } from '@paypal/react-paypal-js';

// function Checkout({ totalAmount }) {
//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: totalAmount,
//           },
//         },
//       ],
//     });
//   };

//   const onApprove = (data, actions) => {
//     return actions.order.capture().then(function (details) {
//       // Handle successful payment
//       console.log('Payment completed successfully');
//     });
//   };

//   return (
//     <PayPalButtons
//       style={{ layout: 'horizontal' }}
//       createOrder={createOrder}
//       onApprove={onApprove}
//     />
//   );
// }

// export default Checkout;
