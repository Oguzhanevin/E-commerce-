import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HeaderLogo = () => {
  const history = useHistory();

  const navigateToLogo = () => history.push("/");

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#252B42] md:text-3xl">
          <span onClick={navigateToLogo} style={{ cursor: "pointer" }}>
            Bandage
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
