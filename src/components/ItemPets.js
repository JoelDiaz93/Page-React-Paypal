import React, {useEffect, useState} from "react";
import {Button, Card, Col, Modal, Row} from "antd";
import PayPalReact from "./PayPalReact";

const ItemPets = ({pets}) => {
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
        <>
            <Row style={{margin: "0 10%"}}>
                {pets.map((pet) => {
                    return (
                        <Col span={8} style={{marginTop: "10px", marginBottom: "10px"}}>
                            <Card
                                style={{width: 200}}
                                cover={<img alt="Not Found Image" src={pet.photoURL}/>}
                                actions={[
                                    <Button type="primary" onClick={showModal}>
                                        Ver más
                                    </Button>
                                ]}
                            >
                                <Modal title="Pet" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                                    <p><strong>Descripción: </strong>{pet.description}</p>
                                    <p><strong>Marca: </strong>{pet.brand}</p>
                                    <p><strong>Precio: </strong>{pet.price}</p>
                                    {isActivatedPayPal ? <PayPalReact info={pet}/> :
                                        <Button type="primary" danger onClick={activatePayPal}>Comprar</Button>
                                    }
                                </Modal>
                                <Card.Meta title={pet.petname} description={pet.breed}/>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default ItemPets;
