import React, { useState } from "react"

export const Home = (props) => {
    // hooks
    // useState
    const [count, setCount]=useState(1)
    // var count = 1
    // const increaseCount = () =>{
    //     count++
    // }

    const increaseCount = () => {
        setCount(count + 1)
    } 

    const decreaseCount = () =>{
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
          {
            count <= 10 && <button onClick={increaseCount}>Increase Count</button>    
        }
        {
        count >= 0 && <button onClick={decreaseCount}>Decrease Count</button>
        }
        </div>
    )
}