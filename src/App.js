import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import player from './data/data.json'
import Player from './Component/Player/Player';
import Cart from './Component/Cart/Cart';

function App() {
const [players, setPlayers] = useState([]);
const [cart, setCart] = useState([])
useEffect(()=>{
  setPlayers(player)
}, [])

const handlePlayerSelect=(player)=>{
  const newCart=[...cart, player];
  setCart(newCart)
}
  return (
    <div className="App">
      <div className="app-container">
      <h2> Player Loaded : {players.length}</h2>
      <h2>Selected players: {cart.length}</h2>
      <Cart cart={cart} handlePlayerSelect={handlePlayerSelect}></Cart>
          {
            players.map(player=><Player player={player} handlePlayerSelect={handlePlayerSelect}></Player>)
          }
      </div>
    </div>
  );
}

export default App;
