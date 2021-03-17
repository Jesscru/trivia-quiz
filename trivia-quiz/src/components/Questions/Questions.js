import React, { useState } from 'react';
import 'Questions.css';

function Questions (){
const [quizContent, setQuizContent] = useState();

setquizContent = [
      { 
          question: 'Which is the tallest building in the world?', 
          answers: [
              'A. Burj Khalifa, Dubai',
              'B. Taipei 101, Taipei',
              'C. Shanghai Tower, Shanghai',
              'D. Lotte World Tower, Seoul'
      ]
  },

      {
          question: 'How long is an olympic swimming pool?', 
          answers: [
              'A. 25 meters',
              'B. 50 meters',
              'C. 100 meters',
              'D. 150 meters'
      ]
  },
      
      {
          question: 'What did the first vending machine dispense?', 
          answers: [
              'A. Milk',
              'B. Coke',
              'C. Pepsi',
              'D. Holy Water'
      ]
  },

      {
          question: 'Where in the body is blood produced?', 
          answers: [
              'A. The bones',
              'B. The heart',
              'C. The kidneys',
              'D. The liver'
      ]
  },

      {   
          question: 'The unicorn is the national animal of which country?', 
          answers: [
              'A. Scotland',
              'B. Norway',
              'C. Denmark',
              'D. Ireland'
      ]
  },

      {   
          question: 'Which U.S. state shares the longest border with Canada?', 
          answers: [
              'A. Maine',
              'B. Minnesota',
              'C. Montana',
              'D. Alaska'
      ]
  }, 

      {   
          question: 'Which is the second largest country in South America?', 
          answers: [
              'A. Peru',
              'B. Argentina',
              'C. Chilé',
              'D. Bolivia'
      ] 
  }, 

      {   
          question: 'What does vodka mean in English?', 
          answers: [
              'A. Good taste',
              'B. Dangerous',
              'C. Little water',
              'D. Strong'
      ]
  },

      {   
          question: 'What famous band wsa involved in an accident known as Redlands Drug Bust?', 
          answers: [
              'A. The Rolling Stones',
              'B. Black Sabbath',
              'C. The Beatles',
              'D. Led Zeppelin'
      ]  
  },

      {     
          question: 'On Average, the adult heart beats on many times a minute?', 
          answers: [
              'A. 90',
              'B. 57',
              'C. 68',
              'D. 72'
      ]
      
  }];

  const correctAnswers = [ "A. Burj Khalifa, Dubai", 'B. 50 meters', 'D. Holy Water', 'A. The bones', 
  'A. Scotland', 'D. Alaska', 'B. Argentina', 'C. Little water', 'C. The Beatles', 'D. 72' ]


    // randomizes the order of the questions in the array 
  let randomized =  quizContent.sort(function(){
      return Math.round(Math.random()) - 0.5 * (Math.random() * 10);
  })

  // pulls the last 5 questions from the randomized questions and passes them into the first question function 
  let randomAndReduced = randomized.slice(5);


    return (
        <div className="quiz-data">
            <p className="questions"></p>

            <div className="answers">
                <ul className="choices">
                    <li id="answer-choice1"></li>
                    <li id="answer-choice2"></li>
                    <li id="answer-choice3"></li>
                    <li id="answer-choice4"></li>
                </ul>
            </div>

            <p className="verdict"></p>
        </div>
    )
}

export default Questions;