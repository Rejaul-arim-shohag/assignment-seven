import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import player from './data/data.json'

function App() {
const [playe, setPlayer] = useState([])
useEffect(()=>{
  console.log(player)
}, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
