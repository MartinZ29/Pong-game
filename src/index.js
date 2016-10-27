import './game.css';

class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
	}

	drawLine(){
		this.context.setLineDash([10,10]);
		this.context.beginPath();
		this.context.moveTo(this.width/2,0);
		this.context.lineTo(this.width/2,this.height);
		this.context.strokeStyle = 'white';
		this.context.stroke();
	}
	drawBoard(){
		this.context.fillStyle = 'red';
		this.context.fillRect(0,0,this.width,this.height);
		this.drawLine
	}

	render(){
		
		
	}
}

var game = new Game();

const ms = 30;
// (function gameLoop(){
// 	console.log(game.height,game.width)
// 	setTimeout(gameLoop,ms);
// }());

// (function gameLoop(){
// 	game.drawLine();
// 	setTimeout(gameLoop,ms);
// }());


(function gameLoop(){
	console.log('hi');
	game.render();
	setTimeout(gameLoop,ms);
}());

// class Board {
// 	constructor(width,height) {
// 		this.width = width;
// 		this.height = height;
// 	}

