import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const cart = props.cart
     const totalHiringCost = cart.reduce((sum, player)=>sum +player.salary, 0)
    
    return (
        <div className="cart">
            <div>
            <p class="cost">Total Hire Cost : {totalHiringCost}</p>
            <p class="selcetPlayer">Selected Players Information</p>
            <ol>
            {
                cart.map(player =><li><small>Name : </small>{player.name} <small class="salary">Salary: </small> {player.salary}</li>)
            }
            </ol>
            </div>
        </div>
    );
};

export default Cart;