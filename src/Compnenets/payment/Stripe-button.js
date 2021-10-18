import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{

    const publishKey="pk_test_51JlYSYHXo6lyXaQeMKt3BRppkHZ9SmtAsgmImTziFxwbK0ByJIEBEQ7RZyuUKJcxo0O7ejRKf4mS2isL1kaIhtw600omCSrAR6";

    const handlePayment=(token)=>{
        console.log(token);
        alert("success")
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="Online_Shopping"
            billingAddress
            shippingAddress
            description={`your Total payment is ${price}`}
            amount={price}
            token={handlePayment}
            panelLabel='Pay Now'
            stripeKey={publishKey}
        />
        
    )
}

export default StripeCheckoutButton;