import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import { getDatabase, ref, set, update } from "firebase/database";
import { generateUniqueId } from "../../assets/layout/generateId";
import { useSelector } from "react-redux";
import { emptyItemData } from "../../store/editItSlice";

const CreateProduct = () => {
  const { item } = useSelector((state) => state.editIt);
  let [data, setData] = useState(item);
  const handleCreateOrEdit = async () => {
    if (
      !data.title ||
      !data.price ||
      !data.description ||
      !data.category ||
      !data.image
    ) {
      alert("Fill In The All Blanks Please!");
    } else {
      const db = getDatabase(app);
      if (!item.id) {
        let key = generateUniqueId();
        const newDocRef = ref(db, `products/${key}`);
        await set(newDocRef, {
          ...data,
          id: key,
        })
          .then(alert("created"))
          .catch((err) => console.log(err));
        emptyItemData();
      } else {
        const newDocRef = ref(db, `products/${item.id}`);
        await update(newDocRef, {
          ...data,
          id: item.id,
        })
          .then(alert("updated"))
          .catch((err) => console.log(err));
        emptyItemData();
        window.location.reload();
      }
    }
  };
  useEffect(() => {
    if (!item.image) {
      setData({ ...data, image: "https://random.imagecdn.app/620/500" });
    }
  }, []);
  return (
    <div>
      <h3>{!data.id ? "Create New" : "Edit"} Product:</h3>
      <form>
        <div>
          <label for="title">Product`s Title:</label>
          <input
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        </div>
        <div>
          <label for="price">Product`s Price:</label>
          <input
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            type="number"
          />
        </div>
        <div>
          <label for="description">Product`s description:</label>
          <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label for="category">Category:</label>
          <input
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          />
        </div>
        <div>
          <label for="image">Image link:</label>
          <input
            value={data.image}
            onChange={(e) =>
              setData({
                ...data,
                image: e.target.value,
              })
            }
          />
        </div>
        <input
          type="submit"
          value="Publish"
          onClick={(e) => {
            e.preventDefault();
            handleCreateOrEdit();
          }}
        />
      </form>
    </div>
  );
};
export default CreateProduct;
