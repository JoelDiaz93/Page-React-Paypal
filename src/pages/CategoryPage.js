import { Col, Row, Image, Typography, Button } from "antd";
import React from "react";
import withAuth from "../hocs/withAuth";
import Image1 from "../images/cat/dog.png";
import Image2 from "../images/cat/software-as-a-service-sync.png";
import Image3 from "../images/cat/ecommerce-box.png";
import Image4 from "../images/cat/cookies.png";

const { Title } = Typography;

const CategoryPage = () => {
    return (
        <Row justify="space-around" style={{ marginTop: "50px" }}>
            <Col span={4}>
                <Image width={300} height={300} src={Image1} preview={false} />
                <Button style={{ width: "100%" }} href="/pets" danger>
                    MASCOTAS
                </Button>
            </Col>
            <Col span={4}>
                <Image width={300} height={300} src={Image2} preview={false} />
                <Button style={{ width: "100%" }} href="/service" danger>
                    SERVICIO
                </Button>
            </Col>
            <Col span={4}>
                <Image width={300} height={300} src={Image3} preview={false} />
                <Button style={{ width: "100%" }} href="/accesories" danger>
                    ACCESORIOS
                </Button>
            </Col>
            <Col span={4}>
                <Image width={300} height={300} src={Image4} preview={false} />
                <Button style={{ width: "100%" }} href="/food" danger>
                    ALIMENTO
                </Button>
            </Col>
        </Row>
    );
};

export default withAuth(CategoryPage);
