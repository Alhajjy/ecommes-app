import axios from "axios";
// GET
export const getBasketProducts = (setData) => {
  axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};
