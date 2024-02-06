import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () =>{
    const data = useSelector(data =>data)

    const counts = data.count.count
    const games = data.game.gameName
    
    const[game, setGame] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = e =>{
        dispatch({
            type:'Change_game',
            payload:game
        })
    }

    const[count, setCount] = useState('')
    // const dispatch = useDispatch()
    const handleChange = e =>{
        dispatch({
            type:'Change_count',
            payload:count
        })
    }
    return(
        <>
        <div>Count: {counts}</div>
        <div>Game: {games}</div>
        Update game:
        <input type="text" onChange={e => setGame(e.target.value)}/>
        <br></br>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        Update count:
        <input type='text' onChange={e=>setCount(e.target.value)}/>
        <button type='submit' onClick={handleChange}>Countchange</button>
        </>
    )
}
export default Count