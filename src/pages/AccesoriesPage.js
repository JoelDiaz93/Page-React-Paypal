import React from "react";
import {
    Form,
    Select,
    Input,
    InputNumber,
    Button,
    Upload,
    Switch,
    Typography,
    Row,
    Col,
    message,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { auth, db, storage } from "../fb";
import { useAuth } from "../lib/auth";
import withAuth from "../hocs/withAuth";

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const AccesoriesPage = () => {
    const { user } = useAuth();
    const { Title } = Typography;

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        try {
            const { uid } = user;

            let photo = null;
            if (values.photo) {
                photo = values.photo[0].originFileObj;
            }

            const { accesoryname, brand, description } = values;
            var postListPet = db.ref("accesory");
            var newPostPet = postListPet.push();
            let postId = newPostPet.getKey();
            const snapshot = await storage.ref(`accesory/${postId}`).put(photo);
            const photoURL = await snapshot.ref.getDownloadURL();
            newPostPet.set({
                uid,
                accesoryname,
                brand,
                description,
                photoURL,
            });
            await db.ref(`users/${uid}/accesory/${postId}`).set({
                postId,
            });

            message.success("Accesorio publicada");
        } catch (error) {
            console.log("error", error);
            const errorCode = error.code;
            // message.error(translateMessage(errorCode));
            throw error;
        }
    };

    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
            number: "${label} is not a valid number!",
        },
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };

    return (
        <>
            <Row justify="center" style={{ marginTop: "30px" }}>
                <Col>
                    <Title level={2}>Ingresa los datos del accesorio</Title>
                </Col>
            </Row>

            <Form
                name="validate_other"
                {...layout}
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name="accesoryname"
                    label="Nombre"
                    tooltip="Nombre del accesorio"
                    rules={[
                        {
                            required: true,
                            message: "Ingresa el nombre del accesorio!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Descripcion"
                    tooltip="Describe el accesorio"
                    rules={[
                        {
                            required: true,
                            message: "Ingresa la descripcion del accesorio!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="brand"
                    label="Marca"
                    tooltip="Marca del accesorio"
                    rules={[
                        {
                            required: true,
                            message: "Ingresa la marca del accesorio!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="photo"
                    label="Foto"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Selecciona un archivo .jpg"
                >
                    <Upload name="logo" action={null} listType="picture">
                        <Button icon={<UploadOutlined />}>Subir foto</Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Publicar
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default withAuth(AccesoriesPage);
