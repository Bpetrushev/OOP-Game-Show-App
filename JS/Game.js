class Game {
	constructor(){
		this.misses = 0;
		this.phrases = [
			new Phrase(`hey`),
			new Phrase(`you win`),
			new Phrase(`put back my english word`),
			new Phrase(`boyfriends`),
			new Phrase(`campground`),
			new Phrase(`importance`),
			new Phrase(`trampoline`),
			new Phrase(`blacksmith`),
			new Phrase(`binoculars`),
			new Phrase(`background`)
		];
	}
	getRandomPhrase(){																					//chooses a random phrase and sets it as the current phrase
		this.curentPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}
	handleInteraction(letter){																			//if the letter can be found in the phrase, it will be
		if (this.curentPhrase.checkLetter(letter)){														//displayed else a life is removed
			this.curentPhrase.showMatchedLetter(letter);
			this.checkForWin();
		} else
			this.removeLife();
	}
	removeLife(){																						//removes lifes, if the user has lost 5 lifes
		this.misses++;																					//triggers a game over
		const live = document.querySelector(`img[src*=live]`);
		if (this.misses < 5)
			live.src = `images/lostHeart.png`;
		else
			this.gameOver(false);
	}
	checkForWin(){																						//checks if all the letters have been displayed
		if (!document.querySelector(`.hide.letter`))													//and triggers a game over
			this.gameOver(true);
	}
	gameOver(win){																						//shows the game over screen, removes the keyboard							
		document.querySelector(`#btn__reset`).textContent = `try again?`;								//event listener and shows a win or lose message
		const overlay = document.querySelector(`#overlay`);
		const messageElement = document.querySelector(`#game-over-message`);
		overlay.style.display = `flex`;
		if (win){
			messageElement.textContent = `you win!`;
			overlay.className += ` win`;
		} else{
			messageElement.textContent = `you failed`;
			overlay.className += ` lose`;
		}
		document.removeEventListener(`keydown`, keyEvent);
	}
	startGame(){																						//sets the ramdom phrase, resets the lives and keys,
		this.getRandomPhrase();																			//adds the keyboard event listener
		this.curentPhrase.addPhraseToDisplay();
		document.querySelector(`#game-over-message`).textContent = ``;
		document.querySelectorAll(`img[src*=lost]`).forEach(live => live.src = `images/liveHeart.png`);
		document.addEventListener(`keydown`, keyEvent);
		document.querySelectorAll(`button[disabled]`).forEach(button => {
			button.disabled = false;
			button.className = `key`;
		});
	}
}