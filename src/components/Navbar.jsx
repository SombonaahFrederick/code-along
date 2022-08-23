import React from "react";
import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "TaskManager",
    to: "/task-manager",
  },
  {
    label: "About",
    to: "/about",
  },
];

function Navbar() {
    return (
        <nav className="flex justify-between py-5 px-20 shadow-md">
            <h3 className="font-bold">GobeJoint</h3>
            <ul className="flex gap-5">
                {
                    links.map((link, index) => (
                    <NavItem key={index} label={link.label} to={link.to} /> 
                    
              ) ) }
            </ul>
        </nav>
    )
}

export default Navbar;