import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Checkbox,
  Cascader,
  Button,
  message,
  DatePicker,
  Upload,
} from "antd";
import { useAuth } from "../lib/auth";
import translateMessage from "../utils/translateMessage";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

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

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const [form] = Form.useForm();

  const normFile = (e) => {
    console.log("Upload event:", e.fileList[0]);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onFinish = async (values) => {
    const year = values.date.format("YYYY");
    const month = values.date.format("MM");
    const day = values.date.format("DD");
    values.date = [year, month, day];
    console.log("Received values of form: ", values);
    setLoading(true);
    try {
      console.log("FORM data", values);
      console.log("photo form", values.photo);
      let photo = null;
      if (values.photo) {
        photo = values.photo[0].originFileObj;
      }
      await register({ ...values, photo });

      setLoading(false);
    } catch (error) {
      const errorCode = error.code;
      message.error(translateMessage(errorCode));
      setLoading(false);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="validate_other"
      onFinish={onFinish}
      initialValues={{
        residence: ["Pichincha", "Quito"],
      }}
      scrollToFirstError
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
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar contraseña"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
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
        name="photo"
        label="Foto"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Selecciona un archivo .jpg"
      >
        <Upload name="logo" action={null} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Acepto los <a href="/termsconditions">terminos y condiciones</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}></Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterUser;
