$(document).ready(function() {


    //  global variables 
    const questions = $('.questions');
    const answers = $(".answers");
    const answerChoices = $('.choices');
    const nextQuestion = $('.arrow');
    const correctAnswer = 'That\'s right! Keep it up! :)';
    const incorrectAnswer = 'Oh boy. That\'s not it. -15 score points :('

    const quizContent = [
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

    const correctAnswers = ["A. Burj Khalifa, Dubai", 'B. 50 meters', 'D. Holy Water', 'A. The bones', 
    'A. Scotland', 'D. Alaska', 'B. Argentina', 'C. Little water', 'C. The Beatles', 'D. 72']


    // randomizes the order of the questions in the array 
    let randomized =  quizContent.sort(function(){
        return Math.round(Math.random()) - 0.5 * (Math.random() * 10);
    })

    // pulls the last 5 questions from the randomized questions and passes them into the first question function 
    let randomAndReduced = randomized.slice(5);

    // const userInitials = $('.initials').trim().val();



    // displays the first question and its corresponding answer choices 
    const displayQ1 = () => {
        // display question 
        questions.html(randomAndReduced[0].question);
        // display answer choices 
        for (var i = 0; i < randomAndReduced[0].answers.length - 1; i++) {
            $('#answer-choice1').html(randomAndReduced[0].answers[0]);
            $('#answer-choice2').html(randomAndReduced[0].answers[1]);
            $('#answer-choice3').html(randomAndReduced[0].answers[2]);
            $('#answer-choice4').html(randomAndReduced[0].answers[3]);
            answers.append(answerChoices);
        }

        // when an answer is chosen, it is checked and a message is displayed accordingly 
        answerChoices.on('click', function(e){
            console.log(e.target.innerHTML);
            // loop through possible correct answers. If matched = correct
            for (let i = 0; i < correctAnswers.length; i++){
                
                if (correctAnswers.includes(e.target.innerHTML)) {
                    displayQ2();

                    // display the correct answer message
                    $(".verdict").html(correctAnswer);

                    // remove the correct answer message after 3 seconds 
                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                    
                    
                } 
                
                else {
                    displayQ2();

                    // display the incorrect answer message for 3 seconds 
                    $(".verdict").html(incorrectAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                }
            }
        });
    }    


    // displays the second question and its corresponding answer choices, then the answer is checked 
    const displayQ2 = () => {
      
        questions.html(randomAndReduced[1].question);

        for (var i = 0; i < randomAndReduced[1].answers.length - 1; i++) {
            $('#answer-choice1').html(randomAndReduced[1].answers[0]);
            $('#answer-choice2').html(randomAndReduced[1].answers[1]);
            $('#answer-choice3').html(randomAndReduced[1].answers[2]);
            $('#answer-choice4').html(randomAndReduced[1].answers[3]);
            answers.append(answerChoices);
        }

        answerChoices.on('click', function(e){
            console.log(e.target.innerHTML);
            for (let i = 0; i < correctAnswers.length; i++){
                
                if (correctAnswers.includes(e.target.innerHTML)) {
                    displayQ3();

                    $(".verdict").html(correctAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                    
                    
                } 
                
                else {
                    displayQ3();

                    $(".verdict").html(incorrectAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                }
            }
        });
    }

    // displays the second question and its corresponding answer choices, then the answer is checked 
    const displayQ3 = () => {
      
        questions.html(randomAndReduced[2].question);

        for (var i = 0; i < randomAndReduced[2].answers.length - 1; i++) {
            $('#answer-choice1').html(randomAndReduced[2].answers[0]);
            $('#answer-choice2').html(randomAndReduced[2].answers[1]);
            $('#answer-choice3').html(randomAndReduced[2].answers[2]);
            $('#answer-choice4').html(randomAndReduced[2].answers[3]);
            answers.append(answerChoices);
        }
        
        answerChoices.on('click', function(e){
            console.log(e.target.innerHTML);
            for (let i = 0; i < correctAnswers.length; i++){
                
                if (correctAnswers.includes(e.target.innerHTML)) {
                    displayQ4();

                    $(".verdict").html(correctAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                    
                    
                } 
                
                else {
                    displayQ4();

                    $(".verdict").html(incorrectAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                }
            }
        });
    }

    // displays the second question and its corresponding answer choices, then the answer is checked 
    const displayQ4 = () => {
      
        questions.html(randomAndReduced[3].question);

        for (var i = 0; i < randomAndReduced[3].answers.length - 1; i++) {
            $('#answer-choice1').html(randomAndReduced[3].answers[0]);
            $('#answer-choice2').html(randomAndReduced[3].answers[1]);
            $('#answer-choice3').html(randomAndReduced[3].answers[2]);
            $('#answer-choice4').html(randomAndReduced[3].answers[3]);
            answers.append(answerChoices);
        }

        answerChoices.on('click', function(e){
            console.log(e.target.innerHTML);
            for (let i = 0; i < correctAnswers.length; i++){
                
                if (correctAnswers.includes(e.target.innerHTML)) {
                    displayQ5();
                    
                    $(".verdict").html(correctAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                    
                    
                } 
                
                else {
                    displayQ5();
                    $(".verdict").html(incorrectAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                }
            }
        });        
    }

    // displays the second question and its corresponding answer choices, then the answer is checked  
    const displayQ5 = () => {
      
        questions.html(randomAndReduced[4].question);

        for (var i = 0; i < randomAndReduced[4].answers.length - 1; i++) {
            $('#answer-choice1').html(randomAndReduced[4].answers[0]);
            $('#answer-choice2').html(randomAndReduced[4].answers[1]);
            $('#answer-choice3').html(randomAndReduced[4].answers[2]);
            $('#answer-choice4').html(randomAndReduced[4].answers[3]);
            answers.append(answerChoices);
        }
        
        answerChoices.on('click', function(e){
            console.log(e.target.innerHTML);
            for (let i = 0; i < correctAnswers.length; i++){
                
                if (correctAnswers.includes(e.target.innerHTML)) {
                    
                    $(".verdict").html(correctAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                    
                    
                } 
                
                else {

                    $(".verdict").html(incorrectAnswer);

                    setTimeout(function () {
                        $(".verdict").html(""); 
                    }, 3000);
                }
            }
        });
    }


    


    // when hovering over the arrow, it will be filled in and otherwise, un-filled 
    nextQuestion.on('mouseleave', function(){
        nextQuestion.attr('src', './images/open-arrow.png')
    });

    nextQuestion.on('mouseenter', function(){
        nextQuestion.attr('src', './images/filled-arrow.png')
    });

    // answers.on('click', );
    // when start button is clicked, the first question is displayed and the appropriate compenents disappear
    $('.start-quiz').on('click', displayQ1());

});