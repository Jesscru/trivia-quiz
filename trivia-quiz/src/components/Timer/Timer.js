import React, { useState, useEffect } from 'react';
import './Timer.css'; 
import Instructions from '../Instructions/Instructions';


function Timer(){

    // sets initial time to start at 7500 ms
    const [initTime, setInitTime] = useState(75000);
    // converts (init)time to seconds 
    const [changeToSec, setChangeToSec] = useState(initTime / 1000);

      // starts an interval at 75 seconds and counts down by 1s
      useEffect(() => {
        const interval = setInterval(() => {
          setChangeToSec(changeToSec => changeToSec - 1);
        }, 1000);
        return () => {
            if (changeToSec === 0) {
            clearInterval(interval);
            };
        }
      }, []);


    return (
        <>
        <div className="timer">{changeToSec} seconds remaining</div>
        <Instructions setInterval={setInterval}/>
        </>
    )
    
}


export default Timer;