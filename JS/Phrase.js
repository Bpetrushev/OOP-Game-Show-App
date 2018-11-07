class Phrase {
	constructor(phrase){
		this.phrase = phrase;
	}
	addPhraseToDisplay(){
		const phraseUl = document.querySelector(`#phrase ul`);
		document.querySelectorAll(`.letter`).forEach(letter => phraseUl.removeChild(letter));
		for (let i = 0; i < this.phrase.length; i++) {
			const placeHolder = document.createElement(`li`);
			placeHolder.className = (this.phrase[i] === ` `)? `hide space`: `hide letter ${this.phrase[i]}`;
			placeHolder.textContent = this.phrase[i];
			phraseUl.appendChild(placeHolder);
		}
	}
	checkLetter(letter){
		return !(this.phrase.indexOf(letter) == -1);
	}
	showMatchedLetter(letter){
		const letterLi = document.querySelector(`.hide.${letter}`);
		letterLi.className = `letter ${letter}`;
		letterLi.style.color = `black`;
	}
}