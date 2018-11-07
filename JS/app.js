let game;
const resetDisplay = () => {
	document.querySelector(`#overlay`).style.display = `none`;
}
const markButton = letter => {
	letter.disabled = true;
	letter.style.color = `transparent`;
}
document.querySelector(`#btn__reset`).addEventListener(`click`, () => {
	resetDisplay();
	game = new Game();
	game.startGame();
});
document.querySelector(`#qwerty`).addEventListener(`click`, e => {
	if (e.target.tagName === `BUTTON`){
		const button = e.target;
		markButton(button);
		game.handleInteraction(button.textContent);
	}
});
document.addEventListener(`keydown`, e => {
	if (/^[a-zA-Z]$/.test(e.key)){
		document.querySelectorAll(`.key`).forEach(button => {
			if (button.textContent === e.key && !button.disabled){
				game.handleInteraction(e.key);
				markButton(button);
				return;
			}
		});
	}
});