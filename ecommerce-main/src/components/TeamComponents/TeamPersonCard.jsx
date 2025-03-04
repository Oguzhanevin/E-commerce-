import React from "react";

const TeamPersonCard = () => {
  const persons = [
    {
      name: "Erhan Fırat",
      title: "Software Consultant",
      img: "https://media.licdn.com/dms/image/D4D03AQHHikjSDQq9xw/profile-displayphoto-shrink_800_800/0/1708951317641?e=1727913600&v=beta&t=WB5X5gUXI_RiigPTNUwcALynsEXbBcPD5ecwrfF5pcQ",
    },
    {
      name: "Gökhan Özdemir",
      title: "Developer / PM",
      img: "https://media.licdn.com/dms/image/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/0/1635783306921?e=1727913600&v=beta&t=MwLdEyFitieAlE7yPOn1oC0t5pnpei5622vrJky6eLY",
    },
    {
      name: "Hasan Sırdaş",
      title: "Full Stack Dev.",
      img: "https://media.licdn.com/dms/image/D4D03AQF6fDqxHipeGQ/profile-displayphoto-shrink_800_800/0/1720524060127?e=1727913600&v=beta&t=axYU39nf7-p7jEI-fPedxd6vJTlRgKbqwOiO5t9tkBw",
    },
    {
      name: "Taylan Can Köse",
      title: "Full Stack Dev.",
      img: "https://media.licdn.com/dms/image/D4D03AQGyK8cumwgvFQ/profile-displayphoto-shrink_800_800/0/1713527182328?e=1727913600&v=beta&t=b6jhqWDpsprp68wDAZoTIgOvL-JMcHhlLuVkLWkTCzs",
    },
  ];

  return (
    <div className="mx-24">
      <div className="md:flex md:flex-row md:justify-center md:gap-5 md:flex-wrap">
        {persons.map((person, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden mx-auto md:mx-0 md:max-w-full md:flex md:items-start md:flex-col cursor-pointer"
          >
            {/* Resim */}
            <div className="relative">
              <img
                src={person.img}
                alt=""
                className="flex justify-center w-full h-[427px] md:h-[340px] md:w-[280px] object-cover rounded-sm pt-8 md:pt-4"
              />
            </div>
            <div className="mt-2 md:mt-4 text-start font-sans text-[#252B42] md:text-left">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <h2 className="text-base font-bold text-[#737373] mt-2">
                {person.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPersonCard;
