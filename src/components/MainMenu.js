import React, { useEffect, useState } from "react";
import { Menu, Button, Modal, Row, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../lib/auth";

const { SubMenu } = Menu;

const MainMenu = () => {
  const { user, logout } = useAuth();
  const [modalLoginUser, setModalLoginUser] = useState(false);
  const [modalRegisterUser, setModalRegisterUser] = useState(false);

  useEffect(() => {
    setModalLoginUser(false);
    setModalRegisterUser(false);
    //console.log("User",user.uid);
    // return () => {
    //   cleanup
    // }
  }, [user]);

  const showModalLogin = () => {
    setModalLoginUser(true);
  };

  const handleLoginOk = () => {
    setModalLoginUser(false);
  };

  const handleLoginCancel = () => {
    setModalLoginUser(false);
  };

  const showModalRegister = () => {
    setModalRegisterUser(true);
  };

  const handleRegisterOk = () => {
    setModalRegisterUser(false);
  };

  const handleRegisterCancel = () => {
    setModalRegisterUser(false);
  };

  if (user === null) {
    return "Verificando sesión...";
  }

  return (
    <Row justify="space-between">
      <Col>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={Routes.HOME}>INICIO</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to={Routes.SEARCH}>BUSCAR</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to={Routes.ABOUT}>NOSOTROS</Link>
          </Menu.Item>

          {user === null ? (
            ""
          ) : user === false ? (
            <Menu.Item key="4">
              <Link to={Routes.TERMCOND}>TERMINOS Y CONDICIONES</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="4">
              <Link to={Routes.USERS}>PERFIL</Link>
            </Menu.Item>
          )}
        </Menu>
      </Col>
      <Col>
        {user === null ? (
          <Spin />
        ) : user === false ? (
          <>
            <Button
              style={{ marginRight: "20px" }}
              type="primary"
              onClick={showModalLogin}
            >
              INICIAR SESION
            </Button>
            <Button type="primary" onClick={showModalRegister}>
              REGISTRARSE
            </Button>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <SubMenu key="subuser" title={user.email}>
              <Menu.ItemGroup key="g1" title="Tu cuenta">
                <Menu.Item key="20" icon={<LogoutOutlined />}>
                  <Button
                    type="link"
                    style={{ color: "#ffffff" }}
                    onClick={logout}
                  >
                    Salir
                  </Button>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        )}
      </Col>
      <Modal
        title="Iniciar sesion"
        visible={modalLoginUser}
        onOk={handleLoginOk}
        onCancel={handleLoginCancel}
        footer={
          [
            // <Button key="back" >
            //   Return
            // </Button>,
            // <Button key="submit" type="primary">
            //   Submit
            // </Button>
          ]
        }
      >
        <Login />
      </Modal>

      <Modal
        title="Registrar usuario"
        visible={modalRegisterUser}
        onOk={handleRegisterOk}
        onCancel={handleRegisterCancel}
        footer={
          [
            // <Button key="back" >
            //   Return
            // </Button>,
            // <Button key="submit" type="primary">
            //   Submit
            // </Button>
          ]
        }
      >
        <RegisterUser />
      </Modal>
    </Row>
  );
};

export default MainMenu;
