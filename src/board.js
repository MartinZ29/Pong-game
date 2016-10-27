export default class Board {

    
        constructor(height,width){
            this.width = width;
            this.height = height;
        }
    

    drawLine(context){
        this.context.fillStyle = 'white';
		this.context.setLineDash([10,10]);
		this.context.beginPath();
		this.context.moveTo(this.width/2,0);
		this.context.lineTo(this.width/2,this.height);
		this.context.strokeStyle = 'white';
		this.context.stroke();
	}
	drawBoard(context){
		this.context.fillStyle = 'black';
		this.context.fillRect(0,0,this.width,this.height);
		this.drawLine();
	}

    render(context){
        this.drawLine(context);
        this.drawBoard(context);
    }



}