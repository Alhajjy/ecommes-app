import axios from "axios";
// GET
export const getBasketProducts = (link, setData) => {
  axios
    .get(link)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};
// POST
export const createProduct = (
  link,
  [title, price, description, categoryId, images]
) => {
  axios
    .post(link, {
      title,
      price,
      description,
      categoryId,
      images,
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
