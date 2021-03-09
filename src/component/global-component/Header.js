import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import {
  ShoppingOutlined,
  HeartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Menulist from "./Menulist";
const { Search } = Input;

const Header = () => {
  const [check, setCheck] = useState(true);

  const onSearch = (value) => console.log(value);

  const handleClick = () => {
    if (check === true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  return (
    <>
      <Row className="styleHeader">
        <Col xs={12} sm={12} md={12} lg={8} xl={4}>
          <div className="logo">
            <h1>ZapEcom</h1>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={10}>
          <div className="headerMenu ">
            <Menulist />
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={7}>
          <div className="searchBar">
            <Search
              placeholder="Search products..."
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8} xl={3}>
          <div className="headerIcon">
            <UserOutlined />
            <HeartOutlined style={{ padding: "0 20px" }} />
            <ShoppingOutlined />
            <MenuOutlined onClick={handleClick} className="hamburgerIcon" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={0} xl={0} className="searchBx">
          <div className="searchBar">
            <Search
              placeholder="Search products..."
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </div>
        </Col>
      </Row>

      <Row className={check ? "sidemenubar" : "sidemenubar actv"}>
        <Col xs={24} sm={24} md={24} lg={24} xl={0}>
          <div className="hambMenu">
            <CloseOutlined onClick={handleClick} className="closeSideBar" />
            <Menulist handleClick={handleClick} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
