import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleToast } from "../store/toastSlice";

const BootstrapToasts = ({ toastCase }) => {
  const { toast, toggle } = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const [style] = useState({
    toast: { background: `${toast.background}` },
    header: {
      background:
        "linear-gradient(90deg, rgba(25,135,84,1) 0%, rgba(0,4,98,1) 50%, rgba(238,0,0,1) 100%)",
      color: "white",
      height: "35px",
    },
  });
  const confToastStyle = () => {
    switch (toastCase) {
      case "create":
        style.toast = {
          ...style.toast,
          background: `${toast.background}`,
          // animation: `${toggle ? "hideme 4s linear 0s 1 alternate" : "none"}`,
        };
        break;
      case "update":
        style.toast = {
          ...style.toast,
          background: `${toast.background}`,
          // animation: `${toggle ? "hideme 4s linear 0s 1 alternate" : "none"}`,
        };
        break;
      case "delete":
        style.toast = {
          ...style.toast,
          background: `${toast.background}`,
          // animation: `${toggle ? "hideme 4s linear 0s 1 alternate" : "none"}`,
        };
        break;
      default:
        break;
    }
    dispatch(handleToast(toastCase));
    console.log(toast.title, toast.background);
  };
  useEffect(() => {
    confToastStyle();
    console.log(toggle);
  }, [toggle]);
  return (
    <div>
      <Toast
        // onAnimationEnd={() => {
        //   console.log(toggle);
        //   dispatch(togglIt());
        // }}
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
          {/* <small
            className="btn"
            style={{
              background: "#5c636a",
              fontWeight: "bold",
              padding: "0px 6px",
            }}
            onClick={() => togglIt()}
          >
            x
          </small> */}
        </Toast.Header>
        <Toast.Body>{toast.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default BootstrapToasts;
