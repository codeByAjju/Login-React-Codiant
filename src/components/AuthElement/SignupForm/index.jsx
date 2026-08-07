import { Formik } from "formik";
import validation from "./validation";
import "../LoginForm/index.css";

function SignupForm({
  onProfilePhotoChange = () => {},
  onSubmit = () => {},
}) {
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    profilePhoto: null,
    profileImageURL: null,
  };

  return (
    <Formik
      validationSchema={validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <div className="signup">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <span>Signup</span>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="Enter firstName"
                className="form-control inp_text"
                id="firstName"
              />
              <p className="error">
                {errors.firstName && touched.firstName && errors.firstName}
              </p>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Enter lastName"
                className="form-control inp_text"
                id="lastName"
              />
              <p className="error">
                {errors.lastName && touched.lastName && errors.lastName}
              </p>
              <textarea
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Enter address"
                className="form-control inp_text"
                id="address"
              />
              <p className="error">
                {errors.address && touched.address && errors.address}
              </p>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                className="form-control"
              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
              <input
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  if (file) {
                    setFieldValue("profilePhoto", file);
                    onProfilePhotoChange(file, setFieldValue);
                  }
                }}
                className="form-control"
              />
              <p className="error">
                {errors.profilePhoto && touched.profilePhoto && errors.profilePhoto}
              </p>
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignupForm;
