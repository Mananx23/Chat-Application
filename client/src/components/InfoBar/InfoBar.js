import React from 'react'
import closeIcon from './closeIcon.png';
import onlineIcon from './onlineIcon.png';

import './InfoBar.css';


const InfoBar = ({room})=>{

    return(
        <div className="infoBar">
            <div className="leftInnerConatiner">
                <img className="onlineIcon" src={onlineIcon} alt="online image"/>
                <h3>{room}</h3>
            </div>

            <div className="rightInnerConatiner">
                <a href="/"><img src={closeIcon} alt="close image"/> </a>
            </div>
        </div>
    )

}

export default InfoBar;