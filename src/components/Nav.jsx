import React from "react";
import menu from "../assets/images/menu.svg";

export default function Nav() {
  return (
    <nav className="bg-purple flex justify-between px-[60px]">
      <div className="space-x-12 flex items-center  py-[14px]">
        <img src={menu} alt="menu" />
        {navitems.map((navitem) => (
          <div key={navitem.id} className="flex justify-between">
            <a href="/" className="uppercase font-semibold text-white text-[20px]">
              {navitem.item}
            </a>
          </div>
        ))}
      </div>
      <a href="" className="text-gray-dark font-semibold text-[20px] bg-gray uppercase px-[24px] py-[14px]">blog</a>
    </nav>
  );
}

export const navitems =
  [{
    id: 1,
    item: "all categories",
  },
  {
    id: 2,
    item: "home",
  },
  {
    id: 3,
    item: "today's deal",
  },
  {
    id: 4,
    item: "contact us",
  },
  {
    id: 5,
    item: "faq",
  }];
