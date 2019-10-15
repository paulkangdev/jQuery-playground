var UIController = (function() {
    var DOMstrings = {
        mainWrapper: '.main-wrapper',
        qDisplay: '.question-display',
        rightBanner: '.right-banner',
        timer: '.timer',
        qRemaining: '.questions-remaining',
        playerScore: '.player-score',
        qRight: '.questions-right',
        totalQuestions: '.total-questions',
        qWrong: '.questions-wrong',
        answerA: '.answer-a',
        answerB: '.answer-b',
        answerC: '.answer-c',
        answerD: '.answer-d'
    };
    
   return {
        getDOMstrings: function () {
            return DOMstrings;
        },
       
        displayNewQuestion: function(num) {
            document.querySelector(DOMstrings.qDisplay).textContent = questionController.getQuestion(num).question;
            document.querySelector(DOMstrings.answerA).textContent = "A. " + questionController.getQuestion(num).a;
            document.querySelector(DOMstrings.answerB).textContent = "B. " + questionController.getQuestion(num).b;
            document.querySelector(DOMstrings.answerC).textContent = "C. " + questionController.getQuestion(num).c;
            document.querySelector(DOMstrings.answerD).textContent = "D. " + questionController.getQuestion(num).d;

        }
    };
    
})();

var questionController = (function() {
    function Question(question, a, b, c, d, correct, id) {
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.correct = correct;
        this.id = id;
    }
    
    var questionOne = new Question ("What is the name of the current President of the United States?",
        "Donald Trump",
        "Barack Obama",
        "George Bush",
        "Tweedle Dee",
        "a",
        0);
        
    var questionTwo = new Question ("What is the name of my dog?",        
        "Sam",
        "Ollie",
        "Josephine",
        "Elephante",
        "b",
        1);

    var questionThree = new Question ("What is JavaScript?",
        "Cool",
        "Hard",
        "Fun",
        "All of the Above",
        "d",
        2);
    
    var questionList = [questionOne, questionTwo, questionThree];
    
//    var addQuestionsToList = function() {
//        for(i=0; i<questionList.length;i++){
//            questionList.push(
//        }
//            
//    }
    
    var removeQuestionFromList = function(num) {
        questionList = questionList.splice(num, 1);
    }
    
    return {
        getQuestion: function(x) {
            return questionList[x];
        }
        
    };
})();

var globalController = (function (UICtrl) {
        var quizAnswerBtn = function() {
                console.log("You are clicking on the main wrapper");
            }
        
        var setupEventListeners = function () {
            var DOM = UICtrl.getDOMstrings();
            document.addEventListener("keydown", event => {
                
                const keyName = event.key;
                switch(keyName) {
                    case 'a':
                        console.log("a Pressed");
                        break;
                    case 'A':
                        console.log("A pressed");
                        break;
                    case 'b':
                        console.log("b Pressed");
                        break;
                    case 'B':
                        console.log("B pressed");
                        break;
                    case 'c':
                        console.log("c Pressed");
                        break;
                    case 'C':
                        console.log("C pressed");
                        break;
                   case 'd':
                        console.log("d Pressed");
                        break;
                    case 'D':
                        console.log("D pressed");
                        break;
                }
        
        });
        
            document.querySelector(DOM.mainWrapper).addEventListener('click', quizAnswerBtn);
        
    }
    
    
    
    return {
        init: function() {
            console.log("Init'd");
            setupEventListeners();
        }
    }
    
})(UIController);

globalController.init();
UIController.displayNewQuestion(1);