import React, { useRef } from "react";
import { Row, Col, Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import ProductCard from "../global-component/ProductCard";
import new1 from "../../assets/images/home-page/new1.JPG";
import new2 from "../../assets/images/home-page/new2.JPG";
import new3 from "../../assets/images/home-page/new3.JPG";
import new4 from "../../assets/images/home-page/new4.JPG";
import new5 from "../../assets/images/home-page/new5.JPG";
import BrandCard from "./BrandCard";

const NewArrivalsSection = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.next();
  };
  const handleNext = () => {
    carouselRef.current.prev();
  };
  let settings = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      image: new1,
      title: "Green Print Saree",
      price: "3200",
      brand: "DILLINGER",
    },
    {
      id: 2,
      image: new2,
      title: "Churidar Kameez",
      price: "1620",
      brand: "DILLINGER",
      discount: 55,
    },
    {
      id: 3,
      image: new3,
      title: "Traditional  Saree",
      price: "4520",
      brand: "DILLINGER",
      discount: 55,
    },
    {
      id: 4,
      image: new4,
      title: "Churidar Kameez",
      price: "9620",
      brand: "DILLINGER",
      discount: 55,
    },
    {
      id: 5,
      image: new5,
      title: "Churidar Kameez",
      price: "5620",
      brand: "DILLINGER",
      discount: 55,
    },
  ];

  return (
    <div className="newArrival ">
      <div className="hrading">
        <h1>New Arrivals</h1>
        <div className="headingLine">
          <hr />
        </div>
      </div>
      <Row className="container">
        <Col xs={2} sm={2} md={1} lg={1} xl={1} className="btnBx">
          {data.length < 4 ? (
            ""
          ) : (
            <div className="prevBtn" onClick={handlePrev}>
              <LeftOutlined />
            </div>
          )}
        </Col>
        <Col xs={20} sm={20} md={22} lg={22} xl={22}>
          {data.length < 4 ? (
            <Row>
              {data.map((data) => (
                <Row>
                  <Col span={24}>
                    <ProductCard key={data.id} data={data} />
                  </Col>
                </Row>
              ))}
            </Row>
          ) : (
            <Carousel {...settings} ref={carouselRef}>
              {data.map((data) => (
                <Row key={data.id}>
                  <Col span={24} className="slider">
                    <ProductCard data={data} />
                  </Col>
                </Row>
              ))}
            </Carousel>
          )}
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} className="btnBx">
          {data.length < 4 ? (
            ""
          ) : (
            <div className="nextBtn" onClick={handleNext}>
              <RightOutlined />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NewArrivalsSection;
