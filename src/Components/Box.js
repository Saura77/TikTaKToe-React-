import React from "react";
import './Box.css';

export function Box(props){
       
    return(
        <div 
            className="box"
            onClick={props.handleClick}
        > 
                   
        </div>
    )
}