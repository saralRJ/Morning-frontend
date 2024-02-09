import React from "react";
import './Product.component.css'
import { useSelector } from "react-redux";
import Card from "../Common/Card.component";
const Product = () => {
    const products = useSelector(product => product.item)
    console.log(products.item)

    return (
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mx-3 mb-5">
                {
                    products.map((item, index) => {
                        return <Card key={index} product={item}/>
                    })
                }
            </div>
)
            }
            export default Product