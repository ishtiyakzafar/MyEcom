import React from "react";
import { Checkbox } from "antd";

const ProductFilter = ({ handleOnChange }) => {
  return (
    <>
      <div className="fiterText">
        <h1>FILTERS</h1>
      </div>
      <div className="productFilter">
        <div className="filterMenu">
          <h3>Categories</h3>
          <Checkbox onChange={handleOnChange} name="Green Print Saree">
            Green Print Saree
          </Checkbox>
          <br />
          <Checkbox onChange={handleOnChange} name="Churidar Kameez">
            Churidar Kameez
          </Checkbox>
          <br />
          <Checkbox onChange={handleOnChange} name="Traditional Saree">
            Traditional Saree
          </Checkbox>
        </div>
        <div className="filterMenu">
          <h3>Brands</h3>
          <Checkbox onChange={handleOnChange}>Mayanto Store (150)</Checkbox>
          <br />
          <Checkbox onChange={handleOnChange}>Rama Store (190)</Checkbox>
          <br />
          <Checkbox onChange={handleOnChange}>Jayshree Store (180)</Checkbox>
        </div>
        <div className="filterMenu">
          <h3>Price Range</h3>
          <Checkbox onChange={handleOnChange} name="300.00">
            Rs. 300.00-700.00
          </Checkbox>
          <br />
          <Checkbox onChange={handleOnChange}>Rs. 700.00-1500.00</Checkbox>
          <br />
          <Checkbox onChange={handleOnChange}>Rs. 1500.00-2500.00</Checkbox>
        </div>
        <div className="filterMenu">
          <h3>Color</h3>
          <Checkbox onChange={handleOnChange} name="green">
            Green
          </Checkbox>
          <br />
          <Checkbox onChange={handleOnChange} name="blue">
            Blue
          </Checkbox>
          <br />
          <Checkbox onChange={handleOnChange} name="red">
            Red
          </Checkbox>
        </div>
        <div className="filterMenu">
          <h3>Discount Rates</h3>
          <Checkbox onChange={handleOnChange}>10%-25%</Checkbox>
          <br />
          <Checkbox onChange={handleOnChange}>25%-50%</Checkbox>
          <br />
          <Checkbox onChange={handleOnChange}>50%-75%</Checkbox>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
