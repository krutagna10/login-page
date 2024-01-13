import registrationSchema from "../../utilities/registrationSchema.jsx";
import "./RegistrationForm.css";
import { useFormik } from "formik";
import Button from "../UI/Button/Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  userName: "",
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
          username_c: `${values.userName}`,
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
        navigate("/dashboard");
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
      <h1>Register for the website</h1>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Email"
        />
        {touched.email ? (
          <span className="registration-form__error-message">
            {errors.email}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="text"
          name="userName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userName}
          placeholder="Username"
        />
        {touched.userName ? (
          <span className="registration-form__error-message">
            {errors.userName}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          placeholder="First Name"
        />
        {touched.firstName ? (
          <span className="registration-form__error-message">
            {errors.firstName}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          placeholder="Last Name"
        />
        {touched.lastName ? (
          <span className="registration-form__error-message">
            {errors.lastName}
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="tel"
          name="mobileNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mobileNumber}
          placeholder="Mobile"
        />
        {touched.mobileNumber ? (
          <span className="registration-form__error-message">
            {errors.mobileNumber}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Password"
        />
        {touched.password ? (
          <span className="registration-form__error-message">
            {errors.password}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="text"
          name="companyName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.companyName}
          placeholder="Company Name"
        />
        {touched.companyName ? (
          <span className="registration-form__error-message">
            {errors.companyName}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="registration-form__control">
        <input
          className="registration-form__input"
          type="text"
          name="designation"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.designation}
          placeholder="Designation"
        />
        {touched.designation ? (
          <span className="registration-form__error-message">
            {errors.designation}
          </span>
        ) : (
          ""
        )}
      </div>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <Button className="registration-form__btn btn--violet" type="submit">
        SignUp
      </Button>
    </form>
  );
}

export default RegistrationForm;
