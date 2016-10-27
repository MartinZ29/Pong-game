import Paddle from './paddle.js';
import Board from './board.js';
import {player1Keys,player2Keys} from './key.js';


const gap = 10;

export default class Game{

	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
        
        this.board = new Board(this.height,this.width);

        this.p1 = new Paddle(this.height,gap,'blue',player1Keys);
        this.p2 = new Paddle(this.height,this.width-4-gap,'red',player2Keys);
	}

render() {
    // this.drawBoard();
    this.board.render(this.context);
    this.p1.render(this.context);
    this.p2.render(this.context);
}

}

