import React from "react";
import { AiFillTag, AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillHeartFill } from "react-icons/bs";
import { MdGppGood } from "react-icons/md";
import { IoMdHelpCircle, IoMdPeople, IoMdWallet } from "react-icons/io";

const Sidebar = ({ isSidebar, toggleSidebar }) => {
  return (
    <div>
      {/* Overlay */}
      {isSidebar ? (
        <div className="bg-black/75 z-10 fixed top-0 left-0 right-0 bottom-0 w-full h-full "></div>
      ) : (
        ""
      )}
      {/* NAVBAR */}
      <div
        className={
          isSidebar
            ? "fixed z-20 top-[0] left-[0]  bg-white w-full sm:w-[350px] h-full p-4 duration-500 "
            : "fixed z-20 top-[0] left-[-100%] duration-500 bg-white w-full sm:w-[350px] h-full p-4 "
        }
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-russo ">Best Eats</h1>
          <AiOutlineClose
            onClick={toggleSidebar}
            size={30}
            className="cursor-pointer"
          />
        </div>

        <nav className="mt-14 text-xl">
          <ul>
            <li className="flex  items-center">
              <TbTruckDelivery size={25} />
              <p className="ml-4">Orders</p>
            </li>
            <li className="flex mt-5 items-center">
              <BsFillHeartFill size={25} />
              <p className="ml-4">Favorites</p>
            </li>
            <li className="flex mt-5  items-center">
              <IoMdWallet size={25} />
              <p className="ml-4">Wallet</p>
            </li>
            <li className="flex mt-5 items-center">
              <IoMdHelpCircle size={25} />
              <p className="ml-4">Help</p>
            </li>
            <li className="flex mt-5 items-center">
              <AiFillTag size={25} />
              <p className="ml-4">Promotions</p>
            </li>
            <li className="flex mt-5 items-center">
              <MdGppGood size={25} />
              <p className="ml-4">Best Ones</p>
            </li>
            <li className="flex mt-5 items-center">
              <IoMdPeople size={25} />
              <p className="ml-4">Invite Friends</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
