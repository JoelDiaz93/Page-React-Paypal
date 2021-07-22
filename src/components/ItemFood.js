import React, { useEffect, useState } from "react";
import { Button, Card, Col, Descriptions, Modal, Row } from "antd";

const ItemFood = ({ foods }) => {
  return (
    <Row style={{ margin: "0 10%" }}>
      {foods.map((food) => {
        return (
          <Col span={8} style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Card
              style={{ width: 200 }}
              cover={<img alt="Not Found Image" src={food.photoURL} />}
              actions={[
                <Button
                  type="link"
                  // onClick={() => handleViewMore(movie.imdbID)}
                >
                  Ver más
                </Button>,
              ]}
            >
              <Card.Meta title={food.foodname} description={food.description} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemFood;
