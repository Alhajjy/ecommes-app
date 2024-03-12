import React, { useEffect, useState } from "react";
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
  const toBasket = (id) => {
    if (!products.includes(id)) {
      dispatch(addProduct(id));
    } else {
      dispatch(removeProduct(id));
    }
  };
  const haha = async () => {
    await getBasketProducts(`https://fakestoreapi.com/products`, setPros);
  };
  useEffect(() => {
    haha();
  }, [products]);
  if (products.length > 0) {
    return pros.map((product) => {
      if (products.includes(product.id)) {
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
                variant={
                  !products.includes(product.id) ? "primary" : "secondry"
                }
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
      }
    });
  } else {
    return <h1>Your Basket Is Empty Now..</h1>;
  }
}

export default BProds;
