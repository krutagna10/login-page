import { Link } from "react-router-dom";
import React from "react";
import "./Submenu.css";

function Submenu() {
  return (
    <nav className="submenu">
      <ul className="submenu__list">
        <li className="submenu__item">
          <Link className="submenu__link" to="/dashboard/contacts/listview">
            List View
          </Link>
        </li>
        <li>
          <Link className="submenu__link" to="/dashboard/contacts/editview">
            Edit View
          </Link>
        </li>
        <li>
          <Link className="submenu__link" to="/dashboard/contacts/detailview">
            Detail View
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Submenu;
