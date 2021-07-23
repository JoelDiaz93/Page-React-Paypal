import React, {useEffect, useState} from "react";
//import ReactDOM from "react-dom"
import {Button, Card, Col, Modal, Row} from "antd";
import ModalForPaypal from "./ModalForPayPal";

//const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});

const ItemService = ({services}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    /*
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
    */
    /*
    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
    }
    */
    const showModal = () => {
        setIsModalVisible(true);
    };
    /*
    const handleOk = () => {
        setIsModalVisible(false);
    };
    */
    return (
        <Row style={{margin: "0 10%"}}>
            {services.map((service) => {
                return (
                    <Col span={8} style={{marginTop: "10px", marginBottom: "10px"}}>
                        <Card
                            style={{width: 200}}
                            cover={<img alt="Not Found Image" src={service.photoURL}/>}
                            actions={[
                              <Button type="primary" onClick={showModal}>
                                Ver más
                              </Button>,
                            ]}
                        >
                            <Card.Meta
                                title={service.servicename}
                                description={service.description}
                            />
                        </Card>
                    </Col>
                );
            })}
          {/*
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
          </Modal>
          */}
            {
                <ModalForPaypal value={isModalVisible} />
            }
        </Row>
    );
};

export default ItemService;