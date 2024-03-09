import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faCircleCheck,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import { addProduct, removeProduct } from "../../store/basketSlice";
import { getBasketProducts } from "../../assets/api/api";
function BProds() {
  const { products } = useSelector((state) => state.basket);
  const [pros, setPros] = useState([]);
  const dispatch = useDispatch();
  getBasketProducts(setPros);
  const toBasket = (id) => {
    if (!products.includes(id)) {
      dispatch(addProduct(id));
    } else {
      dispatch(removeProduct(id));
    }
  };
  return pros.map((product) => {
    return (
      <Card style={{ width: "18rem" }} key={product.id}>
        <Card.Img variant="top" src={product.images[0]} />
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

export default BProds;
