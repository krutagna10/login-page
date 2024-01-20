import * as Yup from "yup";
const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email cannot be empty"),
  password: Yup.string()
    .min(3, "Must be at latest 3 characters")
    .required("Password cannot be empty"),
});
export default loginSchema;
