import React, { useRef } from "react";
import "./contact.scss";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className={meta.touched && meta.error ? "error" : ""}
        {...field}
        {...props}
      />
    </>
  );
};

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        className={meta.touched && meta.error ? "error" : ""}
        {...field}
        {...props}
      />
    </>
  );
};

const Contact = () => {
  const form = useRef(null);
  return (
    <section className="contact" id="contact">
      <h2>Contact me</h2>
      <p>Let's do awesome things.</p>
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(15, "Must be 15 characters or less")
            .required("Name Required !"),
          company: Yup.string()
            .min(3, "Must be at least 3 characters")
            .required("Required !"),
          email: Yup.string().email().required("Required !"),
          subject: Yup.string()
            .min(10, "Must be at least 10 characters")
            .required("Required !"),
          message: Yup.string()
            .min(10, "Must be at least 10 characters")
            .required("Required !"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          emailjs
            .sendForm(
              "gmail",
              process.env.REACT_APP_TEMPLATE_ID,
              form.current,
              process.env.REACT_APP_USER_ID
            )
            .then(
              (result) => {
                setSubmitting(false);
                resetForm();
                console.log(result);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }}
      >
        {(props) => (
          <Form className="form" ref={form}>
            <div className="first-section">
              <CustomTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <CustomTextInput
                label="Company Name"
                name="company"
                type="text"
                placeholder="Company Name"
              />
            </div>

            <CustomTextInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <CustomTextInput
              label="Subject"
              name="subject"
              type="text"
              placeholder="Subject"
            />
            <CustomTextArea
              label="Message"
              name="message"
              type="textarea"
              placeholder="Message"
              row="10"
            />
            <div>
              <button type="submit">
                {props.isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
