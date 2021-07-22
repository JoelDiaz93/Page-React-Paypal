import React, { useEffect, useState } from "react";
import {
  Descriptions,
  Avatar,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Select,
  Input,
  Image,
  Switch,
  Radio,
  Slider,
  Upload,
  Rate,
  Checkbox,
  Cascader,
  DatePicker,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../lib/auth";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import MapView from "../map/MapView";

const residences = [
  {
    value: "pichincha",
    label: "Pichincha",
    children: [
      {
        value: "quito",
        label: "Quito",
      },
    ],
  },
  {
    value: "guayas",
    label: "Guayas",
    children: [
      {
        value: "guayaquil",
        label: "Guayaquil",
      },
    ],
  },
];

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const UserInfo = () => {
  const { user } = useAuth();
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showMap = () => {
    setIsMapVisible(true);
  };

  const handleOkMap = () => {
    setIsMapVisible(false);
  };

  const handleCancelMap = () => {
    setIsMapVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    // const date = [
    //   { year: values.date.format("YYYY") },
    //   { month: values.date.format("MM") },
    //   { day: values.date.format("DD") },
    // ];
    const year = values.date.format("YYYY");
    const month = values.date.format("MM");
    const day = values.date.format("DD");
    values.date = [year, month, day];
    console.log("Received values of form: ", values);
  };

  console.log("user in info", user);

  return (
    <>
      <Row justify="center">
        <Col>
          <div style={{ margin: "30px" }}>
            <Avatar
              src={<Image src={user.photoURL} />}
              size={128}
              icon={<UserOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row justify="center" style={{ marginLeft: "60px" }}>
        <Col>
          <Descriptions title="Informacion del usuario">
            <Descriptions.Item label="Usuario">
              {!!user ? user.nickname : "nickname"}
            </Descriptions.Item>
            <Descriptions.Item label="Nombre">
              {!!user ? user.name : "name"}
            </Descriptions.Item>
            <Descriptions.Item label="Apellido">
              {!!user ? user.lastname : "lastname"}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {!!user ? user.email : "email"}
            </Descriptions.Item>
            <Descriptions.Item label="Residencia">
              {!!user
                ? user.residence[0] + " " + user.residence[1]
                : "residence"}
            </Descriptions.Item>
            <Descriptions.Item label="Direccion">
              {!!user ? user.address : "residence"}
            </Descriptions.Item>
            <Descriptions.Item label="Telefono">
              {!!user ? user.phone : "residence"}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row justify="end" style={{ marginRight: "60px", marginTop: "20px" }}>
        <Col style={{ marginRight: "20px" }}>
          <Button type="primary" onClick={showModal}>
            Actualizar informacion
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={showMap}>
            Configura tu ubicacion actual
          </Button>
        </Col>
      </Row>

      <Modal
        title="Esta es tu ubicacion actual"
        visible={isMapVisible}
        onOk={handleOkMap}
        onCancel={handleCancelMap}
      >
        <Row style={{ maxHeight: "400px", minHeight: "400px" }}>
          <MapView />
        </Row>
      </Modal>

      <Modal
        title="Actualizar informacion personal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            residence: ["pichincha", "quito"],
          }}
        >
          <Form.Item
            name="nickname"
            label="Usuario"
            tooltip="Nombre de usuario"
            rules={[
              {
                required: true,
                message: "Ingresa tu nombre de usuario!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            tooltip="Cual es tu correo electronico?"
            rules={[
              {
                type: "email",
                message: "El correo electronico no es valido!",
              },
              {
                required: true,
                message: "Por favor ingresa tu correo electronico!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Nombre"
            tooltip="Cual es tu nombre?"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu nombre!",
                whitespace: true,
              },
            ]}
          >
            <Input defaultValue="mysite" />
          </Form.Item>

          <Form.Item
            name="lastname"
            label="Apellido"
            tooltip="Cual es tu apellido?"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu apellido!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Telefono"
            tooltip="Colocar tu numero de telefono o celular"
            rules={[
              {
                required: true,
                message: "Ingresa tu numero de telefono o celular!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="residence"
            label="Ubicacion"
            tooltip="Cual es tu provincia y ciudad de residencia?"
            rules={[
              {
                type: "array",
                required: true,
                message: "Por favor selecciona tu provincia y ciudad!",
              },
            ]}
          >
            <Cascader options={residences} />
          </Form.Item>

          <Form.Item
            name="address"
            label="Direccion"
            tooltip="Cual es tu direccion?"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu direccion!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="date"
            label="Fecha Nac."
            tooltip="Cual es tu fecha de nacimiento?"
            {...config}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="upload"
            label="Foto de perfil"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="photo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Subir foto</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Actualizar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserInfo;
