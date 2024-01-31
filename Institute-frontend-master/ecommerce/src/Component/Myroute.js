import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Common/Navbar.component";
import { Home } from "./Pages/Home.component";
import { Footer } from "./Common/Footer.component";

export const MyRoute = (props) => {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path = '/' element={<Home/>}></Route>
            </Routes>
            <Footer/>
        </Router>
    )
}