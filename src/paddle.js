export default class Paddle {
    constructor(boardHeight,x,color,keys){
        this.width = 5;
        this.height = 50;
        this.speed = 5;
        this.x = x;
        this.y = (boardHeight/2) - (this.height/2);
        this.keys = keys;
        document.addEventListener('keydown',event => this.keyListener(event));
    }

    wallBounce(){

    }

    keyListener(event){
        switch (event,keyCode) {
                case this.keys.up:
                    this.moveUp();
                    break;
                case this.keys.down:
                    this.moveDown();
                    break;
                default:return;}
    }

    moveUp(){
        // console.log('up')
        this.y -= this.speed;
    }

    moveDown(){
        // console.log('down')
    }

render(context) {
    context.fillRect(
        this.x, this.y,
        this.width,
        this.height,
    );
}

}