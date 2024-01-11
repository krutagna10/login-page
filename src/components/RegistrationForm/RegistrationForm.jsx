import registrationSchema from "../../utilities/schema/registrationSchema.jsx";
import "./RegistrationForm.css";
import { useFormik } from "formik";
import Button from "../UI/Button/Button.jsx";
import { useEffect } from "react";

const initialValues = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  designation: "",
  companyName: "",
  phoneNumber: "",
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
      console.log("Form submitted");
      resetForm();
    },
  });

  function storeData() {
    const formdata = new FormData();
    formdata.append("response_type", "JSON");
    formdata.append("input_type", "JSON");
    formdata.append("method", "create_contact");
    formdata.append(
      "rest_data",
      '{"user_auth":{"lang_key":"eng","contact_detail": {"email":"kpatel.kp3101@gmail.com", "username_c":"krutagna31","first_name":"Krutagna","last_name":"Patel","mobile":"7016164976","password":"12345678","company_name":"Dreamers Technologies","designation":"Intern"}}}',
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
  }

  useEffect(() => {
    storeData();
  }, []);

  return (
    <form className="registration-form flow" onSubmit={handleSubmit}>
      <h1>Register for the website</h1>
      <div className="user_controls">
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
          <span className="error_msg">{errors.userName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
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
          <span className="error_msg">{errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
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
          <span className="error_msg">{errors.firstName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
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
          <span className="error_msg">{errors.lastName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
        <input
          className="registration-form__input"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Email"
        />
        {touched.email ? <span className="error_msg">{errors.email}</span> : ""}
      </div>
      <div className="user_controls">
        <input
          className="registration-form__input"
          type="tel"
          name="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
          placeholder="Phone Number"
        />
        {touched.phoneNumber ? (
          <span className="error_msg">{errors.phoneNumber}</span>
        ) : (
          ""
        )}
      </div>

      <div className="user_controls">
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
          <span className="error_msg">{errors.companyName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
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
          <span className="error_msg">{errors.designation}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_actions">
        <Button className="btn--violet" type="submit">
          SignUp
        </Button>
      </div>
    </form>
  );
}

export default RegistrationForm;
