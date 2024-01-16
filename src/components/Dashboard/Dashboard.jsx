import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import "./Dashboard.css";

export default function DashboardLayout() {
  const [dashBoard_modules, setDashBoardModules] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("input_type", "JSON");
    formdata.append("response_type", "JSON");
    formdata.append("method", "get_dashboard_modules");
    formdata.append(
      "rest_data",
      '{"user_auth":{"session_id":"", "token": ""}}'
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setDashBoardModules(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="navbar-logo-left">
            <a className="logo-menu">
              <ion-icon name="menu" className="logo-menu"></ion-icon>
            </a>
            <img src={logo} alt="logo image" />
          </div>
          <div className="navbar-list">
            <ul>
              {dashBoard_modules.map((item) => (
                <li className="navbar-list-item">
                  <a href="/" className="list-item-link">
                    <ion-icon name="person"></ion-icon>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-right">
            <ion-icon name="search"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon>
          </div>
        </div>
      </nav>
    </div>
  );
}
