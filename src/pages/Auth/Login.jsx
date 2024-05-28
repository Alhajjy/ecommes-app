import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { app } from "../../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({});
  const handleLogin = async () => {
    const db = getDatabase(app);
    const userRef = ref(db, "users");
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const user = snapshot.val();
      await Object.keys(user).forEach(function (key, index) {
        if (
          !data.email === user[key].email ||
          !data.password === user[key].password
        ) {
          alert("Username or password wrong, Try again!");
        } else {
          user[key] = [user[key].id, user[key].email, user[key].password];
          console.log(user[key]);
          sessionStorage.setItem("token", "loggedIn");
          window.location.reload();
        }
      });
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="main-con">
      <Link to="/register">
        <button style={{ position: "absolute", top: "100px", right: "30px" }}>
          Register
        </button>
      </Link>
      <Form>
        <input
          className="mb-3"
          placeholder="Email or Username"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          className="mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="gafa"
            type="checkbox"
            label="Keep me logged in"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Login
        </Button>
      </Form>
      <Button
        onClick={() => {
          // sessionStorage.removeItem("token");
          // localStorage.removeItem("token");
          // window.location.reload();

          console.log(document.querySelector(".gafa").value);
        }}
        variant="primary"
      >
        Loug OUt
      </Button>
    </div>
  );
};

export default Login;
