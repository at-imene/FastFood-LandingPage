import React from "react";

const Card = ({ title, subtitle, img }) => {
  return (
    <div className="max-h-[200px] rounded-xl relative hover:scale-[1.02] duration-300 col-span-6 md:col-span-2">
      <img src={img} className="object-cover rounded-xl w-full h-full" />
      <div className="bg-black/50 absolute top-0 left-0 rounded-xl w-full h-full text-white p-4  flex flex-col justify-between">
        <div>
          <h3 className="text-2xl lg:text-2xl font-bold">{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <button className="bg-white text-black p-2 lg:p-2  font-bold max-w-[35%] md:max-w-[65%] md:min-w-[55%] lg:max-w-[35%] outline-none border-none hover:bg-orange-600 hover:text-white ">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;
