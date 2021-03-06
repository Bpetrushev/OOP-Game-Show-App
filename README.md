# [OOP Game Show App](https://gsosa2000.github.io/OOP-Game-Show-App/)
## **Grade:** :heavy_check_mark: Exceeds Expectations
### **Premise** 
> In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

> Using JavaScript, you’ll create an array of phrases and create two JavaScript classes with specific properties and methods. You'll create a class for the game, and a phrase class to help with creating phrases.

> Your code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

> Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the game board displays the chosen letters on the screen.

> A player continues to select letters until they guess they phrase (and win), or make five incorrect guesses (and lose).

> If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly 5 times, a losing screen appears.

> A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.
### **Project Instructions**
1. Create 3 JavaScript files to hold the program's logic
   - app.js to perform basic DOM selection, add event handlers, and to reset the game when it ends
   - Phrase.js to create a Phrase class to handle the creation of phrases
   - Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.
2. Create the Phrase class in the Phrase.js file.
   - #### Reviewer Comments:
   - > Great job ! You have a constructor which accepts a phrase, and have included addPhraseToDisplay to display a phrase, checkLetter function to check the letters and showMatchedLetter that reveals the letters on the board.
3. Create the Game class in the Game.js file.
   - #### Reviewer Comments:
   - > Your game constructor includes missed and phrases properties. You also have the getRandomPhrase to pick a random phrase, a handleInteraction function to handle to check the selection, checkForWin to see if win/lose conditions are met and remove life function. Great work !
5. Making the project your own
   - The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations and/or the exciting CSS filter property.
6. Add good code comments
7. Check for cross-browser consistency
### Extra Credit
1. Add keyboard functionality
   - #### Reviewer Comments:
   - > Awesome job setting the reset, utilizing the markButton resetting the display and the event listeners call the markButton.
2. Reset the Game
   - #### Reviewer Comments:
   - > Awesome job again, adding the reset buttons to the overlays for win/lose when the conditions are met.
### Overall Comments
> Great job on this tedious project ! The app works perfectly, the script is clean and well-organized and you have also included helpful comments. Overall, excellent work. Keep up the great work.

> Your next project is about Public API Requests. There, you will be working with AJAX and JSON. It is a fun project and you will learn so many new things. Give the project your all and I know you can exceed the expectations there too. Best of luck !
