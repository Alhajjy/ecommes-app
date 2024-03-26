import React, { useState } from "react";
import BootstrapToasts from "../../components/bootstrap-toasts";

const About = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="about">
      <div className="main-con">
        {isTrue ? (
          <BootstrapToasts toastCase="create" />
        ) : (
          <BootstrapToasts toastCase="create" display="none" />
        )}
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p
          onClick={() => {
            setTimeout(() => {
              setIsTrue(!isTrue);
            }, 5);
            setIsTrue(!isTrue);
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
