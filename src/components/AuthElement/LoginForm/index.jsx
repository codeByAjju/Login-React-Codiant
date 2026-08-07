import { Formik } from "formik";
import validation from "./validation";
import "./index.css";

function LoginForm({ onSubmit = () => {} }) {
  return (
    <Formik
      validationSchema={validation}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <span>Login</span>
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
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
