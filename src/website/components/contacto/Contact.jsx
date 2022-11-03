import './contact.css';

export const Contact = () => {
  const onSubmitNada = (event) => {
    event.preventDefault()
  }
  return (
    <section id='Contactanos' className='contactContainer'>
      <div className='contactWrapper'>
        <p className="contactText">
          ¡Estemos en contacto!
        </p>
        <form className='contactForm' onSubmit={(event) => onSubmitNada(event)} >
          <input type='text' name='nombre' id='nombre' placeholder='Nombre' />
          <input type='text' name='correo' id='correo' placeholder='Correo' />
          <textarea id='mensaje' name='mensaje' placeholder='Mensaje' />
          <button className='contactBtn'>
            ¡Enviar!
          </button>
        </form>
      </div>
    </section>
  )
};
