import React, { useEffect, useState } from "react"

export const Home = (props) => {
    // hooks
    // useState
    const [count, setCount] = useState(1)
    const [number, setNumber] = useState([1,2,3,4])

    useEffect(function(){
        alert('Count updated!!!')
    },[count])
    // var count = 1
    // const increaseCount = () =>{
    //     count++
    // }

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            {
                count < 10 && <button onClick={increaseCount}>Increase Count</button>
            }
            {

                number.map(function (item, index){
                    return <h1>{item}</h1>
                })
            }
        </div>
    )
}