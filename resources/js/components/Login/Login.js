import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import * as Yup from 'yup';
import axios from 'axios';
import { LOGIN_URL } from '../shared/apiUrl';
import Spinner from '../Spinner/Spinner';

const Login = props => {
  const [error, setError] = useState(false);
  const [loging, setLoging] = useState(false);

  const onSubmit = (values, onSubmitProps) => {
    setLoging(true);
    axios.post(LOGIN_URL, values).then(response => {
      setLoging(false);
      props.loginData(response.data.user, response.data.token);
      props.history.push('/');
    }).catch(error => {
      setError(true);
      setLoging(false);
      onSubmitProps.setSubmitting(false);
    })
  }

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('This field is required!')
      .matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'Invalid username format!'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.,:;^@$!%*#?&])[A-Za-z\d@.,:;^@$!%*#?&]{1,}$/, "Must be 1 character, 1 number and 1 special character!")
      .min(8, "Must be 8 charachters long")
      .required("This field is required!")
  })

  return (
    <div className="main-login">
      <div className="main-login-form">
        <h3>Login</h3>
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
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <div className="input-control">
                    <button
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Login
                    </button>
                  </div>
                  {error === true ? <div className="error-handler">Invalid credentials!</div> : null}
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

export default withRouter(Login);