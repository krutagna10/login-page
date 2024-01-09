import * as Yup from "yup";

const loginValidation = Yup.object({
  username: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Please enter name"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Please enter password"),
});

export default loginValidation;
