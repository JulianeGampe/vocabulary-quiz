/* jshint esversion: 8 */

const animals = ["dog", "cat", "fish", "giraffe", "tiger", "lion", "guinea pig", "cheetah", "horse"];
let englishWords = animals.slice(0);
let counter = 0;
let counterSpan = document.getElementById("counter");
let englishWord = document.getElementById("word");
let boxes = document.querySelectorAll(".box");
let restartGameButton = document.getElementById("restartgame");
let modalText = document.getElementById("winningtext");


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

    }
}

/**
 * compare function
 * if correct - alert correct and display new english word
 * if incorrect - alert incorrect, try again and continue
 * in both cases increase number of attempts
 * alert after all nine words are found
 */
function compareAnswer(box) {
    if (englishWord.innerText === box.getAttribute("data-vocab")) {
        calculateAttempts();
        box.classList.add("correct");
        if(englishWords.length > 0) {
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

boxes.forEach(box => {
    box.addEventListener("click", function() {
        compareAnswer(box);
    });
});


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
    counter = 0;
    counterSpan.innerText = counter;
    englishWords = animals.slice(0);
    nextAnimal();
}

restartGameButton.addEventListener("click", restartGame);

/**
 * choose a random number within the length of the englishWords array to choose a random animal
 * set the innerText of the englishWord box to the choosen animal
 * remove the choosen animal from the englishWords array so that it does not appear again
 */
nextAnimal();
function nextAnimal() {
    let currentAnimal = Math.floor(Math.random() * englishWords.length);
    englishWord.innerText = englishWords[currentAnimal];
    let animalIndex = englishWords.indexOf(englishWords[currentAnimal]);
    englishWords.splice(animalIndex, 1);
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