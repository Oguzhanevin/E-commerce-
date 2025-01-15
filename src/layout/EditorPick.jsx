import React from 'react';

const EditorPick = () => {
  // Editor's Pick kategori resimleri ve isimleri
  const editorPickItems = [
    { imgSrc: 'img/editorPick/editorPickMenCategory.jpeg', label: 'MEN' },
    { imgSrc: 'img/editorPick/editorPickWomenCategory.jpeg', label: 'WOMEN' },
    { imgSrc: 'img/editorPick/editorPickAccessoriesCategory.jpeg', label: 'ACCESSORIES' },
    { imgSrc: 'img/editorPick/editorPickKidsCategory.jpeg', label: 'KIDS' }
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-6 bg-mainBackgroundWhite">
      <h1 className="text-2xl font-bold mb-1 text-gray-800">EDITOR'S PICK</h1>
      <p className="text-gray-600 mb-4">Problems trying to resolve the conflict between</p>

      {/* Flex Container for Categories */}
      <div className="flex gap-4 px-4 flex-col md:flex-row">

        {/* First Category (Men) */}
        <div className="relative p-4 w-full md:w-1/2">
          <img
            src={editorPickItems[0].imgSrc}
            className="w-full h-auto md:h-full object-cover"
            alt={editorPickItems[0].label}
          />
          <button className="absolute bottom-8 left-8 pl-10 pr-10 bg-white text-black px-4 py-2">
            {editorPickItems[0].label}
          </button>
        </div>

        {/* Remaining Categories (Women, Accessories, Kids) */}
        <div className="p-4 w-full md:w-1/2 flex flex-col gap-4">
          {editorPickItems.slice(1).map((item, index) => (
            <div key={index} className="relative w-full flex-1">
              <img
                src={item.imgSrc}
                className="w-full h-auto md:h-full object-cover"
                alt={item.label}
              />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2">
                {item.label}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EditorPick;
