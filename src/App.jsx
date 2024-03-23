import React from "react";  
import { Routes,Route } from "react-router-dom";
import Home from "./ManualParallax/pages/Home";
import About from "./ManualParallax/pages/About";
import Dashboard from "./ManualParallax/pages/Dashboard";
import Default from "./ManualParallax/pages/Default";
import Layout from "./ManualParallax/pages/Layout"


function App() {
    return(
        <div>
                        
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<Default/>}/> 
            </Route>
        </Routes>
      

        </div>
    );

}

export default App;







