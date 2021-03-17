import React from 'react';
import './Instructions.css';


function Instructions(props){

    return (
        <div className="instructions">
            <h1>Welcome!</h1>

            <h3>Please enter a nickname or initials below 
                and click the start quiz button when you're ready to begin the quiz.</h3>

            <input className="initials"></input>

            <button onClick={props.setInterval} className="start-quiz">Start Quiz</button>
        </div>
      
    );
}


export default Instructions;