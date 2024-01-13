import React from "react";
import "./ResetPassword.css";
import resetPasswordSchema from "../../utilities/schema/resetPasswordSchema";
import { useFormik } from "formik";

const initialValues = {
  email: "",
};
export default function ResetPassword() {
  const { values } = useFormik({
    initialValues: initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: () => {},
  });
  return <form></form>;
}
