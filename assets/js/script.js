let englishWords = ["dog", "cat", "fish", "giraffe", "tiger", "lion", "guinea-pig", "cheetah", "horse"];

/**
 * compare function
 * if correct - alert correct and display new english word
 * if incorrect - alert incorrect, try again and continue
 * in both cases increase number of attempts
 * alert after all nine words are found
 */


let boxes = document.getElementsByClassName("box");

function compareAnswer(box) {
    if (englishWord.innerText === box.getAttribute("data-vocab")) {
        box.classList.add("correct");
        nextAnimal();
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

}


/**
 * if clicked set the english word to 0
 * if clicked set number of attempts to 0
 */
function restartGame() {

}