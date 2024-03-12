import React, { useEffect, useState } from "react";
import { createProduct } from "../../assets/api/api";

const CreateProduct = () => {
  // let [data, setData] = useState({});
  // window.on(
  //   setData([
  //     document.getElementById("title").value,
  //     document.getElementById("price").value,
  //     document.getElementById("description").value,
  //     document.getElementById("categoryId").value,
  //     "https://picsum.photos/200/230",
  //   ])
  // );
  // const publish = () => {
  //   setData({
  //     title: document.getElementById("title").value,
  //     price: document.getElementById("price").value,
  //     description: document.getElementById("description").value,
  //     categoryId: document.getElementById("categoryId").value,
  //     images: ["https://picsum.photos/200/230"],
  //   });
  //   createProduct("https://api.escuelajs.co/api/v1/products/", data);
  // };
  // useEffect(() => {
  //   setData({
  //     title: document.getElementById("title").value,
  //     price: document.getElementById("price").value,
  //     description: document.getElementById("description").value,
  //     categoryId: document.getElementById("categoryId").value,
  //     images: "https://picsum.photos/200/230",
  //   });
  // }, [
  //   document.getElementById("title").value,
  //   document.getElementById("price").value,
  //   document.getElementById("description").value,
  //   document.getElementById("categoryId").value,
  // ]);
  // console.log(document.getElementById("price").value);
  return (
    <div>
      <h3>Create New Product:</h3>
      <form
        id="myform"
        action="https://fakestoreapi.com/products"
        method="post"
      >
        <div>
          <label for="title">Product`s Title:</label>
          <input id="title" name="title" value="hererererheheh" />
        </div>
        <div>
          <label for="price">Product`s Price:</label>
          <input name="price" id="price" value="11" type="number" />
        </div>
        <div>
          <label for="description">Product`s description:</label>
          <textarea
            id="description"
            name="description"
            value="heheheh"
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label for="category">Category Id:</label>
          <input id="category" name="category" value="electronic" type="text" />
        </div>
        <div>
          <label for="image">images:</label>
          <input
            id="image"
            name="image"
            type="url"
            value="https://picsum.photos/200/230"
          />
        </div>
        <input type="submit" value="Publish" />
      </form>
    </div>
  );
};
export default CreateProduct;
