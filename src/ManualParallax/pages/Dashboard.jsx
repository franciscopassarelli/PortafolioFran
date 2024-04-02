/*Experiencias*/
import "../pages/Dashboard.css"
import Footer from "./Footer"
import Animation from "./Animation"

const Dashboard = () =>{

    return(
        
            <div className="bgimg-1"> 
              <h2 className="Skills">Experiencias</h2>

              <section className="experience">
        <h2>Experiencia Laboral</h2>
        <ul>
            <li>
                <div className="date">Octubre 2023 - Presente</div>
                <div className="job-info">
                  <h3>Gestor de la Plataforma de Mercado Libre</h3>
                    <h5>Contactomaq</h5>
                    <p>• Coordiné y gestioné la presencia de productos de la empresa en la plataforma de Mercado Libre.</p>
                    <p>• Optimicé la visibilidad de los productos mediante estrategias de SEO y técnicas de marketing digital.</p>
                    <p>• Cargué y actualicé regularmente la información de productos, asegurando la precisión de los detalles y la coherencia con la estrategia de la marca.</p>
                    <p>• Supervisé el inventario, gestionando eficientemente el stock para evitar agotamientos y excedentes.</p>
                    <p>• Desarrollé una página web dinámica y responsive para Contactomaq. Mejorando su presencia online y facilitando el acceso a información crucial para sus usuarios. Utilicé React JS, Talwind CSS y Firebase como base de datos, lo que resultó un buen cambio e incremento del 25% en tráfico web en los primeros tres meses tras el lanzamiento.</p>
                </div>
            </li>
            <hr/>
            <li>
                <div className="date">feb. 2020 - actualidad · 4 años 2 meses</div>
                <div className="job-info">
                    <h3>Profesor nacional de tenis</h3>
                    <h5>Profesional independiente</h5>
                    <p>• Enseñanza de los principios y las reglas del deporte.</p>
                    <p>• Adaptación del entrenamiento según la edad, tanto para jugadores jóvenes como adultos.</p>
                    <p>• Clases de tenis para grupos e individuales en todos los niveles.</p>
                    <p>• Planificación de horarios para las distintas clases.</p>
                    <p>• Preparación física para los alumnos que deseen mejorar su condición.</p>
                    <p>• Asesoramiento a los alumnos para adquirir el equipamiento deportivo, incluyendo la raqueta, más adecuado a sus características y nivel.</p>
                    <p>•Servicios y mantenimiento de raquetas u otros.</p>
                </div>
            </li>
<hr/>
            <li>
                <div className="date">mar. 2017 - jun. 2021 · 4 años 4 meses</div>
                <div className="job-info">
                    <h3>Especialista en ventas</h3>
                    <h5>La Cueva</h5>
                    <p>• Repositor y vendedor de repuestos del automotor.</p>
                    <p>• Atención telefónica y gestión del correo electrónico de la empresa.</p>
                    <p>• Atención y servicio al cliente.</p>
                    <p>•Mantenimiento del orden y limpieza en el área de trabajo.</p>
                    <p>•Venta al cliente ofreciendo un servicio de calidad</p>
                </div>
            </li>
            <hr/>
            <li>
                <div className="date">mar. 2015 - feb. 2017 · 2 años</div>
                <div className="job-info">
                    <h3>Control y aseguramiento de la calidad</h3>
                    <h5>TARTAGAL SRL</h5>
                    <p>• Fábrica de productos alimenticios.</p>
                    <p>• Trabajo en equipo para facilitar el cumplimiento de objetivos.</p>
                    <p>• Coordinación con diferentes departamentos.</p>
                    <p>• Control y monitoreo de información.</p>
                </div>
            </li>
            <hr/>
            <li>
                <div className="date">ene. 2013 - mar. 2015 · 2 años 3 meses</div>
                <div className="job-info">
                    <h3>Servicio de atención al cliente</h3>
                    <h5>Shell DILUBCO SRL</h5>
                    <p>• Atencion al cliente.</p>
                    <p>• Registro de datos e información en el sistema de la empresa.</p>
                    <p>• Desempeño de tareas específicas del cargo y solicitadas por el superior.</p>
                    <p>• Apertura y cierre del local, gestión y arqueo de caja.</p>
                    <p>• Manejo de posnet.</p>
                    <p>•Venta de lubricantes y combustibles.</p>
                    <p>• Cumplimiento de los protocolos de la empresa y las medidas de seguridad y salud laboral.</p>
                    <p>• Control de stock y trato periódico con proveedores para el reabastecimiento de suministros.</p>
                    <p>• Manejo de inventario, incluyendo la recepción de suministros y el mantenimiento de registros.</p>
                    <p>•Cumplimentación de documentación y presentación de reportes periódicos.</p>
                    </div>
            </li>


           
          
        </ul>
    </section>

    <hr className="hr"/>
                

        <div className="bgimg-2">

        <div className="container">
    <h2 className="Ofrezco">Qué ofrezco?</h2>
    <div className="clearfix">
        <img src="https://t4.ftcdn.net/jpg/03/08/82/39/360_F_308823955_XTMT8TNKmOYnPEwmEmfnskgNqQv3hQE5.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>
        
        <p>Tengo la facilidad de adaptarme a distintas circunstancias para que el producto final sea lo que realmente espere el cliente y amigable al usuario.</p>
        
        <p>
        También tengo la habilidad para analizar e interpretar requerimientos y plasmarlo con las buenas practicas de desarrollo.
        </p>
        
        <p>
        Me comprometo a aplicar todos mis conocimientos y pasión si deciden que soy la persona adecuada para el puesto donde trabáje. 
        </p>
        
      
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Click para ver más!
        </button>
    </div>
</div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Información adicional</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <p>• Desarrollo, mantenimiento, diseño y mejora de las funcionalidades del producto.</p>
               <p>• Uso de diferentes lenguajes de programación y de herramientas de desarrollo apropiadas a cada proyecto.</p>
               <p>• Puedo adaptarme a distintas circunstancias y contextos back-end y front-end.</p>
               <p>• Desarrollo de interfaces de usuario dinámicas: Utilizo React.js para crear interfaces de usuario altamente interactivas y receptivas que mejoran la experiencia del usuario.</p>
               <p>• Optimización de rendimiento: Aplico técnicas de optimización de rendimiento en React.js y Next.js para mejorar la velocidad de carga y la eficiencia de las aplicaciones web, lo que resulta en una mejor experiencia del usuario.</p>
               <p>• Desarrollo de componentes reutilizables: Diseño y desarrollo componentes reutilizables en React.js para promover la modularidad y la mantenibilidad del código.</p>
               <p>• Enrutamiento dinámico: Implemento enrutamiento dinámico utilizando las capacidades de enrutamiento de Next.js para crear una navegación fluida dentro de la aplicación.</p>
               <p>• Integración con APIs RESTful: Conecto la aplicación frontend con servicios backend utilizando APIs RESTful, garantizando una comunicación eficiente entre el frontend y el backend.</p>
               <p>• Mantenimiento y actualización continua: Me mantengo al tanto de las últimas actualizaciones y mejores prácticas en React.js y Next.js, asegurando que las aplicaciones estén siempre actualizadas y sean compatibles con las últimas versiones.</p>
               
            </div>
        </div>
    </div>
</div>


          <br />
           <hr className="hr"/>
           <h4 className="CuartosTitulos">Proyectos y Trabajos</h4>


           <section className="Cuerpo">

<div className=""><h3><Animation/></h3></div>
  
<div className="slider">

<div className="slide-track">
<div className="slide">
  
<a href="https://franciscopassarelli.github.io/Lista-CRUD/"><img src="https://www.codestoresolutions.com/wp-content/uploads/2023/08/crud.webp"/></a>
</div>

<div className="slide">
<a href="https://next-aplication-five.vercel.app/"><img src="https://images.creativemarket.com/0.1.0/ps/7135788/3508/2482/m1/fpnw/wm0/burgerbeer-.jpg?1571076506&s=e0eb9c3a694c596fc3b8a97148b883e4"/></a>
</div>
  <div className="slide">
    <a href="https://next-aplication-henna.vercel.app/"><img src="https://i.pinimg.com/736x/16/17/a8/1617a835e88f317f90c7e0eb8ffcd4ee.jpg"/></a>
  </div>
  <div className="slide">
  <a href="https://franciscopassarelli.github.io/Sofi-Shop/"><img src="https://img.freepik.com/vector-premium/idea-diseno-logotipo-tienda-ropa-linea-logotipo-tienda-linea_272744-653.jpg?w=360"/></a>
  </div>
  <div className="slide">
  
<a href="https://franciscopassarelli.github.io/Lista-CRUD/"><img src="https://www.codestoresolutions.com/wp-content/uploads/2023/08/crud.webp"/></a>
</div>

<div className="slide">
<a href="https://next-aplication-five.vercel.app/"><img src="https://images.creativemarket.com/0.1.0/ps/7135788/3508/2482/m1/fpnw/wm0/burgerbeer-.jpg?1571076506&s=e0eb9c3a694c596fc3b8a97148b883e4"/></a>
</div>
  <div className="slide">
    <a href="https://next-aplication-henna.vercel.app/"><img src="https://i.pinimg.com/736x/16/17/a8/1617a835e88f317f90c7e0eb8ffcd4ee.jpg"/></a>
  </div>
  <div className="slide">
  <a href="https://franciscopassarelli.github.io/Sofi-Shop/"><img src="https://img.freepik.com/vector-premium/idea-diseno-logotipo-tienda-ropa-linea-logotipo-tienda-linea_272744-653.jpg?w=360"/></a>
  </div>
  <div className="slide">
  
  <a href="https://franciscopassarelli.github.io/Lista-CRUD/"><img src="https://www.codestoresolutions.com/wp-content/uploads/2023/08/crud.webp"/></a>
  </div>
  
  <div className="slide">
  <a href="https://next-aplication-five.vercel.app/"><img src="https://images.creativemarket.com/0.1.0/ps/7135788/3508/2482/m1/fpnw/wm0/burgerbeer-.jpg?1571076506&s=e0eb9c3a694c596fc3b8a97148b883e4"/></a>
  </div>
    <div className="slide">
      <a href="https://next-aplication-henna.vercel.app/"><img src="https://i.pinimg.com/736x/16/17/a8/1617a835e88f317f90c7e0eb8ffcd4ee.jpg"/></a>
    </div>
    <div className="slide">
    <a href="https://franciscopassarelli.github.io/Sofi-Shop/"><img src="https://img.freepik.com/vector-premium/idea-diseno-logotipo-tienda-ropa-linea-logotipo-tienda-linea_272744-653.jpg?w=360"/></a>
    </div>

    <div className="slide">
  
  <a href="https://franciscopassarelli.github.io/Lista-CRUD/"><img src="https://www.codestoresolutions.com/wp-content/uploads/2023/08/crud.webp"/></a>
  </div>
  
  <div className="slide">
  <a href="https://next-aplication-five.vercel.app/"><img src="https://images.creativemarket.com/0.1.0/ps/7135788/3508/2482/m1/fpnw/wm0/burgerbeer-.jpg?1571076506&s=e0eb9c3a694c596fc3b8a97148b883e4"/></a>
  </div>
    <div className="slide">
      <a href="https://next-aplication-henna.vercel.app/"><img src="https://i.pinimg.com/736x/16/17/a8/1617a835e88f317f90c7e0eb8ffcd4ee.jpg"/></a>
    </div>
    <div className="slide">
    <a href="https://franciscopassarelli.github.io/Sofi-Shop/"><img src="https://img.freepik.com/vector-premium/idea-diseno-logotipo-tienda-ropa-linea-logotipo-tienda-linea_272744-653.jpg?w=360"/></a>
    </div>
    <div className="slide">
  
  <a href="https://franciscopassarelli.github.io/Lista-CRUD/"><img src="https://www.codestoresolutions.com/wp-content/uploads/2023/08/crud.webp"/></a>
  </div>
  
  <div className="slide">
  <a href="https://next-aplication-five.vercel.app/"><img src="https://images.creativemarket.com/0.1.0/ps/7135788/3508/2482/m1/fpnw/wm0/burgerbeer-.jpg?1571076506&s=e0eb9c3a694c596fc3b8a97148b883e4"/></a>
  </div>
    <div className="slide">
      <a href="https://next-aplication-henna.vercel.app/"><img src="https://i.pinimg.com/736x/16/17/a8/1617a835e88f317f90c7e0eb8ffcd4ee.jpg"/></a>
    </div>
    <div className="slide">
    <a href="https://franciscopassarelli.github.io/Sofi-Shop/"><img src="https://img.freepik.com/vector-premium/idea-diseno-logotipo-tienda-ropa-linea-logotipo-tienda-linea_272744-653.jpg?w=360"/></a>
    </div>
 <div className="slide">
      <a href="https://next-aplication-henna.vercel.app/"><img src="https://i.pinimg.com/736x/16/17/a8/1617a835e88f317f90c7e0eb8ffcd4ee.jpg"/></a>
    </div>
    <div className="slide">
    <a href="https://franciscopassarelli.github.io/Sofi-Shop/"><img src="https://img.freepik.com/vector-premium/idea-diseno-logotipo-tienda-ropa-linea-logotipo-tienda-linea_272744-653.jpg?w=360"/></a>
    </div>

</div>

</div>

</section>
           </div>
        
        <div className="section">
            <h3 className="primertitulo">Educación</h3>
            
            <div className="title">Durante todo este tiempo obtuve la mayoria de mis certificados en Coderhouse. Así finalizando la carrera de Desarrollo Front-End React Js mas Next Js. Acá mismo algunas de mis certificaciónes...</div>  


        </div>
        <br />
        <div className="bgimg-3">
          <h4 className="CuartosTitulos">Certificaciónes</h4>

<div className="Cards1">
  <div className="Cards-body">
    <h5 className="Cards-title">Desarrollo Web</h5>
    <img className="LogoReact" src="https://e1.pxfuel.com/desktop-wallpaper/158/292/desktop-wallpaper-abstract-css-html5-webdesign-css3-html-5-cinema4d-css.jpg" alt="desarrolloweb" />
    <p className="Cards-text">Curso de Desarrollo Web. Terminado en Coderhouse.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    <a href="https://www.coderhouse.com/certificados/63bb35ea42b70c000ed7b5cc?lang=es"target="_blank" className="btn btn-primary">Ver certificado</a>
  </div>
</div>

<div className="Cards2 text-center">
  <div className="Cards-body">
    <h5 className="Cards-title">JavaScript</h5>
    <img className="LogoReact" src="https://e1.pxfuel.com/desktop-wallpaper/401/768/desktop-wallpaper-of-javascript-javascript-thumbnail.jpg" alt="javscript" />
    <p className="Cards-text">Curso de JavaScript terminado en Coderhouse.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    <a href="https://www.coderhouse.com/certificados/642729ec59ceb90002240e1c?lang=es"target="_blank" className="btn btn-primary">Ver certificado</a>
  </div>
</div>

<div className="Cards3 text-end">
  <div className="Cards-body">
    <h5 className="Cards-title">React Js</h5>
    <img className="LogoReact" src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg" alt="react" />
    <p className="Cards-text">Curso de React js. Terminado en Coderhouse.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    <a href="https://www.coderhouse.com/certificados/65129b676ab3ebeeffec9116?lang=es"target="_blank" className="btn btn-primary">Ver certificado</a>
  </div>
</div>



<div className="Cards4">
  <div className="Cards-body">
    <h5 className="Cards-title">Desarrollo Front-End</h5>
    <img className="LogoReact" src="https://worksolutions.ru/uploads/Ux_BYD_Uf_B_Nl9_Rf_D5r6w_M_Dv_A_Wke3m_G_Tf_Za_Dcm_HGZ_Wc_67283f7901.png" alt="frontend" />
    <p className="Cards-text">Carrera Desarrollo Front-end React JS</p>
    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a href="https://www.coderhouse.com/certificados/65129b676ab3eb10b2ec9119?lang=es"target="_blank" className="btn btn-primary">Ver certificado</a>
  </div>
</div>


<div className="Cards5 text-center">
  <div className="Cards-body">
    <h5 className="Cards-title">Next JS</h5>
    <img className="LogoReact" src="https://www.hanbit.co.kr/data/cms/CMS7641364152_thumb.jpg"alt="" />
    <p className="Cards-text">Curso de Next JS</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    <a href="https://www.coderhouse.com/ar/certificados/65fa24ddf9726556c0a1e6fd?lang=es"target="_blank" className="btn btn-primary">Ver certificado</a>
  </div>
</div>

<div className="Cards6 text-end">
  <div className="Cards-body">
    <h5 className="Cards-title">Testing QA Manual</h5>
    <img className="LogoReact" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/256971609/original/309c746e3534d372621bfd6d9b6431ceaf4713f9/do-functional-testing-of-website-and-mobile-applications.png" alt="QA" />
    <p className="Cards-text">Curso de Testing QA Manual</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    <a href="https://www.coderhouse.com/ar/certificados/654193484519cff341d64b4b?lang=es"target="_blank" className="btn btn-primary">Ver certificado</a>
  </div>
</div>



       
        <br />
 <hr className="hr" />
    
        
      
       </div>
    <br />
  <Footer/>
            </div>

          
            
    
        
        );
}

export default Dashboard