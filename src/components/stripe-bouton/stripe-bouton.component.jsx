import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutBouton = ({ prix }) => {
    const prixPourStripe = prix * 100
    const clepublic =
        'pk_test_51HmiwfJ85xXSRSENCT097uuy9ck9MPKXOmuzrOAg3XmgbQ9iOpxoLa8PfaGktvj0QlB4frKaQ25LWfxjicnpi4JS00df6LSYHX'

    const onToken = token => {
        console.log(token)
        alert('payement réussit')
    }

    return (
        <StripeCheckout
            label='Paye maintenant'
            name='IfosupShop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Votre total = ${prix}€`}
            amount={prixPourStripe}
            panelLabel='Payer maintenant'
            currency='EURO'
            token={onToken}
            stripeKey={clepublic}
        />
    )
}

export default StripeCheckoutBouton