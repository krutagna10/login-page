import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Contacts.css";

function Contacts() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("listview");
  }, []);

  return (
    <React.Fragment>
      <div className="contact text-center">
        <h1>Contacts Page</h1>
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default Contacts;
