import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./component/Auth/Login/Login.component";
import { Register } from "./component/Auth/Register/Register.component";
import { Navbar } from "./component/Common/Navbar/Navbar.component";

const Home = (props) => {
    return <h1>Home page</h1>
}

const About = (props) => {
    return <h1>About page</h1>
}

const Contact = (props) => {
    return <h1>Contact page</h1>
}

export const Myroutes = (props) =>{
    return(
        <Router>
      <Navbar isLoggedIn={false}></Navbar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}