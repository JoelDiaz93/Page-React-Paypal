import React, {useEffect, useState} from "react";
import {Button, Card, Col, Modal, Row} from "antd";
import PayPalReact from "./PayPalReact";

const ItemFood = ({foods}) => {
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
            {foods.map((food) => {
                return (
                    <Col span={8} style={{marginTop: "10px", marginBottom: "10px"}}>
                        <Card
                            style={{width: 200}}
                            cover={<img alt="Not Found Image" src={food.photoURL}/>}
                            actions={[
                                <Button type="primary" onClick={showModal}>
                                    Ver más
                                </Button>
                            ]}
                        >
                            <Card.Meta title={food.foodname} description={food.description}/>
                        </Card>
                    </Col>
                );
            })}
            <Modal title="Food" visible={isModalVisible} onCancel={handleCancel} footer={null}>
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

export default ItemFood;
