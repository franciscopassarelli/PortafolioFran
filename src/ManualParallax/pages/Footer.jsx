import React from "react"
import { Outlet, Link } from 'react-router-dom';

const Footer =() =>{
    return(
        
        <footer className="FooterRows">
  <div className="FooterRow">
    <div className="col-umn">
      <img src="https://w7.pngwing.com/pngs/851/106/
png-transparent-computer-icons-email-telephone-website-miscellaneous-blue-angle-thumbnail.png" className="logo"/>
      <p>Gracias por su tiempo y consideración. Quedo a la espera de sus noticias.

Saludos cordiales,


Francisco Nicolás Passarelli</p>
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
      <h3>Links<div className="underline"><span></span></div></h3>
      <ul>
<li>
  <Link to="/">Ir a Sobre mi</Link>
</li>
  <li><Link to="/about">Skills</Link>
  </li>
  <li><Link to="/Dashboard">Experiencia</Link>
  </li>
  
</ul>
<Outlet/>
    </div>
    <div className="col-umn">
      <h3>Contactáme<div className="underline"><span></span></div></h3>
  <form>
  <i class="material-symbols-outlined">
mail
</i>
    <input type="email" placeholder="Entrar" required />
  <i type="submit" className="material-symbols-outlined">login</i>
  </form>
  <div className="social-icons">
    <i className="fab fa-whatsapp"></i>
    <i className="fab fa-github"></i>
    <i className="fab fa-linkedin"></i>
    <i className="fab fa-envelope"></i>
  </div>
    </div>
  </div>
  <hr />
  <p className="copyright">PortfolioFran © 2023 - Todos los Derechos Reservados</p>
</footer>
    )
}

export default Footer