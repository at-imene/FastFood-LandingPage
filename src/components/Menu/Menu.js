import React, { useState } from "react";
import Container from "../Container";
import { data } from "../../data/data";
import MenuCardItem from "./MenuCardItem";
import FilterElement from "./FilterElement";

const type_filters = ["all", "burger", "pizza", "salad", "chicken"];
const price_filters = ["$", "$$", "$$$", "$$$$"];
const Menu = () => {
  const [food, setFood] = useState(data);

  const filterType = (category) => {
    if (category === "all") return setFood(data);
    return setFood(
      data.filter(
        (item) =>
          item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
      )
    );
  };
  const filterPrice = (price) => {
    setFood(data.filter((item) => item.price === price));
  };
  return (
    <section className="pt-12 mb-6 mx-auto">
      <Container>
        <h2 className="text-2xl md:text-3xl text-orange-600 font-bold text-center mb-8">
          Top Rated Menu Items
        </h2>
        {/* Filtring Section */}
        <div className="flex flex-col md:flex-row md:items-center items-start justify-between my-8">
          {/* Fitler by Type */}
          <div>
            <h5 className="font-bold mb-2">Filter Type</h5>
            <ul className="flex flex-wrap">
              {type_filters.map((item) => {
                return (
                  <FilterElement key={item} text={item} filter={filterType} />
                );
              })}
            </ul>
          </div>
          {/* Filter by price */}
          <div>
            <h5 className="font-bold ">Filter Price</h5>
            <ul className="flex flex-wrap">
              {price_filters.map((item) => {
                return (
                  <FilterElement key={item} text={item} filter={filterPrice} />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3">
          {food.map((item) => {
            return <MenuCardItem key={item.id} {...item} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Menu;
