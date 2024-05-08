import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company Name is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
});
