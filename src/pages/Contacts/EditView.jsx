import React from "react";

export default function EditView() {
  return (
    <React.Fragment>
      <h2>Edit View</h2>
      <table>
        <thead>
          <tr>
            {data.layoutdefs.editview.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
      </table>
    </React.Fragment>
  );
}
