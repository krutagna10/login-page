import React, { useState } from "react";
import loginImg from "../../assets/login-image.png";
import "./LoginPage.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../schema/LoginSchema";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginPage1() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Form Submitted");
        console.log(values);

        var formdata = new FormData();
        formdata.append("input_type", "JSON");
        formdata.append("response_type", "JSON");
        formdata.append("method", "login_portal");
        formdata.append(
          "rest_data",
          `{"user_auth":{"email":${values.email},"password":${values.password},"encryption":"PLAIN"},"application":"mobile"}`
        );

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch(
          "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));

        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <main className="login_form">
      <div className="login_image">
        <img src={loginImg} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="user_email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="error_msg">{errors.email}</p>
          ) : null}
        </div>
        <div className="user_password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="error_msg">{errors.password}</p>
          ) : null}
        </div>
        <div className="user_login">
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
