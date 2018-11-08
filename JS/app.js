let game;																	//the game variable
const resetDisplay = () => {												//hides the overlay
	const overlay = document.querySelector(`#overlay`);
	overlay.style.display = `none`;
	overlay.className = `start`;
}
const markButton = letter => {												//marks the received key
	letter.disabled = true;
	letter.className += ` chosen`;
}
const keyEvent = e => {														//keyboard event listener function, marks the key on the screen and handles the key
	if (/^[a-zA-Z]$/.test(e.key)){											//in the game class instance
		document.querySelectorAll(`.key`).forEach(button => {
			if (button.textContent === e.key && !button.disabled){
				game.handleInteraction(e.key);
				markButton(button);
				return;
			}
		});
	}
}
document.querySelector(`#btn__reset`).addEventListener(`click`, () => {		//when the user presses the start or try again button, a new game is created,
	resetDisplay();															//the overlay is hidden and starts the game
	game = new Game();
	game.startGame();
});
document.querySelector(`#qwerty`).addEventListener(`click`, e => {			//on screen key event listener, marks the key on screen and 
	if (e.target.tagName === `BUTTON`){										//handles the interaction
		markButton(e.target);
		game.handleInteraction(e.target.textContent);
	}
});