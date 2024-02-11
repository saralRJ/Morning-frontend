import React from "react";
import { useSelector } from "react-redux";

export const Cart = (props) => {
    const item_in_cart = useSelector(item=>item.cart)
    return(
        <>
        <div className ="w-75 m-auto shadow-lg p-5">
<table className="table table-haver table-bordered">
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
                    <td>
                        <button className='btn btn-danger'>Delete</button>
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