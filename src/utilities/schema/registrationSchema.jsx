import * as Yup from "yup";

const registrationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  firstName: Yup.string().min(2).max(15).required("First Name required!"),
  lastName: Yup.string().min(2).max(15).required("Last Name required!"),
  mobileNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Mobile number required!!"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Password Required"),
  userName: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Username required"),
  companyName: Yup.string().min(2).required("Company Name required!"),
  designation: Yup.string().min(2).max(15).required("Designation required"),
});

export default registrationSchema;
