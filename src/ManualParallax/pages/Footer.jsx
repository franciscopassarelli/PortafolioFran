import React, { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);
  const [messageCount, setMessageCount] = useState(0);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (messageCount >= 2) {
      setNotification('Ya has enviado mensajes más de dos veces.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el mensaje, por ejemplo, una llamada a una API

    // Incrementa el contador de mensajes
    setMessageCount(prevCount => prevCount + 1);

    // Muestra la notificación de éxito
    setNotification('Mensaje enviado con éxito!');

    // Reinicia el mensaje después de 2 segundos
    setTimeout(() => {
      setMessage('');
      setNotification(null);
    }, 2000);
  };

  return (
    <footer className="FooterRows">
      <div className="FooterRow">
        <div className="col-umn">
          <img src="https://c0.klipartz.com/pngpicture/391/694/gratis-png-logo-de-la-aplicacion-de-mensajes-correo-electronico-del-iphone-iconos-de-computadora-correo-electronico.png" className="logo" />
          <p>Gracias por su tiempo y consideración. Quedo a la espera de sus noticias.</p>
          <p>Saludos cordiales,</p>
          <p>Francisco Nicolás Passarelli</p>
        </div>

        <div className="col-umn">
          <h3>Info<div className="underline"><span></span></div></h3>
          <p>Argentina</p>
          <p>Buenos Aires</p>
          <p>Paso Del Rey</p>
          <p className="emails-id">franciscopassarelli7@gmail.com</p>
          <h5>Tel: 1154661930</h5>
        </div>
        
        <div className="col-umn">
          <h3>Mensajes<div className="underline"><span></span></div></h3>
          <form onSubmit={handleSubmit}>
            <button type="submit" className="small-submit-button material-symbols-outlined">mail</button>
            <input type="text" placeholder="Envíame un mensaje" value={message} onChange={handleMessageChange} required />
          </form>
          <div className="notificacionArea">
            {notification && <p className="notificacion">{notification}</p>}
          </div>
          <div className="social-icons">
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">PortfolioFran © 2023 - Todos los Derechos Reservados</p>
    </footer>
  );
};

export default Footer;
