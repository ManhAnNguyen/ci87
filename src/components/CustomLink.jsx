import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

const data = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/laptop",
    text: "Laptop",
  },
  {
    to: "/phone",
    text: "Phone",
  },
  {
    to: "/tablet",
    text: "Tablet",
  },
];

const CustomLink = () => {
  const { pathname } = useLocation();

  if (pathname === "/tablet") return <></>;
  return (
    <div className="navlinks">
      {data.map((item) => (
        <NavLink
          key={item.pathname}
          className={({ isActive }) => isActive && "isActive"}
          to={item.to}
        >
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};

export default CustomLink;
