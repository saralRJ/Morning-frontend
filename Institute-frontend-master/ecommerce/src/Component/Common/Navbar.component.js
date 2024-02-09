
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const cart_item_length = useSelector(product => product.cart.length)
return(
    <div>

    <div class="row bg-info p-4">
        <div class="col-md-3 text-center fs-2">
            <Link class="navbar-brand" to="index.html">ourStore</Link>
        </div>
        <div class="col-md-6">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-warning" type="submit">Search</button>
            </form>
        </div>
        <div class="col-md-3 fs-3 d-flex justify-content-evenly">
            <Link to="login.html" class="text-dark"><i class="bi bi-box-arrow-in-right"></i></Link>
            <Link to="register.html" class="text-dark"><i class="bi bi-person-add"></i></Link>
            <Link to="cart.html" class="text-dark"><i class="bi bi-cart"></i></Link>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to="index.html">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to="/product">Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to="blog.html">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to="about.html">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to="contact.html">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active text-light" aria-current="page" to="contact.html">No.of item in cart:{cart_item_length}</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
)
}
