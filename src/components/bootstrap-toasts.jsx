import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleToast, togglIt } from "../store/toastSlice";

const BootstrapToasts = ({ toastCase }) => {
  const { toast, toggle } = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const [style] = useState({
    toast: {},
    header: {},
  });
  const conftoastStyle = () => {
    dispatch(handleToast(toastCase));
    switch (toastCase) {
      case "create":
        style.toast = {
          ...style.toast,
          background: `${toast.background}`,
          animation: `${toggle ? "hideme 4s linear 0s 1 alternate" : "none"}`,
          display: `${!toggle ? "inline" : "hidden"}`,
        };
        style.header = { background: "black", color: "white" };
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    conftoastStyle();
    console.log(toggle);
  }, [toggle]);
  // useEffect(() => {
  //   setTg(toggle);
  // }, [toggle]);
  return (
    <div>
      <Toast
        onAnimationEnd={() => {
          console.log(toggle);
          dispatch(togglIt());
        }}
        style={{
          ...style.toast,
          position: "absolute",
          right: "20px",
          zIndex: "9",
          color: "white",
          top: "200px",
        }}
      >
        <Toast.Header style={{ ...style.header }}>
          <strong className="me-auto">{toast.title}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{toast.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default BootstrapToasts;
