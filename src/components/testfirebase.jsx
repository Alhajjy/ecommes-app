import React, { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database";
const Testfirebase = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const savedata = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "root/vegetables"));
    set(newDocRef, {
      fruitName: val1,
      fruitDefinition: val2,
    })
      .then(() => {
        alert("data saved");
      })
      .catch((err) => {
        alert("error:", err.message);
      });
  };
  return (
    <div>
      Testfirebase
      <input onChange={(e) => setVal1(e.target.value)}></input>
      <input onChange={(e) => setVal2(e.target.value)}></input>
      <button onClick={savedata}>save data</button>
    </div>
  );
};

export default Testfirebase;
