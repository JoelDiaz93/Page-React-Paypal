import React, {useEffect, useState} from "react";
import PayPalReact from "./PayPalReact";
import {Button, Card, Col, Modal, Row} from "antd";

const ItemService = ({services}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isActivatedPayPal, setIsActivatedPayPal] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const activatePayPal = () => {
        setIsActivatedPayPal(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                            <Modal title="Service" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                                <p><strong>Descripción: </strong>{service.description}</p>
                                <p><strong>Marca: </strong>{service.brand}</p>
                                <p><strong>Precio: </strong>{service.price}</p>
                                {isActivatedPayPal ? <PayPalReact info={service}/> :
                                    <Button type="primary" danger onClick={activatePayPal}>Comprar</Button>
                                }
                            </Modal>
                            <Card.Meta
                                title={service.servicename}
                                description={service.description}
                            />
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default ItemService;