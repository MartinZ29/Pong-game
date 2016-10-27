import './game.css';

import Game from './game.js';
import Paddle from './paddle.js';

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
	game.render();
	setTimeout(gameLoop,ms);
}());

// class Board {
// 	constructor(width,height) {
// 		this.width = width;
// 		this.height = height;
// 	}

