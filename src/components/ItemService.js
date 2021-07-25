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
                            <Card.Meta
                                title={service.servicename}
                                description={service.description}
                            />
                        </Card>
                    </Col>
                );
            })}
            <Modal title="Service" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <p><strong>Descripción: </strong></p>
                <p><strong>Ubicación: </strong></p>
                <p><strong>Precio: </strong>$0.10</p>
                {isActivatedPayPal ? <PayPalReact/> :
                    <Button onClick={activatePayPal}>Comprar</Button>
                }
            </Modal>
        </Row>
    );
};

export default ItemService;