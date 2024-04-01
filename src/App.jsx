import React from "react";  
import { Routes, Route } from "react-router-dom";
import Dashboard from "./ManualParallax/pages/Dashboard"
import About from "./ManualParallax/pages/About";
import Home from "./ManualParallax/pages/Home";

import Layout from "./ManualParallax/pages/Layout";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/About" element={<About/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                    <Route path="*" element={<Home/>} /> 
                </Route>
            </Routes>
        </div>
    );
}

export default App;
