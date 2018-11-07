class Game {
	constructor(){
		this.misses = 0;
		this.phrases = [
			new Phrase(`hey`),
			new Phrase(`you win`)
		];
	}
	getRandomPhrase(){
		this.curentPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}
	handleInteraction(letter){
		if (this.curentPhrase.checkLetter(letter)){
			this.curentPhrase.showMatchedLetter(letter);
			this.checkForWin();
		} else
			this.removeLife();
	}
	removeLife(){
		this.misses++;
		const live = document.querySelector(`img[src*=live]`);
		if (this.misses < 5)
			live.src = `images/lostHeart.png`;
		else
			this.gameOver(false);
	}
	checkForWin(){
		if (!document.querySelector(`.hide.letter`))
			this.gameOver(true);
	}
	gameOver(win){
		document.querySelector(`#overlay`).style.display = `flex`;
		document.querySelector(`#btn__reset`).textContent = `try again?`;
		const messageElement = document.querySelector(`#game-over-message`);
		if (win)
			messageElement.textContent = `you win!`;
		else
			messageElement.textContent = `you failed`;
	}
	startGame(){
		this.getRandomPhrase()
		this.curentPhrase.addPhraseToDisplay();
		document.querySelector(`#game-over-message`).textContent = ``;
		document.querySelectorAll(`img[src*=lost]`).forEach(live => live.src = `images/liveHeart.png`);
		document.querySelectorAll(`button[disabled]`).forEach(button => {
			button.disabled = false;
			button.style.color = `black`;
		});
	}
}