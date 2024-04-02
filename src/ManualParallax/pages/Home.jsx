
import '../ManualParallax.css';
import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';
const Home = () =>{

  
  const [urls, setUrls] = useState({
    linkedin: 'https://www.linkedin.com/in/franciscopassarelli/',
    cv: 'https://drive.google.com/file/d/1ajpMmsQRDAKbKSr4hwWk-EhKAoPNSG9p/view?usp=sharing',
    github: 'https://github.com/franciscopassarelli'
  });

  const handleButtonClick = (url) => {
    window.open(urls[url], '_blank');
  };

  return ( 
  
       

        <div>
       
       <div className="bgimg-1">
      
      <div className='caption'>



      <div className="card mb-3">  
 <div className="row g-0">
   <div className="col-md-4">
     <img src="https://avatars.githubusercontent.com/u/118229728?v=4" className="img-fluid rounded-start" alt="..."/>
   </div>
   <div className="col-md-8">
     <div className="card-body">
       <h5 className="card-title">👋 Hola! Soy Francisco Nicolás Passarelli</h5>
       <br />
       <p className="card-text">Tengo 29 años y soy de Buenos Aires, Argentina. Preparandome para Full Stack 🚀 . Trabajando 
en 
      mis proyectos y creciendo en este mundo tecnologico que tanto me apasiona.</p>
       <p className="card-text"><small class="text-muted">Perfil actualizdo hace 3 semanas.</small></p>
      </div>
     </div>
    </div>
</div>
<br />
<br/>
<br />
<span className="border">👨‍💻Desarrollador FrontEnd</span>

<div className="button-container">
      <button className="botones" onClick={() => handleButtonClick('linkedin')}>
        <span>Visitar mi LinkedIn</span>
      </button>
      <button className="botones second-button" onClick={() => handleButtonClick('cv')}>
        <span>Descargar CV</span>
      </button>
      <button className="botones" onClick={() => handleButtonClick('github')}>
        <span>Visitar mi Git-Hub</span>
      </button>
    </div>




</div>


</div> 



<div className="section">
<h3 className="primertitulo">Sobre mí</h3>
   <p className="title">Empecé en el mundo de la programación a mediados de 2022 con JavaScript. Me especialízo en el desarrollo front-end con React y Next JS, tambien aporto con habilidades de Back-end. La mayoría de mis cursos fueron en Coderhouse, pero con el paso del tiempo he ido aprendiendo y ahora puedo adquirir conocimientos de manera autodidacta, adaptándome y aprendiendo tecnologías de manera mas solida.</p>
       </div>

      
      

       <div className="bgimg-2">
       <div className="caption">
           <span className="border">Comenzando Tecnicatura Universitaria en Tecnologías Web.
           </span>
      
     
           </div>
           
       </div>

       <div className="section">
     

           <h3 className="primertitulo">Momentaneamente</h3>
           
           <div className="title"><p>El aprendizaje ha sido una de mis prioridades, lo que motivó mi decisión de hacer una pausa profesional para invertir ese tiempo en completar mi formación. La decisión no solo me ha permitido mejorar mis conocimientos, sino que ha supuesto un crecimiento personal necesario para poder asumir objetivos más ambiciosos.</p></div>
       </div>
       <div className="bgimg-3">
       

       <div className="caption">
  
           <span className="border">Si buscas ayúda y un buen compañero de equipo. ¡Ese soy yo!</span>

           </div>   
  </div>

   
  
           
           <footer className="FooterRowsHome">
           <div className="FooterRow">
             <div className="col-umn">
             <img src="https://c0.klipartz.com/pngpicture/391/694/gratis-png-logo-de-la-aplicacion-de-mensajes-correo-electronico-del-iphone-iconos-de-computadora-correo-electronico.png" className="logo"/>
               <p>Gracias por su tiempo y consideración. Quedo a la espera de sus noticias.

Saludos cordiales,


Francisco Nicolás Passarelli</p></div>
         
         
               
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
   <Link to="/">volver al inicio</Link>
 </li>
   <li><Link to="/About">Skills</Link>
   </li>
   <li><Link to="/Dashboard">Experiencia</Link>
   </li>
 </ul>
 <Outlet/>
             </div>
             <div className="col-umn">
               <h3>Redes y Otros<div className="underline"><span></span></div></h3>
         
           
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
         </div>
        

        )
         
           
           
  


}

export default Home