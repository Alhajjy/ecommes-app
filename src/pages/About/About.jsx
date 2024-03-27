import React from "react";
import BootstrapToasts from "../../components/bootstrap-toasts";
import { useDispatch } from "react-redux";
import { togglIt } from "../../store/toastSlice";

const About = () => {
  const dispatch = useDispatch();
  return (
    <div className="about">
      <div className="main-con">
        <BootstrapToasts toastCase="create" />
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p
          onClick={() => {
            dispatch(togglIt());
          }}
        >
          hiodhfdofd
        </p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default About;
