import { Link } from "react-router-dom";
import React from "react";

function ListView() {
  const data = JSON.parse(localStorage.getItem("contacts"));

  return (
    <div>
      <h2>List View</h2>
      <table className="list-view-table">
        <thead>
          <tr>
            <th>Edit View Button</th>
            {data.layoutdefs.listview.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/dashboard/contacts/editview">
                <ion-icon name="create-outline"></ion-icon>
              </Link>
            </td>
            <td>
              <Link to="/dashboard/contacts/detailview">Mayur1</Link>
            </td>
            <td>11121121212121</td>
            <td>mayur account name</td>
            <td>mayur@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
