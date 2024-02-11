import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Card = ({product}) => {
    const dispatch = useDispatch()

    function addToCart(){
        toast.success("item added to cart")
        dispatch({
            type: "Add_To_Cart",
            payload:product
        })
    }
    return (
        <div>
            <div class="col">
                            <div class="card shadow-lg">
                                <div class="image-block">
                                    <img src={product.product_image} class="card-img-top image-zoom" alt="..."  />
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title text-truncate">{product.product_name}</h1>
                                    <h5>{product.product_price}</h5>
                                    <p class="card-text" style={{ height: "80px" }}>{product.product_description}</p>
                                    <div class="text-center">
                                        <div class="btn btn-warning" onClick={addToCart}>Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default Card