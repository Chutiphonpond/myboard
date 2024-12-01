import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { IoCreate } from "react-icons/io5";

const Sidebar = () => {
  const sideBarList = [
    { name: "Home", icon: <RiHome6Line className="w-5 h-5" /> },
    { name: "Our blog", icon: <IoCreate className="w-5 h-5" /> },
  ];
  return (
    <div className="h-full w-[280px]">
      <ul className="pl-8">
        {sideBarList.map((item, index) => (
          <li key={index} className="flex items-center py-2">
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
