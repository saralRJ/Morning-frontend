import React from "react";
import './Navbar.component.css'
import { Link } from "react-router-dom";

export const Navbar = (props) => {
    // console.log(props)
    //ui logics goes here
    var header = props.isLoggedIn
        ? <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Gallery</li>
            <li>Logout</li>
        </ul>
        : <ul>
            <li>
                <Link className='page' to={"/"}>Home</Link>
            </li>
            <li>
                <Link className='page' to={"/about"}>About</Link>
            </li>
            <li>
                <Link className='page' to={"/contact"}>Contact</Link>
            </li>
            <li>
                <Link className='page' to={"/login"}>Login</Link>
            </li>
            <li>
                <Link className='page' to={"/register"}>Register</Link>
            </li>
        </ul>
    return (
        <>
            {
                header
            }
        </>
    )

}


