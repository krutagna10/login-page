import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import "./Dashboard.css";
import Account from "./Account";

export default function DashboardLayout() {
  const [dashBoard_modules, setDashBoardModules] = useState([]);
  const [show, setShow] = useState(false);
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
    // <div className="home">

    <header class="primary-header flex">
      <div class="primary-header__logo">
        <button
          onClick={() => setShow(!show)}
          className="primary-header__button"
        >
          <ion-icon name="menu-outline" class="menu_icon"></ion-icon>
        </button>
        <img
          src={logo}
          alt="logo of website"
          className="primary-header__logo-image"
        />
      </div>

      <nav>
        <div className={`${show ? "hidden nav__menu-list" : "nav__menu-list"}`}>
          <ul className="nav__menu-list--links">
            {dashBoard_modules.map((item) => (
              <li className="nav__menu-list--link">
                <a href="/" className="nav__menu-link">
                  <span className="menu_list-icon">
                    <ion-icon name="person"></ion-icon>
                  </span>
                  <span className="menu_list-text">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
    // </div>
  );
}
