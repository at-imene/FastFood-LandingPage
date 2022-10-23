import React from "react";

const MenuCardItem = ({ name, image, price }) => {
  return (
    <div className="max-h-[300px] w-full  rounded-xl shadow-lg lg:last:col-end-3 hover:scale-[1.015] duration-300 relative">
      <img
        className="rounded-xl object-cover w-full h-full"
        src={image}
        alt={name}
      />
      <div className="absolute bottom-0 bg-black/70 w-full flex p-4 rounded-b-xl justify-between items-center">
        <h2 className="font-bold text-white">{name}</h2>
        <p className="text-orange-600 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default MenuCardItem;
