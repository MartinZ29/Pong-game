import './game.css';

class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
	}
}

var game = new Game();

const ms = 30;
(function gameLoop(){
	console.log(game.height,game.width)
	setTimeout(gameLoop,ms);
}());