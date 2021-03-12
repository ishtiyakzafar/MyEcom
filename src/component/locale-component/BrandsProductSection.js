import React, { useRef } from "react";
import { Row, Col, Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import brand1 from "../../assets/images/home-page/brand1.JPG";
import brand2 from "../../assets/images/home-page/brand2.JPG";
import BrandCard from "./BrandCard";

const BrandsProductSection = () => {
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
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      image: brand1,
      title: "Manyta Store",
    },
    {
      id: 2,
      image: brand2,
      title: "Jayshree Store",
    },
    {
      id: 3,
      image: brand1,
      title: "Rama Store",
    },
    {
      id: 4,
      image: brand2,
      title: "Jayshree Store",
    },
    {
      id: 5,
      image: brand1,
      title: "Jayshree Store",
    },
  ];
  return (
    <div className="productBrand">
      <div className="hrading">
        <h1>Shopping Brands Product</h1>
        <div className="headingLine">
          <hr />
        </div>
      </div>
      <Row className="container">
        <Col span={2} className="btnBx">
          {data.length < 4 ? (
            ""
          ) : (
            <div className="prevBtn" onClick={handlePrev}>
              <LeftOutlined />
            </div>
          )}
        </Col>
        <Col span={20}>
          {data.length < 4 ? (
            <Row>
              {data.map((data) => (
                <Row>
                  <Col span={24}>
                    <BrandCard key={data.id} data={data} />
                  </Col>
                </Row>
              ))}
            </Row>
          ) : (
            <Carousel {...settings} ref={carouselRef}>
              {data.map((data) => (
                <Row key={data.id}>
                  <Col span={24} className="slider">
                    <BrandCard data={data} />
                  </Col>
                </Row>
              ))}
            </Carousel>
          )}
        </Col>
        <Col span={2} className="btnBx">
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

export default BrandsProductSection;
