


export default class Ball{
    constructor(height,width){
        
        
        this.height = height;
        this.width = width;
        this.ballReset();
        this.radius = 10;

    }
    draw(context){
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
    
     bounce(){
    
            if(this.y <= 0 + this.radius || this.y >= this.height - this.radius){
                this.vy *= -1
            };
     }

     ballReset(){
         this.x = this.width/2;
         this.y = this.height/2;
         this.vy = Math.floor(Math.random()*12-6);
         this.vx = (7 - Math.abs(this.vy));
     }

     goal(){
           if(this.x <= 0+this.radius || this.x >= this.width-this.radius)
           {
        
        this.ballReset();
    }
        
     }

//      paddleCollision(p1, p2){
//          if (this.vx > 0) {
//       const inRightEnd = p2.x <= this.x + this.width &&
//       p2.x > this.x - this.vx + this.width;
//       if (inRightEnd) {
//          const collisionDiff = this.x + this.width - p2.x;
//          const k = collisionDiff / this.vx;
//          const y = this.vy * k + (this.y - this.vy);
//          const hitRightPaddle = y >= p2.y && y + this.height <=
//          p2.y + p2.height;
//          if (hitRightPaddle) {
//             this.x = p2.x - this.width;
//             this.y = Math.floor(this.y - this.vy + this.vy * k);
//             this.vx = -this.vx;
//          }
//       }
//    }
//  else {
//       const inLeftEnd = p1.x + p1.width >= this.x;
//       if (inLeftEnd) {
//          const collisionDiff = p1.x + p1.width - this.x;
//          const k = collisionDiff / -this.vx;
//          const y = this.vy * k + (this.y - this.vy);
//          const hitLeftPaddle = y >= p1.y && y + this.height <=
//          p1.y + p1.height;
//          if (hitLeftPaddle) {
//             this.x = p1.x + p1.width;
//             this.y = Math.floor(this.y - this.vy + this.vy * k);
//             this.vx = -this.vx;
//          }
//       }
//    }  
//      }

    render(context, p1, p2){

        this.bounce();
        this.x += this.vx;
        this.y += this.vy;
        this.draw(context);
        this.goal();
        
        // const hitLeft = this.x >= this.width;
        // const hitRight = this.x + this.size <= 0;
        // const hitTop = this.y + this.size <= 0;
        // const hitBottom = this.y >= this.height;
        //this.paddleCollision(p1,p2);
    }

}
