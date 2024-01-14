import * as Yup from "yup";

const registrationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email cannot be empty"),
  firstName: Yup.string().min(2).max(15).required("First Name cannot be empty"),
  lastName: Yup.string().min(2).max(15).required("Last Name cannot be empty"),
  mobileNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Mobile Number cannot be empty"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Password cannot be empty"),
  username: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Username cannot be empty"),
  companyName: Yup.string().min(2).required("Company Name cannot be empty"),
  designation: Yup.string()
    .min(2)
    .max(15)
    .required("Designation cannot be empty"),
});

export default registrationSchema;
