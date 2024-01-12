import * as Yup from "yup";

const registrationSchema = Yup.object({
  userName: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Please enter a username"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required filed")
    .test({
      name: "email validation",
      message: "entered email address is invalid ",
      test: (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
    }),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Please enter a password"),
  firstName: Yup.string().min(2).max(15).required("FirstName is required!"),
  lastName: Yup.string().min(2).max(15).required("LastName is required!"),
  companyName: Yup.string()
    .min(2)

    .required("Company Name is required!"),
  designation: Yup.string().min(2).max(15).required("designation is required!"),
  phoneNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Phone number is required!!"),
});

export default registrationSchema;
