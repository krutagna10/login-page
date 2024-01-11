import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Please enter a password"),
});

export default loginSchema;
