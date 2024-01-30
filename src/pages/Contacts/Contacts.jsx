import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Contacts.css";

function Contacts() {
  const data = JSON.parse(localStorage.getItem("contacts"));
  console.log(data);

  return (
    <React.Fragment>
      <div className="text-center">
        <h1>{data.module_name}</h1>

        <h2>List View</h2>
        <table className="list-view-table">
          <thead>
            <tr>
              {data.layoutdefs.listview.map((element, index) => (
                <th key={index}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="editview">Mayur1</Link>
                <Link to="detailview">
                  <ion-icon name="create-outline"></ion-icon>
                </Link>
              </td>
              <td>11121121212121</td>
              <td>mayur account name</td>
              <td>mayur@gmail.com</td>
            </tr>
            <tr>
              <td>krutgana</td>
              <td>88787878</td>
              <td>krutgana account name</td>
              <td>krutgana@gmail.com</td>
            </tr>
            <tr>
              <td>brijay</td>
              <td>65676576576</td>
              <td>brijay account name</td>
              <td>brijay@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default Contacts;
