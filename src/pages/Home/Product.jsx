import {
  faCircleCheck,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { addProduct, removeProduct } from "../../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { get, getDatabase, ref, remove } from "firebase/database";
import { database, app } from "../../firebase";
import { Link } from "react-router-dom";
import CreateProduct from "../Admin/CreateProduct";
import { takeItemData } from "../../store/editItSlice";

function Product() {
  const [prods, setProds] = useState([]);
  const { products } = useSelector((state) => state.basket);
  const { item } = useSelector((state) => state.editIt);
  const dispatch = useDispatch();
  const getData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "products");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setProds(Object.values(snapshot.val()));
    }
  };
  const deleteProd = async (itemId) => {
    const database = getDatabase(app);

    const userRef = ref(database, `products/${itemId}`);

    remove(userRef)
      .then(() => {
        console.log("Item deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  const editProd = async (title, price, description, category, id, image) => {
    await dispatch(
      takeItemData({ title, price, description, category, id, image })
    );
  };
  const toBasket = (id) => {
    if (!products.includes(id)) {
      dispatch(addProduct(id));
    } else {
      dispatch(removeProduct(id));
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return prods.map((product) => {
    return (
      <Card className="cardy" style={{ width: "18rem" }} key={product.id}>
        <div className="image card-img-top">
          <Card.Img variant="top" src={product.image} />
        </div>
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
          <Button variant="danger" onClick={() => deleteProd(product.id)}>
            Del: {product.id}
          </Button>
          <Link to="/admin" element={<CreateProduct />}>
            <Button
              variant="warning"
              onClick={() =>
                editProd(
                  product.title,
                  product.price,
                  product.description,
                  product.category,
                  product.id,
                  product.image
                )
              }
            >
              Edit
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  });
}

export default Product;
