import React,{useState, useEffect} from 'react';
import './App.css';
import { Box } from './Components/Box';



function App() {

  const [turn, setTurn] = useState(1);
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [score, setScore] = useState({
    X: 0,
    O: 0
  });
  

  const handleClick = ()=>{    
    //const backgroundColor = turn % 2 ? "pink" : "blue";
    //Box.backgroundColor = backgroundColor;
    setTurn(turn+1);
    alert(turn);

  }

  return (
    <div className='container'>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
        <Box handleClick = {handleClick}/>
    </div>
  );
}

export default App;
