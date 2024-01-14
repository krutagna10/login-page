import Button from "../UI/Button/Button.jsx";
import { useFormik } from "formik";
import loginSchema from "../../utilities/loginSchema.jsx";
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
    const formData = new FormData();
    formData.append("input_type", "JSON");
    formData.append("response_type", "JSON");
    formData.append("method", "login_portal");
    formData.append(
      "rest_data",
      `{"user_auth":{"email":"${values.email}","password":"${values.password}","encryption":"PLAIN"},"application":"mobile"}`,
    );

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
        requestOptions,
      );

      const data = await response.json();

      if ("contact_id" in data) {
        navigate("/dashboard");
        resetForm();
      } else {
        setError(data["error-msg"]);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <form className="login-form flow" onSubmit={handleSubmit}>
      <div className="login-form__control">
        <div className="flex justify-between">
          <label className="fs-200 font-medium">Email address</label>
          {errors.email && touched.email && (
            <span className="login-form__error-message fs-100 font-medium">
              {errors.email}
            </span>
          )}
        </div>
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
      </div>
      <div className="login-form__control">
        <div className="flex justify-between">
          <label className="fs-200 font-medium">Password</label>
          {errors.password && touched.password && (
            <span className="login-form__error-message fs-100 font-medium">
              {errors.password}
            </span>
          )}
        </div>
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
      </div>
      <div className="flex">
        <button
          className="login-form__forgot-password-btn fs-200"
          type="button"
        >
          Forgot Password?
        </button>
      </div>
      {error && (
        <p className="login-form__server-error-message fs-200 text-center">
          {error}
        </p>
      )}
      <Button className="login-form__btn btn--violet" type="submit">
        Login
      </Button>
      <p className="text-center">
        Do not have an account ?{" "}
        <Link className="login-form__registration-btn" to="/registration">
          Create account
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
