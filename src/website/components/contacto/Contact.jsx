import React, { useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from 'emailjs-com';
import { FaInfoCircle } from 'react-icons/fa'
import './contact.css';

export const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const form = useRef();

  // const onSubmitNada = (event) => {
  //   event.preventDefault()
  // }
  return (

    <section id="Contactanos"
      className="contactContainer">
      <div className="contactWrapper">
        <p className="contactText">
          ¡Estemos en contacto!
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
              errores.name = 'Por favor ingrese su nombre completo'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
              errores.name = "Solo tiene permitido agregar letras y espacios"
            }

            if (!valores.email) {
              errores.email = 'Por favor ingrese una dirección de correo electrónico'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
              errores.email = "Su correo solo tiene permitido tener letras, números, puntos, guiones y guiones bajos"
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            setFormSent(true);
            setTimeout(() => setFormSent(false), 5000)

            //El envia del correo con emailjs.
            emailjs.sendForm('service_pi9x2gs', 'template_xgui69i', form.current, 'nMjdwAd3T24fsqWG5')
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
                placeholder="Nombre"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="inputForm"
              />
              {touched.name && errors.name && <div className="formError"><FaInfoCircle /> {errors.name}</div>}
              <input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="inputForm"
              />
              {touched.email && errors.email && <div className="formError"><FaInfoCircle /> {errors.email}</div>}
              <input
                type="text"
                placeholder="Asunto"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="inputForm"
              />
              <textarea
                id=""
                name="message"
                placeholder="Mensaje"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              >
              </textarea>
              {
                formSent
                  ?
                  <button className="contactBtnSent">
                    ¡Mensaje Enviado!
                  </button>
                  :
                  <button className="contactBtn">
                    ¡Enviar!
                  </button>
              }
            </form>
          )}
        </Formik>
      </div>
      {/* <section id='Contactanos' className='contactContainer'> */}
      {/*   <div className='contactWrapper'> */}
      {/*     <p className="contactText"> */}
      {/*       ¡Estemos en contacto! */}
      {/*     </p> */}
      {/*     <form className='contactForm' onSubmit={(event) => onSubmitNada(event)} > */}
      {/*       <input type='text' name='nombre' id='nombre' placeholder='Nombre' /> */}
      {/*       <input type='text' name='correo' id='correo' placeholder='Correo' /> */}
      {/*       <textarea id='mensaje' name='mensaje' placeholder='Mensaje' /> */}
      {/*       <button className='contactBtn'> */}
      {/*         ¡Enviar! */}
      {/*       </button> */}
      {/*     </form> */}
      {/*   </div> */}
      {/* </section> */}
    </section >





  )
};
