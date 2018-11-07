# OOP-Game-Show-App
In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, you’ll create an array of phrases and create two JavaScript classes with specific properties and methods. You'll create a class for the game, and a phrase class to help with creating phrases.

Your code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the game board displays the chosen letters on the screen.

A player continues to select letters until they guess they phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly 5 times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.