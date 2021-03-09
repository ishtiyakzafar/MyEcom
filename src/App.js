import React from "react";
import "antd/dist/antd.css";
import Home from "./component/pages/Home";
import WebPanels from "./component/panels/WebPanels";
import Header from "./component/global-component/Header";
import { Layout } from "antd";
import AppFooter from "./component/global-component/AppFooter";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <div>
      <Header />
      <Layout style={{ background: "#fff" }}>
        <Content>
          <WebPanels />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
