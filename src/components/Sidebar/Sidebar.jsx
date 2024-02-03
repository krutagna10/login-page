import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Submenu from "../Submenu/Submenu.jsx";

function Sidebar() {
  const [dashboardModules, setDashboardModules] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("input_type", "JSON");
    formdata.append("response_type", "JSON");
    formdata.append("method", "get_dashboard_modules");
    formdata.append(
      "rest_data",
      '{"user_auth":{"session_id":"", "token": ""}}',
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setDashboardModules(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          {dashboardModules.map((item) => (
            <li key={item} className="sidebar__nav-item">
              <Link
                to={`/dashboard/${item.toLowerCase()}`}
                className="sidebar__nav-link flex items-center"
              >
                {" "}
                <span>
                  <ion-icon name="person" />
                </span>
                <span className="sidebar__link-text">{item}</span>
              </Link>
              <Submenu />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
