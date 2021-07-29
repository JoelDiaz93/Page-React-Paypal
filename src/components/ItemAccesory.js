import React, {useEffect, useState} from "react";
import {Button, Card, Col, Modal, Row} from "antd";
import PayPalReact from "./PayPalReact";

const ItemAccesory = ({accesories}) => {
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
            {accesories.map((accesory) => {
                return (
                    <Col span={8} style={{marginTop: "10px", marginBottom: "10px"}}>
                        <Card
                            style={{width: 200}}
                            cover={<img alt="Not Found Image" src={accesory.photoURL}/>}
                            actions={[
                                <Button type="primary" onClick={showModal}>
                                    Ver más
                                </Button>
                            ]}
                        >
                            <Modal title="Accessory" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                                <p><strong>Descripción: </strong>{accesory.description}</p>
                                <p><strong>Marca: </strong>{accesory.brand}</p>
                                <p><strong>Precio: </strong>{accesory.price}</p>
                                {isActivatedPayPal ? <PayPalReact info={accesory}/> :
                                    <Button type="primary" danger onClick={activatePayPal}>Comprar</Button>
                                }
                            </Modal>
                            <Card.Meta
                                title={accesory.accesoryname}
                                description={accesory.description}
                            />
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default ItemAccesory;
