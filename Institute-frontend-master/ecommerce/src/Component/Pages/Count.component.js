import React from "react";
import { useSelector } from "react-redux";

const Count = () =>{
    const count = useSelector(data =>data)
    return(
        <div>Count: {count.count}</div>
    )
}
export default Count