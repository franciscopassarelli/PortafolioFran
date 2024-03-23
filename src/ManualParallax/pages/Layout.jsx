
import { Outlet, Link } from 'react-router-dom';



const Layout = ()=>{ 

  return( 

    <>     


<header className="navbar">
<nav className="navbar-nav">
  
  <ul>
    <li>
      <Link to="/">Sobre Mi</Link>
    </li>

    <li><Link to="/about">Skills</Link>
    </li>

    <li><Link to="dashboard">Experiencia</Link>
    </li>
    
  </ul>


</nav>


</header>

<Outlet/>


</>
  )}


export default Layout
