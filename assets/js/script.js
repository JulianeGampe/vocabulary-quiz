/* jshint esversion: 8 */

let animalWords = animals.slice(0);
let animalWord;
let counter = 0;
let counterSpan = document.getElementById("counter");
let boxes = document.querySelectorAll(".box");
let restartGameButton = document.getElementById("restartgame");
let modalText = document.getElementById("winningtext");
let travelWords = travel.slice(0);
let travelWord;
let foodWords = food.slice(0);
let foodWord;
let wordToGuess = document.getElementById("word");
let englishWords;
let englishWord;
let quizType;

// event listener for quiz buttons
let quizButtons = document.querySelectorAll(".quiztype");
quizButtons.forEach(quizButton => {
    quizButton.addEventListener("click", function () {
        quizType = this.getAttribute("data-quiz");
        generateQuiz(quizType);
        boxes.forEach(box => {
            box.classList.remove("disable");
        });
    });
});

/**
 * set the counter back to 0 and display the counter
 * select all elements of the arrays
 * call the runQuiz function
 */
function generateQuiz(quizType) {
    counter = 0;
    counterSpan.innerText = counter;
    animalWords = animals.slice(0);
    travelWords = travel.slice(0);
    foodWords = food.slice(0);
    runQuiz(quizType);
}

// event listeners for each German word box
boxes.forEach(box => {
    box.addEventListener("click", function () {
        compareAnswer(box, quizType);
    });
});

/**
 * runs the quiz according to the choosen quiz type:
 * runs the function to display the randomized english word
 * populates the German words boxes and the english word at the top
 * calls the compareAnswer function once a german word box is clicked
 */
function runQuiz(quizType) {
    switch (quizType) {

        // quizType logic for animals 
        case "animals":
            animalWord = wordToGuess;
            nextWord(animals);
            // generate german word boxes for animals
            boxes.forEach(function (box, i) {
                box.setAttribute("data-vocab", animals[i].en);
                box.innerText = animals[i].de;
            });
            break;

            // quizType logic for travel
        case "travel":
            travelWord = wordToGuess;
            nextWord(travel);
            // generate german word boxes for travel
            boxes.forEach(function (box, i) {
                box.setAttribute("data-vocab", travel[i].en);
                box.innerText = travel[i].de;
            });
            break;

            // quizType logic for food
        case "food":
            foodWord = wordToGuess;
            nextWord(food);
            // generate german word boxes for food
            boxes.forEach(function (box, i) {
                box.setAttribute("data-vocab", food[i].en);
                box.innerText = food[i].de;
            });
            break;
    }
}

/**
 * compare function
 * if correct - alert correct and display new english word
 * if incorrect - alert incorrect, try again and continue
 * in both cases increase number of attempts
 * alert after all nine words are found
 */
function compareAnswer(box, quizType) {
    switch (quizType) {
        case "animals":
            if (animalWord.innerText === box.getAttribute("data-vocab")) {
                calculateAttempts();
                box.classList.add("correct");
                if (animalWords.length > 0) {
                    nextWord(animals);
                } else {
                    win();
                }
            } else {
                calculateAttempts();
                box.classList.add("incorrect");
            }
            setTimeout(() => {
                box.classList.remove("correct", "incorrect");
            }, 1000);
            break;

        case "travel":
            if (travelWord.innerText === box.getAttribute("data-vocab")) {
                calculateAttempts();
                box.classList.add("correct");
                if (travelWords.length > 0) {
                    nextWord(travel);
                } else {
                    win();
                }
            } else {
                calculateAttempts();
                box.classList.add("incorrect");
            }
            setTimeout(() => {
                box.classList.remove("correct", "incorrect");
            }, 1000);
            break;

        case "food":
            if (foodWord.innerText === box.getAttribute("data-vocab")) {
                calculateAttempts();
                box.classList.add("correct");
                if (foodWords.length > 0) {
                    nextWord(food);
                } else {
                    win();
                }
            } else {
                calculateAttempts();
                box.classList.add("incorrect");
            }
            setTimeout(() => {
                box.classList.remove("correct", "incorrect");
            }, 1000);
            break;
    }
}

/**
 * increase attempts by one each time a germanword box is clicked
 */
function calculateAttempts() {
    counter = counter + 1;
    counterSpan.innerText = counter;
}

/**
 * if clicked set the english word to 0
 * if clicked set number of attempts to 0
 */
function restartGame() {
    location.reload();
}

restartGameButton.addEventListener("click", restartGame);

/**
 * set englishWords and englishWord according to gameType
 * choose a random number within the length of the englishWords array to choose a random english word
 * set the innerText of the englishWord box to the choosen english word
 * remove the choosen english word from the englishWords array so that it does not appear again
 */
function nextWord(quizType) {
    if (quizType === animals) {
        englishWords = animalWords;
        englishWord = animalWord;
    } else if (quizType === travel) {
        englishWords = travelWords;
        englishWord = travelWord;
    } else if (quizType === food) {
        englishWords = foodWords;
        englishWord = foodWord;
    }

    let currentWord = Math.floor(Math.random() * englishWords.length);
    englishWord.innerText = englishWords[currentWord].en;
    let englishIndex = englishWords.indexOf(englishWords[currentWord]);
    englishWords.splice(englishIndex, 1);
}

/* Modal that displays when the quiz is finished */
/* code taken from w3schools.com/howto/howto_css_modal.asp */
let modal = document.getElementById("winModal");
let closeButton = document.getElementById("close");

function win() {
    modal.style.display = "block";
    modalText.innerText = `Congratulations! You found all the word pairs! You used ${counter} attempts.\n\nThe minimum possible is 9.`;
}

/* when the user clicks the modal close button */
closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    restartGame();
})

/* when the user clicks outside of the modal it closes */
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        restartGame();
    }
})