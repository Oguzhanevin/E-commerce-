import { useState, useEffect } from "react";

function useIsMobile() {
  // 1024px kırılım noktası
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Component yüklendiğinde kontrol et

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
