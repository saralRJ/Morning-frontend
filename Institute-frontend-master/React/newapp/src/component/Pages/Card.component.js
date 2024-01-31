import React from "react";

export const Card = ({Card_item}) => {
    return(
        <div className="text-center">
            <h1>Id: {Card_item.id}</h1>
            <h3>Title: {Card_item.title}</h3>
            <p>Body: {Card_item.body}</p>
            <hr></hr>
        </div>
    )
}