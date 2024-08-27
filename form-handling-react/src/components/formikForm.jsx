import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username Is Required!'),
  email: Yup.string().email('Invalid Email Address').required('Email Is Required!'),
  password: Yup.string().required('Password Is Required!')
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ backgroundColor: 'red', color: 'white' }}
            />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ backgroundColor: 'red', color: 'white' }}
            />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ backgroundColor: 'red', color: 'white' }}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
