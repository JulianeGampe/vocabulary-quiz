/* jshint esversion: 8 */

const animals = ["dog", "cat", "fish", "giraffe", "tiger", "lion", "guinea pig", "cheetah", "horse"];
let animalWords = animals.slice(0);
let animalWord;
let counter = 0;
let counterSpan = document.getElementById("counter");
let boxes = document.querySelectorAll(".box");
let restartGameButton = document.getElementById("restartgame");
let modalText = document.getElementById("winningtext");
const travel = ["backpack", "suitcase", "airport", "airplane", "train", "main station", "sight", "beach", "holiday"];
let travelWords = travel.slice(0);
let travelWord;
const food = ["strawberry", "milk", "egg", "bread", "soup", "apple", "cookie", "pineapple", "cake"];
let foodWords = food.slice(0);
let foodWord;
let wordToGuess = document.getElementById("word");
let englishWords;
let englishWord;

// Event listener for quiz buttons
let quizButtons = document.getElementsByClassName("quiztype");
for (let quizButton of quizButtons) {
    quizButton.addEventListener("click", function () {
        counter = 0;
        counterSpan.innerText = counter;
        animalWords = animals.slice(0);
        travelWords = travel.slice(0);
        foodWords = food.slice(0);
        let quizType = this.getAttribute("data-quiz");
        runQuiz(quizType);

        boxes.forEach(box => {
            box.addEventListener("click", function () {
                compareAnswer(box, quizType);
            });
        });
    });
}

/**
 * runs the quiz according to the choosen quiz type:
 * runs the function to display the randomized english word
 * populates the German words boxes and the english word at the top
 * calls the compareAnswer function once a german word box is clicked
 */
function runQuiz(quizType) {
    if (quizType === "animals") {
        animalWord = wordToGuess;
        foodWord = null;
        travelWord = null;
        nextWord(animals);

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

    } else if (quizType === "travel") {
        travelWord = wordToGuess;
        animalWord = null;
        foodWord = null;
        nextWord(travel);

        document.getElementById("box1").setAttribute("data-vocab", "backpack");
        let germanWordOne = document.getElementById("box1");
        germanWordOne.innerText = "Rucksack";

        document.getElementById("box2").setAttribute("data-vocab", "suitcase");
        let germanWordTwo = document.getElementById("box2");
        germanWordTwo.innerText = "Koffer";

        document.getElementById("box3").setAttribute("data-vocab", "airport");
        let germanWordThree = document.getElementById("box3");
        germanWordThree.innerText = "Flughafen";

        document.getElementById("box4").setAttribute("data-vocab", "airplane");
        let germanWordFour = document.getElementById("box4");
        germanWordFour.innerText = "Flugzeug";

        document.getElementById("box5").setAttribute("data-vocab", "train");
        let germanWordFive = document.getElementById("box5");
        germanWordFive.innerText = "Zug";

        document.getElementById("box6").setAttribute("data-vocab", "main station");
        let germanWordSix = document.getElementById("box6");
        germanWordSix.innerText = "Hauptbahnhof";

        document.getElementById("box7").setAttribute("data-vocab", "sight");
        let germanWordSeven = document.getElementById("box7");
        germanWordSeven.innerText = "Sehenswürdigkeit";

        document.getElementById("box8").setAttribute("data-vocab", "beach");
        let germanWordEight = document.getElementById("box8");
        germanWordEight.innerText = "Strand";

        document.getElementById("box9").setAttribute("data-vocab", "holiday");
        let germanWordNine = document.getElementById("box9");
        germanWordNine.innerText = "Urlaub";

    } else if (quizType === "food") {
        foodWord = wordToGuess;
        travelWord = null;
        animalWord = null;
        nextWord(food);

        document.getElementById("box1").setAttribute("data-vocab", "strawberry");
        let germanWordOne = document.getElementById("box1");
        germanWordOne.innerText = "Erdbeere";

        document.getElementById("box2").setAttribute("data-vocab", "milk");
        let germanWordTwo = document.getElementById("box2");
        germanWordTwo.innerText = "Milch";

        document.getElementById("box3").setAttribute("data-vocab", "egg");
        let germanWordThree = document.getElementById("box3");
        germanWordThree.innerText = "Ei";

        document.getElementById("box4").setAttribute("data-vocab", "bread");
        let germanWordFour = document.getElementById("box4");
        germanWordFour.innerText = "Brot";

        document.getElementById("box5").setAttribute("data-vocab", "soup");
        let germanWordFive = document.getElementById("box5");
        germanWordFive.innerText = "Suppe";

        document.getElementById("box6").setAttribute("data-vocab", "apple");
        let germanWordSix = document.getElementById("box6");
        germanWordSix.innerText = "Apfel";

        document.getElementById("box7").setAttribute("data-vocab", "cookie");
        let germanWordSeven = document.getElementById("box7");
        germanWordSeven.innerText = "Keks";

        document.getElementById("box8").setAttribute("data-vocab", "pineapple");
        let germanWordEight = document.getElementById("box8");
        germanWordEight.innerText = "Ananas";

        document.getElementById("box9").setAttribute("data-vocab", "cake");
        let germanWordNine = document.getElementById("box9");
        germanWordNine.innerText = "Kuchen";

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
    if (quizType === "animals") {
        if (animalWord === null) {
            return;
        }
        if (animalWord.innerText === box.getAttribute("data-vocab")) {
            box.classList.add("correct");
            if (animalWords.length > 0) {
                nextWord(animals);
            } else {
                win();
            }
        } else {
            box.classList.add("incorrect");
        }
        setTimeout(() => {
            box.classList.remove("correct", "incorrect");
        }, 1000);
    } else if (quizType === "travel") {
        if (travelWord === null) {
            return;
        }
        if (travelWord.innerText === box.getAttribute("data-vocab")) {
            box.classList.add("correct");
            if (travelWords.length > 0) {
                nextWord(travel);
            } else {
                win();
            }
        } else {
            box.classList.add("incorrect");
        }
        setTimeout(() => {
            box.classList.remove("correct", "incorrect");
        }, 1000);
    } else if (quizType === "food") {
        if (foodWord === null) {
            return;
        }
        if (foodWord.innerText === box.getAttribute("data-vocab")) {
            box.classList.add("correct");
            if (foodWords.length > 0) {
                nextWord(food);
            } else {
                win();
            }
        } else {
            box.classList.add("incorrect");
        }
        
        setTimeout(() => {
            box.classList.remove("correct", "incorrect");
        }, 1000);
    }
    calculateAttempts();
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
    englishWord.innerText = englishWords[currentWord];
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