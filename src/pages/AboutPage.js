import { Row, Col, Image, Typography } from "antd";
import React from "react";
import Image1 from "../images/gato-marron_0.jpg";
import Image2 from "../images/dogue-de-bordeaux-1047521_640.jpg";
import Image3 from "../images/lordguau-veterinaria.jpg";

const { Title } = Typography;

const AboutPage = () => {
  return (
    <>
      <Row justify="center">
        <Col style={{ marginTop: "30px" }}>
          <Title level={2}>Mascotas en adopcion</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Title level={5}>Mascotas en adopcion</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
        <Col span={8} style={{ marginLeft: "50px" }}>
          <Title level={5}>Escoge a tu favorito</Title>
          <Image width={450} src={Image2} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8} style={{ marginRight: "50px" }}>
          <Title level={5}>Servicios para tu mascota</Title>
          <Image width={450} src={Image3} />
        </Col>
        <Col span={8}>
          <Title level={5}>Todo lo que necesitas para tu mascota</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AboutPage;
