import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import * as Yup from 'yup';
import axios from 'axios';
import { REGISTER_URL } from '../shared/apiUrl';
import Spinner from '../Spinner/Spinner';

const Register = props => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [loging, setLoging] = useState(false);

  const onSubmit = (values, onSubmitProps) => {
    setLoging(true);
    axios.post(REGISTER_URL, values).then(response => {
      setMessage(response.data.message);
      onSubmitProps.setSubmitting(false);
      setLoging(false);
    }).catch(error => {
      setError(true);
      onSubmitProps.setSubmitting(false);
      setLoging(false);
    })
  }

  const initialValues = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('This field is required!')
      .matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'Invalid username format!'),
    email: Yup.string()
      .email("Invalid email format!")
      .required('This field is required!'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.,:;^@$!%*#?&])[A-Za-z\d@.,:;^@$!%*#?&]{1,}$/, "Must be 1 character, 1 number and 1 special character!")
      .min(8, "Must be 8 charachters long")
      .required("This field is required!"),
    password_confirmation: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.,:;^@$!%*#?&])[A-Za-z\d@.,:;^@$!%*#?&]{1,}$/, "Must be 1 character, 1 number and 1 special character!")
      .min(8, "Must be 8 charachters long")
      .required("This field is required!")
  })

  return (
    <div className="main-register">
      <div className="main-register-form">
        <h3>Create account</h3>
        <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit} 
          validationSchema={validationSchema}
        >
          {formik => {
            return (
              <Form>
                <div className="form">
                  <div className="input-control">
                    <label htmlFor="username">Username</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component={TextError} />
                  </div>
                  <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <div className="input-control">
                    <label htmlFor="password_confirmation">Repeat Password</label>
                    <Field type="password" id="password_confirmation" name="password_confirmation" />
                    <ErrorMessage name="password_confirmation" component={TextError} />
                  </div>
                  <div className="input-control">
                    <button
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Create account
                    </button>
                  </div>
                  {error === true ? <div className="error-handler">Something went wrong, please try again!</div> : null}
                  {message !== '' ? <div className="message">{message}</div> : null}
                </div>
              </Form>
            )
          }}
        </Formik>
        {loging ? <Spinner /> : null}
      </div>
    </div>
  )
}

export default withRouter(Register);
