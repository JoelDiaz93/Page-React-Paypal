import React from "react";
import { Col, Image, Row, Divider, Card } from "antd";
import Image1 from "../images/friends-3042751_1920.jpg";
import Image2 from "../images/dogue-de-bordeaux-1047521_640.jpg";

const HomePage = () => {
  return (
    <>
      <Image width={"100%"} src={Image1} preview={false} />

      <Divider plain orientation="center">
        CATEGORIAS MAS VISTAS
      </Divider>

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Image width={300} src={Image2} />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Image width={300} src={Image2} />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Image width={300} src={Image2} />
        </Col>
      </Row>

      <Divider plain orientation="center">
        TESTIMONIOS DE ADOPCION
      </Divider>

      <div className="site-card-wrapper" style={{marginTop:30}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
