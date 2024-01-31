import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card.component";

export const Blog = props => {
    const [user, setUser] = useState([])
    const [limit, setLimit] = useState(10)
    // console.log(user)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => setUser(response.data.slice(0,limit)))
        .catch((err)=> console.log(err))
    },[limit])



    return(
        <div>
            {
                user.map((item, index)=>{
                    return <Card key={index} Card_item={item}/>
                })
            }
            <div className='text-center'>
            {
                limit < 35 &&
            <button onClick={()=> setLimit(limit + 5)} >View More</button>
            }
            {
                limit > 0 &&
            <button onClick={()=> setLimit(limit - 5)}>View less</button>
            }
            </div>
        </div>
    )
}

// export default Blog