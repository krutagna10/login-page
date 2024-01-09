import Button from "../UI/Button/Button.jsx";
import { useFormik } from "formik";
import loginValidation from "../../utilities/loginValidation.jsx";
import "./LoginForm.css";

const initialValues = {
  username: "",
  password: "",
};

function LoginForm() {
  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginValidation,
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
      <button className="form__btn-forgot-password" type="button">
        Forgot Password?
      </button>
      <Button className="form__btn btn--violet" type="submit">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
