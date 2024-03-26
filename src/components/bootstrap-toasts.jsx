import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleToast } from "../store/toastSlice";

const BootstrapToasts = ({ toastCase }) => {
  const { toast } = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const [style] = useState({
    toast: { position: "absolute", top: "25px", right: "20px", zIndex: "9" },
    header: {},
  });
  const conftoastStyle = () => {
    dispatch(handleToast(toastCase));
    switch (toastCase) {
      case "create":
        style.toast = {
          ...style.toast,
          background: `${toast.background}`,
          color: "white",
          // animation: "hideme 5s ease-in-out 0s infinite alternate",
          overflow: "hidden",
        };
        style.header = { background: "black", color: "white" };
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    conftoastStyle();
  }, []);
  return (
    <Toast style={{ ...style.toast }}>
      <Toast.Header style={{ ...style.header }}>
        <strong className="me-auto">{toast.title}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>{toast.message}</Toast.Body>
    </Toast>
  );
};

export default BootstrapToasts;
