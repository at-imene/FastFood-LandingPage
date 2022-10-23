import React from "react";
import { categories } from "../../data/data";
import Container from "../Container";

const Categories = () => {
  return (
    <footer className="py-4 mb-10">
      <Container>
        <h1 className="text-3xl lg:text-4xl text-orange-600 font-bold my-12 text-center">
          Top rated menu items
        </h1>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map((categorie) => {
            return (
              <div
                key={categorie.name}
                className="flex cursor-pointer hover:scale-[1.015] p-4 duration-200 bg-gray-200 items-center justify-between rounded-lg"
              >
                <h2 className="text-lg md:text-xl font-bold mr-2">
                  {categorie.name}
                </h2>
                <img
                  className="w-[20%] object-cover "
                  src={categorie.image}
                  alt={categorie.name}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default Categories;
