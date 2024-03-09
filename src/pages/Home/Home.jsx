import React from "react";
import Cards from "./Cards";
import Categories from "./Categories";

export default function Home() {
  return (
    <div>
      <div className="main-con">
        <Categories />
        <Cards />
      </div>
    </div>
  );
}
