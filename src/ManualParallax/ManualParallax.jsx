import React from "react";
import '../ManualParallax/ManualParallax.css'

function ManualParallax() {

  return (

    <>

      <div>

        <div className="bgimg-1">




          <div className="caption">




            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://avatars.githubusercontent.com/u/118229728?v=4" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Hola! Soy Francisco Nicolás Passarelli</h5>
                    <br />
                    <p className="card-text">Tengo 28 años y soy de Buenos Aires, Argentina. Actualmente estudiando Programacion Full Stack, trabajando en mis proyectos y creciendo en este mundo tecnologico que tanto me apasiona.</p>
                    <p className="card-text"><small class="text-muted">Perfil actualizdo hace 1 semana.</small></p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <span className="border">Desarrollador FrontEnd</span>

          </div>
        </div>
        <div className="section">
          <h3 className="primertitulo"></h3>
          <p className="title">Mi nombre es Francisco. Empecé a estudiar programación a mediados de 2022. Orientado en el desarrollo front-end con React JS en Coderhouse. Comenzando en la universidad y ahora aprendiendo back-end utilizando MySQL. Con el paso del tiempo, he ido aprendiendo y ahora soy capaz de adquirir conocimientos de manera autodidacta. Estoy disponible para aceptar oportunidades laborales en el mercado de IT, adaptándome y aprendiendo nuevas tecnologías.</p>
        </div>
        <div className="bgimg-2">
          <div className="caption">
            <span className="border">Tecnicatura en programación
            </span>


          </div>

        </div>

        <div className="section">


          <h3 className="primertitulo">Acerca de mi </h3>

          <div className="title">Disfruto mucho de lo que hago, me gusta trabajar en equipo, escuchar la opinión de los demás y compartir la mía. Actualmente, soy profesor tambien jugador de tenis y dedico la otra gran parte de mi tiempo a programar. Tengo proyectos como páginas web, e-commerce y aplicaciones. "Podras verlas en la ruta donde estan mis Skills. </div>
        </div>
        <div className="bgimg-3">
          <div className="caption">
            <span className="border">Si buscas ayúda y un buen compañero de equipo. ¡Ese soy yo!</span>
          </div>
        </div>



        <footer className="FooterRows">
  <div className="FooterRow">
    <div className="col-umn">
      <img src="src/assets/msj.png" className="logo"/>
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
    <ul><li><a href="">Home</a></li>
    <li><a href="">Services</a></li>
    <li><a href="">About us</a></li>
    <li><a href="">Features</a></li>
    <li><a href="">Contacts</a></li>
    </ul>
    </div>
    <div className="col-umn">
      <h3>Newsleter<div className="underline"><span></span></div></h3>
  <form>
  <i class="material-symbols-outlined">
mail
</i>
    <input type="email" placeholder="Enter your email id" required />
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
</div>

    </>



  );

}



export default ManualParallax