import registrationSchema from "../../utilities/registrationSchema.jsx";
import "./RegistrationForm.css";
import { useFormik } from "formik";
import Button from "../UI/Button/Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  mobileNumber: "",
  password: "",
  designation: "",
  companyName: "",
};

function RegistrationForm() {
  const {
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: registrationSchema,
    onSubmit: () => {
      storeData();
    },
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function storeData() {
    const formdata = new FormData();
    formdata.append("response_type", "JSON");
    formdata.append("input_type", "JSON");
    formdata.append("method", "create_contact");

    const jsonData = {
      user_auth: {
        lang_key: "eng",
        contact_detail: {
          email: `${values.email}`,
          username_c: `${values.username}`,
          first_name: `${values.firstName}`,
          last_name: `${values.lastName}`,
          mobile: `${values.mobileNumber}`,
          password: `${values.password}`,
          company_name: `${values.designation}`,
          designation: `${values.designation}`,
        },
      },
    };

    formdata.append("rest_data", JSON.stringify(jsonData));

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
        requestOptions,
      );

      const data = await response.json();
      console.log(data);

      if ("id" in data) {
        navigate("/");
        resetForm();
      } else {
        setError(data["error-msg"]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="registration-form flow" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap">
        <div className="flow">
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Email address</label>
              {errors.email && touched.email && (
                <span className="registration-form__error-message">
                  {errors.email}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />
          </div>
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Username</label>
              {errors.username && touched.username && (
                <span className="registration-form__error-message">
                  {errors.username}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Username"
            />
          </div>
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Password</label>
              {errors.password && touched.password && (
                <span className="registration-form__error-message">
                  {errors.password}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />
          </div>
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">First Name</label>
              {errors.firstName && touched.firstName && (
                <span className="registration-form__error-message">
                  {errors.firstName}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="flow">
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Last Name</label>
              {errors.lastName && touched.lastName && (
                <span className="registration-form__error-message">
                  {errors.lastName}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder="Last Name"
            />
          </div>
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Mobile Number</label>
              {errors.mobileNumber && touched.mobileNumber && (
                <span className="registration-form__error-message">
                  {errors.mobileNumber}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="tel"
              name="mobileNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobileNumber}
              placeholder="Mobile"
            />
          </div>

          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Company Name</label>
              {errors.companyName && touched.companyName && (
                <span className="registration-form__error-message">
                  {errors.companyName}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="text"
              name="companyName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.companyName}
              placeholder="Company Name"
            />
          </div>
          <div className="registration-form__control">
            <div className="flex justify-between">
              <label className="registration-form__label">Designation</label>
              {errors.designation && touched.designation && (
                <span className="registration-form__error-message">
                  {errors.designation}
                </span>
              )}
            </div>
            <input
              className="registration-form__input"
              type="text"
              name="designation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.designation}
              placeholder="Designation"
            />
          </div>
        </div>
      </div>
      {error && (
        <p className="registration-form__server-error-message fs-200 text-center">
          {error}
        </p>
      )}
      <Button className="registration-form__btn btn--violet" type="submit">
        Sign Up
      </Button>
    </form>
  );
}

export default RegistrationForm;
