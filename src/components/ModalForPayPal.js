import React, {useState} from "react";
import {Modal} from "antd";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});

const ModalForPaypal = ({value}) => {
    const [isModalVisible, setIsModalVisible] = useState(value);

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
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return(
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </Modal>
    );
};

export default ModalForPaypal;