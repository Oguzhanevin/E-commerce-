import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumb = ({
  fromProductDetailPage = false,
  fromTeamHeaderComponents = false,
  backgroundColor = 'bg-mainBackgroundWhite',
  showOnMobile = true,
}) => {
  const location = useLocation();
  const path = location.pathname.split('/').filter((segment) => segment);

  const currentPage = path.length > 0 ? capitalizeFirstLetter(path[path.length - 1]) : 'Home';

  if (fromProductDetailPage && path[0] === 'shop') {
    path.length = 1; // Yalnızca "shop" kısmını göstermek için yolu kısaltır
  }

  return (
    <div
      className={`flex flex-col items-center p-4 ${backgroundColor} rounded-md w-full md:flex-row md:justify-between ${
        showOnMobile ? '' : 'hidden md:flex'
      }`}
    >
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:w-[92%] mx-auto">
        {!fromTeamHeaderComponents && (
          <div className="text-xl font-bold text-gray-800 mb-2 md:mb-0">{currentPage}</div>
        )}
        <nav aria-label="breadcrumb" className="w-full md:w-auto">
          <ol className="list-reset flex flex-row justify-center mt-10 md:mt-0 items-center text-gray-500">
            <li className="mb-2 md:mb-0">
              <Link to="/" className="text-textColorDarkGray">
                Home
              </Link>
            </li>
            {path.map((segment, index) => {
              const to = `/${path.slice(0, index + 1).join('/')}`;
              const isLast = index === path.length - 1;

              return (
                <li key={to} className="flex items-center mb-2 md:mb-0">
                  <i className="fas fa-chevron-right mx-2"></i>
                  {isLast ? (
                    <span className="text-gray-800">{capitalizeFirstLetter(segment)}</span>
                  ) : (
                    <Link to={to} className="text-textColorH2 hover:underline">
                      {capitalizeFirstLetter(segment)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
