import React from "react";
import "./Cases.css";

export default function Cases() {
  const casesData = JSON.parse(localStorage.getItem("cases"));
  const { editview, detailview, listview } = casesData.layoutdefs;
  console.log(editview, detailview, listview);
  return (
    <div>
      <h1 className="cases_header">Cases js file</h1>
    </div>
  );
}
