import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header(props) {
  const [dashBoard_modules, setDashBoardModules] = useState([]);
  const [show, setShow] = useState(false);
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
        setDashBoardModules(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <React.Fragment>
      <header className="header flex items-center">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Dreamer Technologies" className="header__logo" />
        </Link>
      </header>
    </React.Fragment>
  );
}
