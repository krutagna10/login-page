import Button from "../UI/Button/Button.jsx";
import registrationSchema from "../../utilities/schema/registrationSchema.jsx";
import "./RegistrationForm.css";
import { useFormik } from "formik";

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

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <div className="form__input-wrapper">
        <input
          className={`form__input ${errors.username ? "error" : ""}`}
          name="userName"
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
      </Button> */}
      <div className="user_controls">
        <label htmlFor="user_name">Username</label>
        <input
          type="text"
          id="user_name"
          name="userName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userName}
        />
        {touched.userName ? (
          <span className="error_msg">{errors.userName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password ? (
          <span className="error_msg">{errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName ? (
          <span className="error_msg">{errors.firstName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName ? (
          <span className="error_msg">{errors.lastName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email ? <span className="error_msg">{errors.email}</span> : ""}
      </div>
      <div className="user_controls">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
        />
        {touched.phoneNumber ? (
          <span className="error_msg">{errors.phoneNumber}</span>
        ) : (
          ""
        )}
      </div>

      <div className="user_controls">
        <label htmlFor="company_name">Company Name</label>
        <input
          type="text"
          id="company_name"
          name="companyName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.companyName}
        />
        {touched.companyName ? (
          <span className="error_msg">{errors.companyName}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_controls">
        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.designation}
        />
        {touched.designation ? (
          <span className="error_msg">{errors.designation}</span>
        ) : (
          ""
        )}
      </div>
      <div className="user_actions">
        <button type="submit">SignUp</button>
      </div>
    </form>
  );
}

export default RegistrationForm;
