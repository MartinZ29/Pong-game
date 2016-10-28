


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
           if(this.x <= 0+this.radius) {
               this.ballReset()
           } ;
           if (this.x >= this.width-this.radius){
               this.ballReset();this.vx *= -1;
            } 
     }

    paddleCollision(p1, p2){
        if (this.vx > 0) {
          if (this.x >= p2.x) {
              if (this.y >= p2.y + this.radius && this.y <= (p2.y + p2.height)) {
                  this.vx *= -1;
              }
          }

      } else {
          if (this.x <= p1.x + p1.width) {
              if (this.y >= p1.y - this.radius && this.y <= (p1.y + p1.height)) {
                  this.vx *= -1;
              }
          }
      }
};


    // score(p1Score,p2Score){
    //     if(this.x<=0 + this.redius){
    //         this.reset();
    //         p1Score.score++;
    //     } else if (this.x >= game.width){
    //         this.reset();
    //             p2Score.score++;
    //     }
    // }


    render(context, p1, p2){

        this.bounce();
        this.x += this.vx;
        this.y += this.vy;
        this.draw(context);
        this.goal();
        this.paddleCollision(p1,p2);
        // this.score(p1Score,p2Score);
        
        // const hitLeft = this.x >= this.width;
        // const hitRight = this.x + this.size <= 0;
        // const hitTop = this.y + this.size <= 0;
        // const hitBottom = this.y >= this.height;
    }

}
