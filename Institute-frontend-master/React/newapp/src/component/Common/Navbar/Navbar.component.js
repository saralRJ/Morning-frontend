import React from "react";
import './Navbar.component.css'
import { Link } from "react-router-dom";

export const Navbar = (props) => {
    // console.log(props)
    //ui logics goes here
    var header = props.isLoggedIn
        ? <ul>
            <li>
                <Link className='page'to={'/'}>Home</Link>
                </li>
            <li>
                <Link className='page'to={'/product'}>Product</Link>
                </li>
            <li>
                <Link className='page'to={'/gallery'}>Gallery</Link>
                
                </li>
            <li>
                <Link className='page'to={'/logout'}>Logout</Link>
                </li>
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
                <Link className='page' to={"/signin"}>Sign in</Link>
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


