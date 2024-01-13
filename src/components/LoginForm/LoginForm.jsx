import Button from "../UI/Button/Button.jsx";
import { useFormik } from "formik";
import loginSchema from "../../utilities/schema/loginSchema.jsx";
import "./LoginForm.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: () => {
      fetchData();
    },
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    const formdata = new FormData();
    formdata.append("input_type", "JSON");
    formdata.append("response_type", "JSON");
    formdata.append("method", "login_portal");
    formdata.append(
      "rest_data",
      `{"user_auth":{"email":"${values.email}","password":${values.password},"encryption":"PLAIN"},"application":"mobile"}`
    );

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
        requestOptions
      );

      const data = await response.json();
      console.log(data);
      if ("contact_id" in data) {
        navigate("/dashboard");
        resetForm();
      } else {
        setError(data["error-msg"]);
      }
    } catch (error) {
      console.log("Error has occured");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__control">
        <input
          className={`login-form__input ${
            errors.email && touched.email ? "error" : ""
          }`}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          type="text"
          placeholder="Email"
        />
        {errors.email && touched.email && (
          <span className="login-form__error-message">{errors.email}</span>
        )}
      </div>
      <div className="login-form__control">
        <input
          className={`login-form__input ${
            errors.password && touched.password ? "error" : ""
          }`}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type="password"
          placeholder="Password"
        />
        {errors.password && touched.password && (
          <span className="login-form__error-message">{errors.password}</span>
        )}
      </div>
      <button className="login-form__forgot-password-btn" type="button">
        <Link to="/resetPassword"> Forgot Password?</Link>
      </button>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <Button className="login-form__btn btn--violet" type="submit">
        Login
      </Button>
      <Link to="/registration">Register for the website</Link>
    </form>
  );
}

export default LoginForm;
