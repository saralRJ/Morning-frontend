import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Common/Navbar.component";
import { Home } from "./Pages/Home.component";
import { Footer } from "./Common/Footer.component";
import Count from "./Pages/Count.component";
import Product from "./Pages/Product.component";
import { Cart } from "./Pages/Cart.component";

export const MyRoute = (props) => {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path = '/' element={<Home/>}></Route>
                <Route path = '/count' element={<Count/>}></Route>
                <Route path = '/product' element={<Product/>}></Route>
                <Route path = '/cart' element={<Cart/>}></Route>
                
            </Routes>
            <Footer/>
        </Router>
    )
}