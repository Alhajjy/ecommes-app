import React from "react";
import BProds from "./BProds";

function Details() {
  return (
    <>
      <div className="main-con">
        <div className="pro-details products">
          {" "}
          <BProds />
        </div>
        <div className="payment">Payment</div>
      </div>
    </>
  );
}

export default Details;
