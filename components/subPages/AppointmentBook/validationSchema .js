import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Name is required"),
  userPhone: Yup.string().required("Phone no is required"),
  userEmail: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
});
