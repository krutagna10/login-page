import * as Yup from "yup";

const registrationSchema = Yup.object({
  username: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Please enter a username"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Please enter a password"),
});

export default registrationSchema;
