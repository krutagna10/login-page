import React from "react";

export default function DetailView() {
  return (
    <React.Fragment>
      <h2>Detail View</h2>
      <table>
        <thead>
          <tr>
            {data.layoutdefs.detailview.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
      </table>
    </React.Fragment>
  );
}
