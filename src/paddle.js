export default class Paddle {
    constructor(boardHeight,x,color){
        this.width = 5;
        this.height = 50;
        this.x = x;
        this.y = (boardHeight/2) - (this.height/2);
    }

render(context) {
    context.fillRect(
        this.x, this.y,
        this.width,
        this.height,
    );
}



}