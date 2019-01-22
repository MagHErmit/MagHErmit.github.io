let createAndAppend = function({className, parentElement, value}, tag='div') {
	let element = document.createElement(tag);
	element.className = className;
	if (value) {
		element.innerHTML = value;
	}

	if (parentElement) {
		parentElement.appendChild(element);
	}

	return element;
}

let getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}




let fieldSize = parseInt(window.prompt('Введите размер поля', 5));

var game = new Game(document.body, fieldSize || 4);