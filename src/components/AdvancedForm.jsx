import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";
import { Form, Field, Formik } from "formik";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

// USING USEFORMIK COMPONENT

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          {/* <input
            id="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            name="name"
            placeholder="Name"
          /> */}
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
