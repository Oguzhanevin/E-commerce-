import React from "react";

function FirstHeader() {
  return (
    <header className="bg-gray-800 hidden lg:block">
      <div className="flex justify-between items-center w-[92%] mx-auto py-2">
        {/* İletişim Bilgileri */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-white text-sm">
            <i className="fa-solid fa-phone mr-2"></i>
            (225) 555-0118
          </span>
          <span className="flex items-center text-white text-sm">
            <i className="fa-solid fa-envelope mr-2"></i>
            michelle.rivera@example.com
          </span>
        </div>

        {/* Takip Mesajı */}
        <div className="text-white text-sm">
          Follow us and get a chance to win 80% off
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center space-x-4 text-white text-sm">
          <span className="mr-2">Follow Us:</span>
          <i className="fa-brands fa-instagram cursor-pointer hover:text-purple-400"></i>
          <i className="fa-brands fa-youtube cursor-pointer hover:text-red-500"></i>
          <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-600"></i>
          <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-400"></i>
        </div>
      </div>
    </header>
  );
}

export default FirstHeader;
