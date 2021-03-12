import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import banner from "../../assets/images/home-page/banner.JPG";

const Banner = ({ bannerHeading }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${banner})`,
        width: "100%",
        height: "50vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="innerBannerContent">
        <h1>{bannerHeading}</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/" style={{ fontSize: "25px", color: "#fff" }}>
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item style={{ fontSize: "25px", color: "#fff" }}>
            {bannerHeading}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Banner;
