import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import Container from "../Container";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebar, setSidebar] = useState(false);
  const [isSearch, setSearch] = useState(false);

  const toggleSidebar = () => setSidebar(!isSidebar);
  const toggleSearchScreen = () => setSearch(!isSearch);

  return (
    <>
      <Container>
        <header className="mx-auto py-6  text-center flex items-baseline justify-between">
          <div className="flex items-center">
            <AiOutlineMenu
              size={30}
              onClick={toggleSidebar}
              className="align-baseline cursor-pointer"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl ml-2 font-russo  ">
              Best <span className="font-bold ">Eats</span>
            </h1>
            {/* Pickup Switch */}
            <div className="hidden lg:flex  rounded-full bg-gray-200 ml-3 text-{1em} ">
              <p className="bg-black rounded-full text-white p-2">Delivery</p>
              <p className="p-2">Pickup</p>
            </div>
          </div>

          {/* Start Search Section */}
          <div className="hidden sm:flex box-border bg-gray-200 py-2 justify-between px-2 rounded-full items-center w-[200px] sm:w-[400px] lg:w-[500px]">
            <BiSearchAlt2 size={25} />
            <input
              type="text"
              className=" focus:outline-none bg-transparent text-base w-[92%]"
              placeholder="Search Food"
            />
          </div>
          {/* Search For mobile */}
          <BiSearchAlt2
            size={25}
            onClick={toggleSearchScreen}
            className="block sm:hidden"
          />
          <div
            className={
              isSearch
                ? "fixed flex sm:hidden items-center z-10 justify-center h-full w-full top-0 left-0 bg-black/90 duration-300"
                : "flex sm:hidden fixed items-center z-10 justify-center h-full w-full top-[-100%] left-0 bg-black/90 duration-300 "
            }
          >
            <AiOutlineClose
              className="absolute top-5 right-5 text-white"
              onClick={toggleSearchScreen}
              size={30}
            />
            <input
              className="w-[85%] h-[4rem] focus:outline-none rounded-xl pl-3"
              placeholder="Search"
            />
          </div>
          {/* End Search Section */}
          {/* delevery button */}
          <button className="hidden border-none outline-none md:flex justify-between rounded-full bg-black text-white py-2 px-3 items-center">
            <FaShoppingCart size={18} className="mr-2" />
            Delivery
          </button>
        </header>
      </Container>
      <Sidebar isSidebar={isSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
