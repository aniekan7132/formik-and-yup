import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

// USING THE USEFORMIK HOOK

const BasicForm = () => {

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },

      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label>Age</label>
      <input
        type="number"
        id="age"
        placeholder="Enter your age"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label>Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label>Confirm password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Enter your password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
