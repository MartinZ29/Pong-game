import Paddle from './paddle.js';

const gap = 10;

export default class Game{

	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';

        this.p1 = new Paddle(this.height,5);
        this.p2 = new Paddle(this.height,this.width-10);
	}

	drawLine(){
        this.context.fillStyle = 'white';
		this.context.setLineDash([10,10]);
		this.context.beginPath();
		this.context.moveTo(this.width/2,0);
		this.context.lineTo(this.width/2,this.height);
		this.context.strokeStyle = 'white';
		this.context.stroke();
	}
	drawBoard(){
		this.context.fillStyle = 'black';
		this.context.fillRect(0,0,this.width,this.height);
		this.drawLine();
	}

render() {
    this.drawBoard();
    this.p1.render(this.context);
    this.p2.render(this.context);
}

}

