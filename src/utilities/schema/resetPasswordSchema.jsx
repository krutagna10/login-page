import * as Yup from "yup";
const loginSchema = Yup.object({
  password: Yup.string()
    .min(3, "Must be at latest 3 characters")
    .required("Please enter your password !"),
});
export default loginSchema;
