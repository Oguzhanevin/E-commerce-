import React from "react";
import FirstHeader from "../components/generalComponents/FirstHeader";
import SecondHeader from "../components/generalComponents/SecondHeader";

const Header = () => {
  return (
    <header>
      {/* İki farklı header bileşenini burada birleştiriyoruz */}
      <FirstHeader />
      <SecondHeader />
    </header>
  );
};

export default Header;
