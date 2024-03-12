import {
  faCircleCheck,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { addProduct, removeProduct } from "../../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const [prods, setProds] = useState([]);
  const { products } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProds(res.data))
    .catch((err) => console.log(err));
  const toBasket = (id) => {
    if (!products.includes(id)) {
      dispatch(addProduct(id));
    } else {
      dispatch(removeProduct(id));
    }
  };
  return prods.map((product) => {
    return (
      <Card style={{ width: "18rem" }} key={product.id}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            onClick={() => {
              toBasket(product.id);
            }}
            variant={!products.includes(product.id) ? "primary" : "secondry"}
          >
            <b className="price">{product.price}$ </b>

            {!products.includes(product.id) ? (
              <FontAwesomeIcon icon={faShoppingBasket} />
            ) : (
              <FontAwesomeIcon icon={faCircleCheck} />
            )}
          </Button>
        </Card.Body>
      </Card>
    );
  });
}

export default Product;
