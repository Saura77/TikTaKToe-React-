import React from "react";
import Box from "./Box";

class Board extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            class: this.props.class
        }
    }

    generateSquares = ()=> {       
        const squares = Array(9).fill(null);
        for (let i = 0; i<squares.length; i++) {
            squares[i] = <Box 
                id = {i} 
                class = {this.state.class}
                onClick={this.props.onClick}
                turn={this.props.turn}
                clean = {this.props.clean}
            />
        }
        return squares;
    }

    render(){

        return(
            <div className="container">
                {this.generateSquares()}
            </div>
        )
    }
}   

export default Board;