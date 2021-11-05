## Testing 

### Testing Color Contrasts

- All colors have been tested with a contrast checker.

  - Contrast test #201773 against #ffffff
  ![Adobe Color Test](documentation/screenshots/colortesttwo.png)

  - Contrast test #553fa3 against #ffffff
  ![Adobe Color Test](documentation/screenshots/colortestthree.png)

  - Contrast test #000047 against #ffffff
  ![Adobe Color Test](documentation/screenshots/colortestfour.png)

  - Color accessibility #20173, #553fa3, #000047
  ![Color Tool Test](documentation/screenshots/colortestone.png)

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjulianegampe.github.io%2Fvocabulary-quiz%2F)
    ![HTML Checker](documentation/screenshots/htmlchecker.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjulianegampe.github.io%2Fvocabulary-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    ![CSS Validation](documentation/screenshots/cssvalidation.png)

- JavaScript
  - No errors were found when passing through [JSHint](https://jshint.com/)
    - script.js
    ![JavaScript script.js](documentation/screenshots/jshintscript.png)
    - words.js
    ![JavaScript words.js](documentation/screenshots/jshintwords.png)

### Browser Compatibility

- The page has been tested and works in different browsers.

  - Google Chrome
  ![Google Chrome Desktop](documentation/screenshots/googlechrome.png)
  ![Google Chrome Mobile](documentation/screenshots/googlechromemobile.png)

  - Firefox
  ![Firefox Desktop](documentation/screenshots/firefox.png)
  ![Firefox Tablet](documentation/screenshots/firefoxtablet.png)

  - Microsoft Edge
  ![Microsof Edge Desktop](documentation/screenshots/microsoftedge.png)
  ![Microsof Edge Mobile](documentation/screenshots/microsoftedgemobile.png)

### Responsiveness

- The project is responsive and functions on all standard screen sizes using the devtools device bar.
- All features are readable and easy to understand.
- The game is fully functional and working. The quiz type buttons are working and a quiz type can be choosen. The German words cards are working and compared with the English word when clicked. The number of attempts are counted correctly. The restart game button is working. A modal is displaying when the game is finished.

    - Google Chrome Desktop

      ![Google Chrome Desktop](documentation/screenshots/googlechrome.png)

    - Google Chrome Mobile

      ![Google Chrome Mobile](documentation/screenshots/googlechromemobile.png)

    - Firefox Desktop

      ![Firefox Desktop](documentation/screenshots/firefox.png)

    - Firefox Tablet

      ![Firefox Tablet](documentation/screenshots/firefoxtablet.png)

    - Microsoft Edge Desktop

      ![Microsof Edge Desktop](documentation/screenshots/microsoftedge.png)

    - Microsoft Edge Mobile

      ![Microsof Edge Mobile](documentation/screenshots/microsoftedgemobile.png)

### Testing User Stories

- As a user I want to be able to see the purpose of the website.
![Header](documentation/screenshots/header.png)

- As a user I want to be able to choose a quiz type so that I can test my knowledge for a specific vocabulary topic.
![Quiztype](documentation/screenshots/quiztype.png)

- As a user I want to see instructions for the quiz so that I know how to play it.
![Explanation](documentation/screenshots/explanation.png)

- As a user I want to be able to click a German language card matching to the given English word so that I can test my knowledge. 
![English Word](documentation/screenshots/englishword.png)
![German Words](documentation/screenshots/germanwords.png)

- As a user I want to see how many attempts I have needed to complete the quiz so that I can try to improve.
![Attempts](documentation/screenshots/attempts.png)

- As a user I want to be able to restart the game so that I don't have to finish it completely before starting again.
![Restart Game](documentation/screenshots/restartgame.png)

- As a user I want to see social media icons so that I can visit social media websites with one click.
![Footer](documentation/screenshots/footer.png)

### Fixed Bugs

- When choosing a quiz type and then clicking on a different quiz type the number of attempts would     increment by two. When clicking on yet another quiz type it would increment by three and so forth. The reason for this was, that the calculateAttempts function, that increments the counter by one, was called for each German word box click event inside of each quiz button selection. If one quiz type was clicked it would increment and it would continue to increment even when another quiz type was clicked. This bug was solved by moving the click event listener for the German word boxes outside of the quizbutton selection and put on its own. 

### Known Bugs/Warnings



---

Return to the [README](README.md) file
