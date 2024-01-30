import { Link } from "react-router-dom";
import React from "react";
import "./Submenu.css";

function Submenu() {
  return (
    <nav className="submenu">
      <ul>
        <li className="submenu__list">
          <Link to="/dashboard/contacts/listview">List View</Link>
          <Link to="/dashboard/contacts/editview">Edit View</Link>
          <Link to="/dashboard/contacts/detailview">Detail View</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Submenu;
