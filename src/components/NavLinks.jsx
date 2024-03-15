import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 2, url: "drugs", text: "drugs" },
  { id: 3, url: "cosmtics", text: "cosmtics" },
  { id: 4, url: "insurance", text: "insurance" },
  { id: 5, url: "courses", text: "courses" },
  { id: 6, url: "calc", text: "calc" },
];

const NavLinks = () => {
  return (
    <Fragment>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id} className="m-1">
            <NavLink className="text-capitalize" to={url}>
             <h3>{text}</h3> 
            </NavLink>
          </li>
        );
      })}
    </Fragment>
  );
};

export default NavLinks;
