import Button from "../UI/Button/Button.jsx";
import registrationSchema from "../../utilities/registrationSchema.jsx";
import "./RegistrationForm.css";
import { useFormik } from "formik";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

function RegistrationForm() {
  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registrationSchema,
      onSubmit: () => {
        console.log("Form submitted");
        resetForm();
      },
    });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-wrapper">
        <input
          className={`form__input ${errors.username ? "error" : ""}`}
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <span className="form__input-error-message">{errors.username}</span>
        )}
      </div>
      <div className="form__input-wrapper">
        <input
          className={`form__input ${errors.email ? "error" : ""}`}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type="email"
          placeholder="Email"
        />
        {errors.password && (
          <span className="form__input-error-message">{errors.email}</span>
        )}
      </div>
      <div className="form__input-wrapper">
        <input
          className={`form__input ${errors.password ? "error" : ""}`}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <span className="form__input-error-message">{errors.password}</span>
        )}
      </div>
      <Button className="form__btn btn--violet" type="submit">
        Register
      </Button>
    </form>
  );
}

export default RegistrationForm;
