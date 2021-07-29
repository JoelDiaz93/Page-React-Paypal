import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});

const PayPalReact = ({info}) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const getPrice=()=>{
            setPrice(info.price);
        }
        getPrice();
        return () => {

        };
    }, [price]);

    const createOrder = (data, actions) => {
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    description: "data.description",
                    amount: {
                        currency_code: "USD",
                        value: price,
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