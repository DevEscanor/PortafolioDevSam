import React, { useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from 'emailjs-com';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { emailjsConfig } from '../../../config/emailjs';
import { trackFormSubmission } from '../../../config/analytics';
import './contact.css';

export const Contact = () => {
  const { t } = useTranslation();
  const [formSent, setFormSent] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const form = useRef();

  const validateForm = (valores) => {
    let errores = {};

    // Name validation
    if (!valores.name.trim()) {
      errores.name = t("contact.errorName");
    } else if (!/^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(valores.name.trim())) {
      errores.name = t("contact.errorName2");
    }

    // Email validation
    if (!valores.email.trim()) {
      errores.email = t("contact.errorEmail");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valores.email.trim())) {
      errores.email = t("contact.errorEmail2");
    }

    // Subject validation
    if (!valores.subject.trim()) {
      errores.subject = t("contact.errorSubject");
    } else if (valores.subject.trim().length < 5) {
      errores.subject = t("contact.errorSubjectShort");
    } else if (valores.subject.trim().length > 100) {
      errores.subject = t("contact.errorSubjectLong");
    }

    // Message validation
    if (!valores.message.trim()) {
      errores.message = t("contact.errorMessage");
    } else if (valores.message.trim().length < 10) {
      errores.message = t("contact.errorMessageShort");
    } else if (valores.message.trim().length > 1000) {
      errores.message = t("contact.errorMessageLong");
    }

    return errores;
  };

  const handleSubmit = async (valores, { resetForm, setSubmitting }) => {
    setSubmitError('');
    
    try {
      // Track form submission
      trackFormSubmission('contact_form');

      // Send email
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.userId
      );

      if (result.status === 200) {
        setFormSent(true);
        resetForm();
        setTimeout(() => setFormSent(false), 5000);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitError(t("contact.errorSubmit"));
    } finally {
      setSubmitting(false);
    }
  };

  const getFieldIcon = (fieldName, touched, errors) => {
    if (touched[fieldName] && errors[fieldName]) {
      return <FaExclamationTriangle className="field-icon error" />;
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return <FaCheckCircle className="field-icon success" />;
    }
    return null;
  };

  return (
    <section id="Contactanos" className="contactContainer">
      <div className="contactWrapper">
        <p className="contactText">
          {t("contact.mainTitle")}
        </p>
        <p className="contactSubtitle">
          {t("contact.subtitle")}
        </p>
        
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: ""
          }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
            <form className="contactForm" ref={form} onSubmit={handleSubmit}>
              
              {/* Name Field */}
              <div className="form-field">
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  className={`inputForm ${touched.name && errors.name ? 'error' : touched.name && !errors.name ? 'success' : ''}`}
                  disabled={isSubmitting}
                />
                {getFieldIcon('name', touched, errors)}
                {touched.name && errors.name && (
                  <div className="formError">
                    <FaInfoCircle /> {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="form-field">
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  className={`inputForm ${touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'success' : ''}`}
                  disabled={isSubmitting}
                />
                {getFieldIcon('email', touched, errors)}
                {touched.email && errors.email && (
                  <div className="formError">
                    <FaInfoCircle /> {errors.email}
                  </div>
                )}
              </div>

              {/* Subject Field */}
              <div className="form-field">
                <input
                  type="text"
                  placeholder={t("contact.subjectPlaceholder")}
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  className={`inputForm ${touched.subject && errors.subject ? 'error' : touched.subject && !errors.subject ? 'success' : ''}`}
                  disabled={isSubmitting}
                />
                {getFieldIcon('subject', touched, errors)}
                {touched.subject && errors.subject && (
                  <div className="formError">
                    <FaInfoCircle /> {errors.subject}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className="form-field">
                <textarea
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  className={`inputForm textarea ${touched.message && errors.message ? 'error' : touched.message && !errors.message ? 'success' : ''}`}
                  rows="6"
                  disabled={isSubmitting}
                />
                {getFieldIcon('message', touched, errors)}
                {touched.message && errors.message && (
                  <div className="formError">
                    <FaInfoCircle /> {errors.message}
                  </div>
                )}
                <div className="char-counter">
                  {values.message.length}/1000
                </div>
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="submitError">
                  <FaExclamationTriangle /> {submitError}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`contactBtn ${isSubmitting ? 'submitting' : formSent ? 'sent' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" />
                    {t("contact.buttonSending")}
                  </>
                ) : formSent ? (
                  <>
                    <FaCheckCircle />
                    {t("contact.buttonSent")}
                  </>
                ) : (
                  t("contact.buttonSend")
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};
