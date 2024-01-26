import React, { useEffect, useState } from "react"

export const Home = (props) => {
    // hooks
    // useState
    const [count, setCount] = useState(1)
    const [formData, setFormData]=useState('')
    const [number, setNumber] = useState([1,2,3,4])

    useEffect(function(){
        alert('state change')
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

    const handleChange = e => {
        setFormData(e.target.value)
    }
    const handleClick = e => {
        setNumber([...number, formData])
    }
    return (
        <div>
            <h1>{count}</h1>
            {
                count < 10 && <button onClick={increaseCount}>Increase Count</button>
            }
            <br/>
            <input type='text' name="number" onChange={handleChange}/>
            <br/>
            <button onClick={handleClick}>Add element</button>

            {
                number.map(function (item, index){
                    return <h1 key={index}>{item}</h1>
                })
            }
        </div>
    )
}