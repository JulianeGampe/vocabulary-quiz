/* jshint esversion: 8 */

const animals = ["dog", "cat", "fish", "giraffe", "tiger", "lion", "guinea pig", "cheetah", "horse"];
let animalWords = animals.slice(0);
let animalWord = document.getElementById("word");
let counter = 0;
let counterSpan = document.getElementById("counter");
let boxes = document.querySelectorAll(".box");
let restartGameButton = document.getElementById("restartgame");
let modalText = document.getElementById("winningtext");
const travel = ["backpack", "suitcase", "airport", "airplane", "train", "main station", "sight", "beach", "holiday"];
let travelWords = travel.slice(0);
let travelWord = document.getElementById("word");


// Event listener for quiz buttons
let quizButtons = document.getElementsByClassName("quiztype");
for(let quizButton of quizButtons) {
    quizButton.addEventListener("click", function() {
        let quizType = this.getAttribute("data-quiz");
        runQuiz(quizType);
    })
}

/**
 * runs the quiz according to the choosen quiz type
 */
function runQuiz(quizType) {
    if(quizType === "animals") {

        nextAnimal();

        document.getElementById("box1").setAttribute("data-vocab", "horse");
        let germanWordOne = document.getElementById("box1");
        germanWordOne.innerText = "Pferd";

        document.getElementById("box2").setAttribute("data-vocab", "giraffe");
        let germanWordTwo = document.getElementById("box2");
        germanWordTwo.innerText = "Giraffe";

        document.getElementById("box3").setAttribute("data-vocab", "fish");
        let germanWordThree = document.getElementById("box3");
        germanWordThree.innerText = "Fisch";

        document.getElementById("box4").setAttribute("data-vocab", "dog");
        let germanWordFour = document.getElementById("box4");
        germanWordFour.innerText = "Hund";

        document.getElementById("box5").setAttribute("data-vocab", "tiger");
        let germanWordFive = document.getElementById("box5");
        germanWordFive.innerText = "Tiger";

        document.getElementById("box6").setAttribute("data-vocab", "cat");
        let germanWordSix = document.getElementById("box6");
        germanWordSix.innerText = "Katze";

        document.getElementById("box7").setAttribute("data-vocab", "guinea pig");
        let germanWordSeven = document.getElementById("box7");
        germanWordSeven.innerText = "Meerschweinchen";

        document.getElementById("box8").setAttribute("data-vocab", "cheetah");
        let germanWordEight = document.getElementById("box8");
        germanWordEight.innerText = "Gepard";

        document.getElementById("box9").setAttribute("data-vocab", "lion");
        let germanWordNine = document.getElementById("box9");
        germanWordNine.innerText = "Löwe";

        boxes.forEach(box => {
            box.addEventListener("click", function() {
                compareAnswer(box, quizType);
            });
        });
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
    if(quizType === "animals") {

        if (animalWord.innerText === box.getAttribute("data-vocab")) {
            calculateAttempts();
            box.classList.add("correct");
            if(animalWords.length > 0) {
                nextAnimal();
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
    }
}

/**
 * increase attempts by one each time a germanword box is clicked
 */
 function calculateAttempts () {
    counter++;
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
 * choose a random number within the length of the englishWords array to choose a random animal
 * set the innerText of the englishWord box to the choosen animal
 * remove the choosen animal from the englishWords array so that it does not appear again
 */
function nextAnimal() {
    let currentAnimal = Math.floor(Math.random() * animalWords.length);
    animalWord.innerText = animalWords[currentAnimal];
    let animalIndex = animalWords.indexOf(animalWords[currentAnimal]);
    animalWords.splice(animalIndex, 1);
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
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
    restartGame();
})

/* when the user clicks outside of the modal it closes */
window.addEventListener("click", function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
        restartGame();
    }
})