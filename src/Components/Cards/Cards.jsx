import React from "react";
import './Cards.css'

const Cards = (props) => {
    return(
        <div className="card-item">
            <h1>{props.title}</h1>
                <pre>{props.content}</pre>
            <a href={props.link}>{props.linkName}</a>
        </div>
    );
}

export default Cards;