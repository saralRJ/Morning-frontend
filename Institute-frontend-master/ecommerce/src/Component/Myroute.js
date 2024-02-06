import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Common/Navbar.component";
import { Home } from "./Pages/Home.component";
import { Footer } from "./Common/Footer.component";
import Count from "./Pages/Count.component";

export const MyRoute = (props) => {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path = '/' element={<Home/>}></Route>
                <Route path = '/count' element={<Count/>}></Route>
                
            </Routes>
            <Footer/>
        </Router>
    )
}