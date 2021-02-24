$(document).ready(function() {
//  global variables 
// const userInitials = $('.initials').trim().val();
const quizContent = [
    { 
        question: 'Which is the tallest building in the world?', 
        answers: [
            'A. Burj Khalifa, Dubai',
            'B. Taipei 101, Taipei',
            'C. Shanghai Tower, Shanghai',
            'D. Lotte World Tower, Seoul'
    ], 
        correctAnswer: "A"
},

    {
        question: 'How long is an olympic swimming pool?', 
        answers: [
            'A. 25 meters',
            'B. 50 meters',
            'C. 100 meters',
            'D. 150 meters'
    ], 
        correctAnswer: 'B'
},
    
    {
        question: 'What did the first vending machine dispense?', 
        answers: [
            'A. Milk',
            'B. Coke',
            'C. Pepsi',
            'D. Holy Water'
    ], 
        correctAnswer: 'D'
},

    {
        question: 'Where in the body is blood produced?', 
        answers: [
            'A. The bones',
            'B. The heart',
            'C. The kidneys',
            'D. The liver'
    ], 
        correctAnswer: 'A'
},

    {   
        question: 'The unicorn is the national animal of which country?', 
        answers: [
            'A. Scotland',
            'B. Norway',
            'C. Denmark',
            'D. Ireland'
    ], 
        correctAnswer: 'A'
       
},
{   
    question: 'Which U.S. state shares the longest border with Canada?', 
    answers: [
        'A. Maine',
        'B. Minnesota',
        'C. Montana',
        'D. Alaska'
], 
    correctAnswer: 'D'
   
}, 
{   
    question: 'Which is the second largest country in South America?', 
    answers: [
        'A. Peru',
        'B. Argentina',
        'C. Chilé',
        'D. Bolivia'
], 
    correctAnswer: 'B'
   
}, 
{   
    question: 'What does vodka mean in English?', 
    answers: [
        'A. Good taste',
        'B. Dangerous',
        'C. Little water',
        'D. Strong'
], 
    correctAnswer: 'C'
   
},
{   
    question: 'What famous band wsa involved in an accident known as Redlands Drug Bust?', 
    answers: [
        'A. The Rolling Stones',
        'B. Black Sabbath',
        'C. The Beatles',
        'D. Led Zeppelin'
], 
    correctAnswer: 'C'
   
},
{   
    question: 'On Average, the adult heart beats on many times a minute?', 
    answers: [
        'A. 90',
        'B. 57',
        'C. 68',
        'D. 72'
], 
    correctAnswer: 'D'
}];



// displays the questions and answers choices from the quizcontent array 
const displayQuestions = () => {

    // randomizes the order of the questions in the array 
   let randomized =  quizContent.sort(function(){
        return Math.round(Math.random()) - 0.5 * (Math.random() * 10);
    })

    // pulls the last 5 questions from the randomized questions
    let randomAndReduced = randomized.slice(5);

    for (let i = 0; i < randomAndReduced.length; i++) {
        $('.questions').html(randomAndReduced[i].question);
        randomAndReduced[i].answers.forEach(answer => {
            $('.answer-choice').html(answer);
            $(".answers").append($('<li class="answer-choice"><li>'));
            console.log(answer);
            })
        }
    
    }
    displayQuestions();






});