import { restart } from 'nodemon';
import React,{useState, useEffect} from 'react';
import './App.css';
import Board from './Components/Board';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      turn: 1,
      tablero: Array(9).fill(null),
      clean: false,
      class: "box"
    };
  }  

  handleClick(id){
    if(this.state.tablero[id]==null){
      let turno = this.state.turn;
      const color = turno % 2 ? "pink" : "blue";
      let casillas = this.state.tablero;
      casillas[id] = color;
      this.setState({class: "box"+color});
      this.setState({tablero: casillas})
      this.setState(prevState => {
        const updateState = prevState.turn+1;
        return {
          turn: updateState
        };
      });
      if(this.hasWon(this.state.tablero)){
        alert("Felicitaciones, has ganado! ");
        this.restartGame();
      };
      this.restartVerification(this.state.tablero);
  } else {
    alert("Casilla ocupada. Seleccione otra. ");
  }
}

  restartGame(){
    let newTurn = this.state.turn; 
    newTurn = 1; 
    this.setState({turn: newTurn});
    this.cleanBoard();
    this.setState({restart: true});
  }

  cleanBoard(){
    let array = this.state.tablero;
    let i; 
    for(i=0;i<array.length;i++){
     array[i] = null;
    }
    this.setState({tablero: array});
  }

  restartVerification(array){
    let contador=0;
    let i;
    for(i=0;i<array.length;i++){
      if (array[i]!=null) {
        contador++;
      }
      if (contador == 9) {
        this.setState({clean: true})
        this.restartGame();
      }
    }
  }

  hasWon(array){
    if (array[0]==array[1]&&array[0]==array[2] && array[0]) {
      return true; 
    }else{
        if(array[3]==array[4]&&array[3]==array[5] && array[3]){
            return true;
        }else{
          if(array[6]==array[7]&&array[6]==array[8] && array[6]){
              return true;
          } else{
            if(array[0]==array[3]&&array[0]==array[6] && array[0]){
                return true;
            } else{
              if(array[1]==array[4]&&array[1]==array[7] && array[1]){
                  return true;
              }else{
                if(array[2]==array[5]&&array[2]==array[8] && array[2]){
                    return true;
                } else{
                  if(array[0]==array[4]&&array[0]==array[8] && array[0]){
                      return true;
                  } else{
                    if(array[2]==array[4]&&array[2]==array[6] && array[2]){
                        return true;
                    }
                } 
              } 
            } 
          } 
        } 
      } 
    } 
  }

  render(){      
    return (
      <Board 
      turn = {this.state.turn}
      onClick = {this.handleClick.bind(this)}
      clean={this.state.clean}
      class={this.state.class}
      />
    )
  }
}

export default App;
