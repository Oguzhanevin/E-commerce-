import { useState, useEffect } from "react";

function useScrollPosition() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset < 10); // Eğer sayfa başlangıcına 10px veya daha yakınsa
    };

    // Scroll olayı için dinleyici ekleyin
    window.addEventListener("scroll", handleScroll);

    // Cleanup fonksiyonu
    return () => {
      // Scroll dinleyicisini kaldırın
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return atTop;
}

export default useScrollPosition;
