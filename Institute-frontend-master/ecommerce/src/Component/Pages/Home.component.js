import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
    const product_images = useSelector(images => images.item)
    console.log(product_images)
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    {
                        product_images.map((imgsrc, index) => {

                          return <div class="carousel-item active" height="800px">
                                <img src={imgsrc.product_image} class="d-block w-50 m-auto" alt="..." height="800px" />
                            </div>
                        })
                    }
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}