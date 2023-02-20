import React, { useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from 'emailjs-com';
import { FaInfoCircle } from 'react-icons/fa'
import './contact.css';
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [formSent, setFormSent] = useState(false);
  const form = useRef();

  return (
    <section id="Contactanos"
      className="contactContainer">
      <div className="contactWrapper">
        <p className="contactText">
          {t("contact.mainTitle")}
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: ""
          }}
          validate={(valores) => {
            let errores = {};

            if (!valores.name) {
              errores.name = t("contact.errorName")
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
              errores.name = t("contact.errorName2")
            }

            if (!valores.email) {
              errores.email = t("contact.errorEmail")
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
              errores.email = t("contact.errorEmail2")
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            setFormSent(true);
            setTimeout(() => setFormSent(false), 5000)

            //El envia del correo con emailjs.
            emailjs.sendForm('service_ubwrvbp', 'template_jxwbzcl', form.current, 'qkRqCIXlHbHdQXhvL')
              .then((result) => {
                console.log(result.text);
              }, (error) => {
                console.log(error.text);
              });

          }}>
          {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
            <form className="contactForm" ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="inputForm"
              // required
              />
              {touched.name && errors.name && <div className="formError"><FaInfoCircle /> {errors.name}</div>}
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="inputForm"
              // required
              />
              {touched.email && errors.email && <div className="formError"><FaInfoCircle /> {errors.email}</div>}
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="inputForm"
                required
              />
              <textarea
                id=""
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                required
              >
              </textarea>
              {
                formSent
                  ?
                  <button className="contactBtnSent">
                    {t("contact.buttonSent")}
                  </button>
                  :
                  <button className="contactBtn">
                    {t("contact.buttonSend")}
                  </button>
              }
            </form>
          )}
        </Formik>
      </div>
    </section >
  )
};
