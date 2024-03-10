import axios from "axios";
// GET
export const getBasketProducts = (link, setData) => {
  axios
    .get(link)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};
