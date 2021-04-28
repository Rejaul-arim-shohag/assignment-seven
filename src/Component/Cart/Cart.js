import React from 'react';

const Cart = (props) => {
    const cart = props.cart
     const totalHiringCost = cart.reduce((sum, player)=>sum +player.salary, 0)
    
    return (
        <div>
            <p>Total Hiring Cost : {totalHiringCost}</p>
        </div>
    );
};

export default Cart;