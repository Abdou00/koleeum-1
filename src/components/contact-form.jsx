import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const resetForm = () => {
    const form = document.getElementById('contactForm')
    setTimeout(() => {
      form.querySelectorAll('input').forEach(element => element.value = '')
      form.querySelector('textarea').value = ''
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
    subject: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})

const ContactForm = () => (
  <div className="contact-form">
    <h3 className="title">Contactez-nous</h3>
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        await sleep(500);

        fetch('https://koleeum-admin.herokuapp.com/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,

            }),
        })
        .then(response => response.json());
        // emailNotification()
        resetForm()
      }}
    >
      {({ errors,
          touched,
          isSubmitting,
          isValid,
      }) => (
        <Form id="contactForm">
            <div className="inputs">
                <div>
                  <Field name="name" placeholder="Name *" />
                  {errors.name && touched.name ? <div className="error-message">{errors.name}</div> : null}
                </div>
                <div>
                  <Field name="email" placeholder="Email *" type="email" />
                  {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
                </div>
            </div>
            <div className="sujet">
              <div>
                <Field name="subject" placeholder="Subject *" />
                {errors.subject && touched.subject ? <div className="error-message">{errors.subject}</div> : null}
              </div>
            </div>
            <div className="textarea">
                <Field name="message" placeholder="Message *" as="textarea" />
                {errors.message && touched.message ? <div className="error-message">{errors.message}</div> : null}
            </div>
            <button className="btn" type="submit" disabled={isValid ? '' : 'disabled'}>
                {isValid ? 'Envoyer' : 'Veuillez corriger'}
            </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default ContactForm