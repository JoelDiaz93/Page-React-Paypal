import React, { useEffect, useState } from "react";
import { Button, Card, Col, Descriptions, Modal, Row } from "antd";

const ItemAccesory = ({ accesories }) => {
  return (
    <Row style={{ margin: "0 10%" }}>
      {accesories.map((accesory) => {
        return (
          <Col span={8} style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Card
              style={{ width: 200 }}
              cover={<img alt="Not Found Image" src={accesory.photoURL} />}
              actions={[
                <Button
                  type="link"
                  // onClick={() => handleViewMore(movie.imdbID)}
                >
                  Ver más
                </Button>,
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
    </Row>
  );
};

export default ItemAccesory;
