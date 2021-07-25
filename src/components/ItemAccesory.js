import React, {useEffect, useState} from "react";
import {Button, Card, Col, Modal, Row} from "antd";
import PayPalReact from "./PayPalReact";

const ItemAccesory = ({accesories}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
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
                            <Card.Meta
                                title={accesory.accesoryname}
                                description={accesory.description}
                            />
                        </Card>
                    </Col>
                );
            })}
            <Modal title="Accesory" visible={isModalVisible} footer={null}>
                <p><strong>Descripción: </strong></p>
                <p><strong>Ubicación: </strong></p>
                <p><strong>Precio: </strong>$0.10</p>
                <PayPalReact/>
            </Modal>
        </Row>
    );
};

export default ItemAccesory;
