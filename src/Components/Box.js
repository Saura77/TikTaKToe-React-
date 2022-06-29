import React from "react";
import './Box.css';

class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className: this.props.className,
            firstClick: false
        }
        this.changeClass = this.changeClass.bind(this);
    }

    changeClass(){
        if(!this.state.firstClick){
            let newName = this.state.className;
            let actualTurn = this.props.turn;
            newName = actualTurn%2 ? newName+"pink" : newName+"blue";
            this.setState({className: newName, firstClick: true});
            if (this.props.restart) {
                newName = "box";
                this.setState({className: newName, firstClick: true});
            }
        }
    }

    render(){

        return(
            <div 
                onClick={()=>{
                    this.props.onClick(this.props.id); 
                    this.changeClass();
                }}
                className={this.state.className}
                >
                <p>.</p>
            </div>
        )
    }
}

export default Box;
