import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});

const PayPalReact = () => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    description: "Cool looking for table",
                    amount: {
                        currency_code: "USD",
                        value: "0.10",
                    },
                },
            ],
        });
    }

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
        alert("La transacción se ha ejecutado correctamente");
    }

    return(
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    );
};

export default PayPalReact;