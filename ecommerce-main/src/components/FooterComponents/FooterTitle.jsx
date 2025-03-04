import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FooterTitle = () => {
  const history = useHistory();

  const navigateToLogo = () => history.push("/");

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#252B42] md:text-3xl">
        <span onClick={navigateToLogo} style={{ cursor: "pointer" }}>
          Bandage
        </span>
      </h1>
    </div>
  );
};

export default FooterTitle;
