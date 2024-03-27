import React, { useState } from "react";
import BootstrapToasts from "../../components/bootstrap-toasts";
import { useDispatch } from "react-redux";
import { togglIt } from "../../store/toastSlice";

const About = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="about">
      <div className="main-con">
        <BootstrapToasts toastCase={msg} />
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p
          onClick={() => {
            setMsg("create");
            dispatch(togglIt());
          }}
        >
          create
        </p>
        <p
          onClick={() => {
            setMsg("update");
            dispatch(togglIt());
          }}
        >
          edit
        </p>
        <p
          onClick={() => {
            setMsg("delete");
            dispatch(togglIt());
          }}
        >
          delete
        </p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default About;
