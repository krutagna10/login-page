import Button from "../UI/Button/Button.jsx";
import { useFormik } from "formik";
import loginSchema from "../../utilities/loginSchema.jsx";
import "./LoginForm.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: () => {
        fetchData();
        resetForm();
      },
    });

  const fetchData = () => {
    const formdata = new FormData();
    formdata.append("input_type", "JSON");
    formdata.append("response_type", "JSON");
    formdata.append("method", "login_portal");
    formdata.append(
      "rest_data",
      `{"user_auth":{"email":"${values.email}","password":${values.password},"encryption":"PLAIN"},"application":"mobile"}`,
    );

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-wrapper">
        <input
          className={`form__input ${errors.email ? "error" : ""}`}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
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
      <button className="form__btn-forgot-password" type="button">
        Forgot Password?
      </button>
      <Button className="form__btn btn--violet" type="submit">
        Login
      </Button>
      <Link to="/registration">Register for the website</Link>
    </form>
  );
}

export default LoginForm;
