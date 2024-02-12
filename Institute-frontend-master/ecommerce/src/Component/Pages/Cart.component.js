import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Cart = (props) => {
    const item_in_cart = useSelector(item=>item.cart.cart_item)
    const dispatch = useDispatch()

    function removeItem(){
        toast.warning(item_in_cart.product_name, 'removed from the cart')
        dispatch({
            type:"Remove_From_Cart",
            payload: item_in_cart
        })
    }
    return(
        <>
        <div className ="w-75 m-auto shadow-lg p-5 mb-5">
<table className="table table-haver table-bordered text-center">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            item_in_cart.map((item, index)=>{
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={item.product_image} style={{width:'150px'}}/></td>
                    <td>{item.product_name}</td>
                    <td>{item.product_price}</td>
                    <td onClick={removeItem}>
                    <i class="bi bi-trash fs-3 text-danger" ></i>
                    </td>
                    
                </tr>
            })
        }
        </tbody>
</table>

        </div>
        </>
    )
}