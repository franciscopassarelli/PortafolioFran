/*Skills*/



import "../pages/About.css"
import Card from "../pages/Card"
import Data from "../Data"
import Footer from "../pages/Footer"
import { Outlet, Link } from 'react-router-dom';


const About = () =>{
 
  const SkillsPrincipal = [Data[0],Data[1],Data[2],Data[7]];
  const Skillslibrari = [Data[14], Data[9], Data[16]];
  const SkillsData = [Data[15],Data[11], Data[13],Data[4]];
  const SkillsOthers =  [Data[5],Data[10],Data[6],Data[12]];
  const SkillsNews =  [Data[8], Data[3]];

    return(
        
            <div className="bgimg-1">


<h2 className="Skills">Skills</h2>

 <div className="flex-container">{SkillsPrincipal.map((d) => (<Card title={d.name} description={d.description} image={d.image}  />))}</div>
                <br />

        <div className="TitleParrafo">
            <p className="parrafo">Librerias y Frameworks que utilizo</p>
        </div>

        <div className="bgimg-2">
        <h4 className="CuartosTitulos">Front-End</h4>
      
        <div className="flex-container">
        
          {Skillslibrari.map((d) => (
            
            <Card title={d.name} description={d.description} image={d.image}/>

            
            ))}
           
          </div>
          <br />
           <hr className="hr"/>

          <h4 className="CuartosTitulos">Base de datos</h4>
          <div className="flex-container">
          {SkillsData.map((d) => (<Card title={d.name} description={d.description} image={d.image} />))}</div>
           </div>
           <br />
        <div className="section">
            <h3 className="primertitulo">Herramientas adquiridas como Testing QA Manual.</h3>
            
            <div className="title">Pasado el tiempo me especializé también como Testing QA Manual (Pudiendo diseñar, ejecutar, detecatar, identificar casos de prueba). Manejando Postman, APIs, Pruebas de caja negra, SQL y más.</div>  
        </div>
        <br />
        <div className="bgimg-3">
          <h4 className="CuartosTitulos">Herramientas de Tester QA</h4>
        <div className="flex-container">{SkillsOthers.map((d) => (<Card title={d.name} description={d.description} image={d.image} />))}</div>
        <br />
 <hr className="hr" />
            <h4 className="CuartosTitulos">Añadiendo</h4>
            <div className="flex-container">{SkillsNews.map((d) => (<Card title={d.name} description={d.description} image={d.image} />))}</div>
        
        </div>
    <br />
  <Footer/>
            </div>

          
            
    
        
        );
}

export default About