import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone no is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
});
