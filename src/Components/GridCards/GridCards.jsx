import React from "react";
import './GridCards.css'

const GridCards = (props) => {
    return(
        <div className="grid">
          {props.children}
        </div>
    );
}

export default GridCards;