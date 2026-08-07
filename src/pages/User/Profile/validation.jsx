import * as Yup from "yup";

const UserProfileValidation = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  address: Yup.string().min(3, "Address must be at least 3 characters"),
});

export default UserProfileValidation;
