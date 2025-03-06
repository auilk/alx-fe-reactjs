import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm()
{
    const validationSchema = Yup.object(
    {
        username: Yup.string().required('Username is required'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    });

    const handleSubmit = (values) =>
    {
        console.log('Form Submitted', values);
    };

    return (
        <div>
        <h2>Register</h2>
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
>
            <Form>
            <div>
                <label htmlFor="username">Username</label>
                <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                />
                <ErrorMessage name="username" component="p" className="error" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                />
                <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                />
                <ErrorMessage name="password" component="p" className="error" />
            </div>

            <button type="submit">Register</button>
            </Form>
        </Formik>
        </div>
    );
};

export default FormikForm;
