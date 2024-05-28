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
        <p
          onClick={() => {
            dispatch(togglIt());
            setMsg("create");
          }}
        >
          create
        </p>
        <p
          onClick={() => {
            dispatch(togglIt());
            setMsg("update");
          }}
        >
          edit
        </p>
        <p
          onClick={() => {
            dispatch(togglIt());
            setMsg("delete");
          }}
        >
          delete
        </p>
      </div>
    </div>
  );
};

export default About;
