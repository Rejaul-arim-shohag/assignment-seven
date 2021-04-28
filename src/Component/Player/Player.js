import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props)
    const {name, salary, img} = props.player;
    const handlePlayerSelect=props.handlePlayerSelect;
    return (
        <div className="player">
            <div>
               <h3 class="name">{name}</h3>
               <p class="salary">salary : {salary}$</p>
               <button class="selectBtn" onClick={()=>handlePlayerSelect(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Select</button>
               <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default Player;