/* jshint esversion: 8 */

const animals = ["dog", "cat", "fish", "giraffe", "tiger", "lion", "guinea pig", "cheetah", "horse"];
let englishWords = animals.slice(0);
let counter = 0;
let counterSpan = document.getElementById("counter");
let englishWord = document.getElementById("word");
let boxes = document.querySelectorAll(".box");



/**
 * compare function
 * if correct - alert correct and display new english word
 * if incorrect - alert incorrect, try again and continue
 * in both cases increase number of attempts
 * alert after all nine words are found
 */
function compareAnswer(box) {
    if (englishWord.innerText === box.getAttribute("data-vocab")) {
        box.classList.add("correct");
        if(englishWords.length > 1) {
            nextAnimal();
        } 
        // alert("correct");
    } else {
        box.classList.add("incorrect");
        // alert("incorrect");
    }

    setTimeout(() => {
        box.classList.remove("correct", "incorrect");
    }, 1000);    
}

boxes.forEach(box => {
    box.addEventListener("click", function() {
        compareAnswer(box);
        calculateAttempts();
    });
});


/**
 * increase attempts by one each time a germanword box is clicked
 */
 function calculateAttempts () {
    // counter = counter + 1;
    // counter += 1;
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
}

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