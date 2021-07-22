import React from "react";
import { Layout, Menu } from "antd";
import MainMenu from "./MainMenu";
import "../styles/layout.css";
import MainSiderMenu from "./MainSiderMenu";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <MainMenu />
      </Header>
      <Layout>
        {/* {(window.location.pathname==="/search")?<MainSiderMenu/>:""} */}

        <Layout>
          <Content>
            <div className="site-layout-content">{children}</div>
          </Content>
        </Layout>
      </Layout>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default MainLayout;
