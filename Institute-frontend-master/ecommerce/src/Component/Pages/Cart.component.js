import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Cart = (props) => {
    const item_in_cart = useSelector(item => item.cart.cart_item)
    const dispatch = useDispatch()

    return (
        <>
            <div className="w-75 m-auto shadow-lg p-5 mb-5">
                {
                item_in_cart.length > 0
                
                ?<table className="table table-haver table-bordered text-center">
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
                            item_in_cart.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><img src={item.product_image} style={{ width: '150px' }} /></td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_price}</td>
                                    <td>
                                        <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                :<div className="alert alert-info text-center fs-4">
                There is no item in cart
                </div>
                    }
            </div>
        </>
    )
}