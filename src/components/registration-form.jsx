import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const resetForm = () => {
    const form = document.getElementById('RegistrationForm')
    setTimeout(() => {
      form.querySelectorAll('input').forEach(element => element.value = '')
    }, 500)
}

const validationSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .email('invalid email')
        .required('Required'),
})

const RegistrationForm = () => (
  <div className="registration-form">
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        await sleep(500);

        fetch('https://koleeum-admin.herokuapp.com/registrations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,

            }),
        })
        .then(response => response.json());

        resetForm()
      }}
    >
      {({ errors,
          touched,
          isSubmitting,
          isValid,
      }) => (
        <Form id="RegistrationForm">
            <div>
              <Field name="name" placeholder="Mon nom *" type="text" />
              {errors.name && touched.name ? <div className="error-message">{errors.name}</div> : null}
            </div>
            <div>
              <Field name="email" placeholder="Mon adresse email *" type="email" />
              {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
            </div>
            <button className="btn" type="submit" disabled={isValid ? '' : 'disabled'}>
                {isValid ? 'Envoyer' : 'Veuillez corriger'}
            </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default RegistrationForm