import CartItem from './Cart';
import Grid from '@mui/material/Grid';
import { useNavigate} from "react-router-dom";
import { useCart } from "react-use-cart";
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
function StripePayment() {
 const publishableKey =
 'pk_test_51L7mHpALOpoP5FS99yVigcEaNM5zpdcwOdVdFkX6oqHXLnG5C4KQJ4iTZ34lG7Q5RLR0mIZeikG3gbmoqGaT7zhL0048NOLCMf';
 const [product, setProduct] = useState({
 name: 'Headphone',
 price: 5,
 });
 let navigate = useNavigate ();
 const {
 isEmpty,
 items,
 totalItems,
 cartTotal,
 emptyCart,
 clearCartMetadata
 } = useCart();
 const priceForStripe = product.price * 100;
 const handleSuccess = () => {
 MySwal.fire({
 icon: 'success',
 title: 'Payment was successful',
 time: 4000,
});
};
const handleFailure = () => {
MySwal.fire({
icon: 'error',
title: 'Payment was not successful',
time: 4000,
});
};
const payNow = async token => {
try {
const response = await axios({
url: 'http://localhost:5000/api/payment',
method: 'post',
data: {
amount: product.price * 100,
token,
},
});
if (response.status === 200) {
handleSuccess();
}
} catch (error) {
handleFailure();
console.log(error);
}
};
return (
<div className="container">
<h2>Complete React & Stripe payment integration</h2>

<span>Product: </span>
<Grid item xs={5}>
    {
    items.map(item => <CartItem key={item._id} item={item}/>)
    }
    </Grid>
    <h4>{totalItems}</h4>
    <p>Total Payement</p>
   <h3>{cartTotal} TND</h3>



<StripeCheckout
stripeKey={publishableKey}
label="Pay Now"
name="Pay With Credit Card"
billingAddress
shippingAddress
amount={cartTotal}
description={`Your total is $${cartTotal}`}
token={payNow}
/></div>
 );
}
export default StripePayment; 