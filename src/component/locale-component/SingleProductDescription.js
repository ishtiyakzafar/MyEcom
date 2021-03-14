import React from "react";

const SingleProductDescription = () => {
  return (
    <div className="description">
      <div className="prodDetail">
        <p>
          Product description, along with any other tab can be displayed as
          tabs, accordion or all-visible blocks in grid format or one under the
          other. You can mix and match tabs and blocks in any order and any
          position. Each tab can also be set up as a link and point to other
          pages or open popup modules. Optional "Show More" collapsible block
          content is also available as an option for large and tall descriptions
          or custom content.
        </p>
      </div>
      <ul className="stock">
        <li>
          Stock Status:{" "}
          <span style={{ color: "#03a685", fontWeight: "600" }}>IN STOCK</span>
        </li>
        <li>Manufacturer: SuperBrand</li>
        <li>Model: Model 85</li>
      </ul>
      <p>Based on 0 reviews. - Write a review</p>
      <div className="price">
        <p>
          Rs. 525 <del>Rs. 525</del>
          <span> (50% OFF)</span>
        </p>
        <h6>inclusive of all taxes</h6>
      </div>
      <div className="size">
        <h1>SELECT SIZE</h1>
        <div className="sizeCircle">
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
          <p>XXL</p>
        </div>
      </div>
      <div className="singleProBtn">
        <button className="addBtn">ADD TO CART</button>
        <button className="wishBtn">WISHLIST</button>
      </div>

      <div className="deliveryOpt">
        <h1>DELIVERY OPTIONS</h1>
        <input type="text" placeholder="Enter PIN code" autoComplete="off" />
        <h6>
          Please enter PIN code to check delivery time & Pay on Delivery
          Availability
        </h6>
        <p>
          100% Original Products <br />
          Free Delivery on order above Rs. 799 <br />
          Easy 30 days returns and exchanges
        </p>
      </div>
    </div>
  );
};

export default SingleProductDescription;
