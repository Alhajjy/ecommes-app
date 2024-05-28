import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/userSlice";
import { app } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { generateUniqueId } from "../../assets/layout/generateId";
import { Link } from "react-router-dom";

const Register = () => {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState({ ...user, id: generateUniqueId() });
  const dispatch = useDispatch();
  const handleAuth = async () => {
    const db = getDatabase(app);
    dispatch(addUser(data));
    const newDocRef = ref(db, `/users/${data.id}`);
    await set(newDocRef, {
      ...data,
      lastLogging: `${new Date()}`,
    });
    console.log(`Registred: ${data.username}`);
    if (document.querySelector(".form-check-input").checked) {
      localStorage.setItem("token", data.id);
    } else {
      sessionStorage.setItem("token", data.id);
    }
    window.location.reload();
  };
  useEffect(() => {
    console.log(data);
    console.log(new Date());
  }, [data]);
  return (
    <div className="main-con">
      <Link to="/">
        <button style={{ position: "absolute", top: "100px", right: "30px" }}>
          Login
        </button>
      </Link>
      <Form>
        <input
          className="mb-3"
          type="email"
          placeholder="Email (won`t share with others)"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          className="mb-3"
          placeholder="Enter unique username"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <input
          className="mb-3"
          type="password"
          placeholder="Strong password(or else ylbe hckd^_^)"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <textarea
          className="mb-3"
          placeholder="Info about you (will appear in profile)"
          onChange={(e) => {
            setData({ ...data, about: e.target.value });
          }}
        />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me logged in" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleAuth();
          }}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Register;
