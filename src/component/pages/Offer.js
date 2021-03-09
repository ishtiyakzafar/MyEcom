import React from "react";
import { Col, Row } from "antd";
import ProductFilter from "../global-component/ProductFilter";
import ProductCard from "../global-component/ProductCard";
import Banner from "../global-component/Banner";
import img1 from "../../assets/images/offer/img1.JPG";
import img2 from "../../assets/images/offer/img2.JPG";
import img3 from "../../assets/images/offer/img3.JPG";
import img4 from "../../assets/images/offer/img4.JPG";
import img5 from "../../assets/images/offer/img5.JPG";
import img6 from "../../assets/images/offer/img6.JPG";
import img7 from "../../assets/images/offer/img7.JPG";
import img8 from "../../assets/images/offer/img8.JPG";
import img9 from "../../assets/images/offer/img9.JPG";
import img10 from "../../assets/images/offer/img10.JPG";
import img11 from "../../assets/images/offer/img11.JPG";
import img12 from "../../assets/images/offer/img12.JPG";

const Offer = () => {
  const data = [
    {
      id: 1,
      image: img1,
      brand: "DILLINGER",
      title: "Solid Round Neck T-shirt",
      price: 569,
      discount: 55,
    },
    {
      id: 2,
      image: img2,
      brand: "DILLINGER",
      title: "Solid Round Neck T-shirt",
      price: 569,
      discount: 55,
    },
    {
      id: 3,
      image: img3,
      brand: "DILLINGER",
      title: "Solid Round Neck T-shirt",
      price: 569,
      discount: 55,
    },
    {
      id: 4,
      image: img4,
      brand: "DILLINGER",
      title: "Striped Round Neck T-shirt",
      price: 220,
      discount: 10,
    },
    {
      id: 5,
      image: img5,
      brand: "Roadster",
      title: "Solid Round Neck T-shirt",
      price: 499,
      discount: 70,
    },
    {
      id: 6,
      image: img6,
      brand: "Louis Philippe Sport",
      title: "Solid Polo Collar T-shirt",
      price: 620,
      discount: 0,
    },
    {
      id: 7,
      image: img7,
      brand: "H&M",
      title: "Men Beige Cotton T-shirt",
      price: 1620,
      discount: 65,
    },
    {
      id: 8,
      image: img8,
      brand: "Moda Rapido",
      title: "Round Neck T-shirt",
      price: 649,
      discount: 45,
    },
    {
      id: 9,
      image: img9,
      brand: "DILLINGER",
      title: "Solid Round Neck T-shirt",
      price: 569,
      discount: 55,
    },
    {
      id: 10,
      image: img10,
      brand: "DILLINGER",
      title: "Striped Round Neck T-shirt",
      price: 220,
      discount: 10,
    },
    {
      id: 11,
      image: img11,
      brand: "DILLINGER",
      title: "Solid Round Neck T-shirt",
      price: 569,
      discount: 55,
    },
    {
      id: 12,
      image: img12,
      brand: "DILLINGER",
      title: "Striped Round Neck T-shirt",
      price: 220,
      discount: 10,
    },
  ];
  return (
    <>
      <Banner bannerHeading="Offer" />
      <Row>
        <Col xs={0} sm={0} md={0} lg={6} xl={5}>
          <ProductFilter />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={19} className="mensSection">
          <h1>Total {data.length} Products</h1>
          <div className="wrapProductCard">
            {data.map((data) => (
              <div style={{ margin: "23px 10px 10px 10px" }} key={data.id}>
                <ProductCard data={data} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Offer;
