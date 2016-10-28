import Paddle from './paddle.js';
import Board from './board.js';
import {player1Keys,player2Keys} from './key.js';
import Ball from './ball.js';
import Score from './score.js';

const gap = 10;

export default class Game{

	constructor(id) {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';

        this.board = new Board(this.height,this.width);
        this.p1 = new Paddle(this.height,gap,'blue',player1Keys);
        this.p2 = new Paddle(this.height,this.width-5-gap,'red',player2Keys);
        this.p1Score = new Score(225, 85);
        this.p2Score = new Score(75, 85);
        this.ball = new Ball(this.height, this.width);
	}

render() {
    this.board.render(this.context);
    this.p1.render(this.context);
    this.p2.render(this.context);
    this.p1Score.render(this.context);
    this.p2Score.render(this.context);
    this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score);
}

}

