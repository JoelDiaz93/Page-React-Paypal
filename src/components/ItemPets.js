import React, {useEffect, useState} from "react";
import {Button, Card, Col, Modal, Row} from "antd";
import PayPalReact from "./PayPalReact";

const ItemPets = ({pets}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
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
                                <Card.Meta title={pet.petname} description={pet.breed}/>
                            </Card>
                        </Col>
                    );
                })}
                <Modal title="Pet" visible={isModalVisible} footer={null}>
                    <p><strong>Descripción: </strong></p>
                    <p><strong>Ubicación: </strong></p>
                    <p><strong>Precio: </strong>$0.10</p>
                    <PayPalReact/>
                </Modal>
            </Row>
        </>
    );
};

export default ItemPets;
