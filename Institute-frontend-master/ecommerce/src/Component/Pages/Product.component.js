import React from "react";
import './Product.component.css'
const Product = () => {
    return (
        <div>Product
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mx-3 mb-5">
            <div class="col">
            <div class="card shadow-lg">
                <div class="image-block">
                    <img src="assets/images/shoes1.jpg" class="card-img-top image-zoom" alt="..." height="300px"
                        width="300px"/>
                </div>
                <div class="card-body">
                    <h1 class="card-title">Jordan</h1>
                    <h5>Rs. 4000</h5>
                    <p class="card-text" style={{height: "80px;"}}>This is a longer card with supporting text below as a
                        natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <div class="text-center">
                        <div class="btn btn-warning">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card shadow-lg">
                <div class="image-block">
                    <img src="assets/images/shoes5.jpg" class="card-img-top image-zoom" alt="..." height="300px"
                        width="300px"/>
                </div>
                <div class="card-body">
                    <h1 class="card-title">Jordan</h1>
                    <h5>Rs. 4000</h5>
                    <p class="card-text" style={{height: '80px;'}}>This is a longer card with supporting text below as a
                        natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <div class="text-center">
                        <div class="btn btn-warning">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card shadow-lg">
                <div class="image-block">
                    <img src="assets/images/shoes4.jpg" class="card-img-top image-zoom" alt="..." height="300px"
                        width="300px"/>
                </div>
                <div class="card-body">
                    <h1 class="card-title">Jordan</h1>
                    <h5>Rs. 4000</h5>
                    <p class="card-text" style={{height: "80px;"}}>This is a longer card with supporting text below as a
                        natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <div class="text-center">
                        <div class="btn btn-warning">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card shadow-lg">
                <div class="image-block">
                    <img src="assets/images/shoes2.jpg" class="card-img-top image-zoom" alt="..." height="300px"
                        width="300px"/>
                </div>
                <div class="card-body">
                    <h1 class="card-title">Jordan</h1>
                    <h5>Rs. 4000</h5>
                    <p class="card-text" style={{height: "80px;"}}>This is a longer card with supporting text below as a
                        natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <div class="text-center">
                        <div class="btn btn-warning">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    </div>
       
    )
}

export default Product