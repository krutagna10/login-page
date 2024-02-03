import React from "react";
import Button from "../UI/Button/Button.jsx";

export default function EditView() {
  const { fielddefs } = JSON.parse(localStorage.getItem("contacts"));
  console.log(fielddefs);

  return (
    <React.Fragment>
      <h2>Edit View</h2>
      <form className="edit-form">
        {fielddefs.map((fielddef, index) => (
          <input
            className="edit-form__input"
            key={index}
            type={fielddef.field_type}
            placeholder={fielddef.label}
          />
        ))}
        <Button className="edit-form__btn btn btn--violet">Submit</Button>
      </form>
    </React.Fragment>
  );
}
