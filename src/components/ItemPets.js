import React, { useEffect, useState } from "react";
import { Button, Card, Col, Descriptions, Modal, Row } from "antd";

const ItemPets = ({ pets }) => {
  //   const handleViewMore = (movieId) => {
  //     console.log("movieId", movieId);
  //     setOmdbId(movieId);
  //     setIsModalVisible(true);
  //   };
  console.log("data recive", pets);
  return (
    <>
      <Row style={{ margin: "0 10%" }}>
        {pets.map((pet) => {
          return (
            <Col span={8} style={{ marginTop: "10px", marginBottom: "10px" }}>
              <Card
                style={{ width: 200 }}
                cover={<img alt="Not Found Image" src={pet.photoURL} />}
                actions={[
                  <Button
                    type="link"
                    // onClick={() => handleViewMore(movie.imdbID)}
                  >
                    Ver más
                  </Button>,
                ]}
              >
                <Card.Meta title={pet.petname} description={pet.breed} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ItemPets;
