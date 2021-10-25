let englishWords = ["dog", "cat", "fish", "giraffe", "tiger", "lion", "guinea-pig", "cheetah", "horse"];

/**
 * compare function
 * if correct - alert correct and display new english word
 * if incorrect - alert incorrect, try again and continue
 * in both cases increase number of attempts
 * alert after all nine words are found
 */


let boxes = document.getElementsByClassName("box");

let compare = function() {
    if (document.getElementById("word").innerHTML === this.getAttribute("data-vocab")) {
        alert("correct");
    } else {
        alert("incorrect");
    }
};

for (var i=0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", compare, false);
}

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