


export default class Ball{
    constructor(height,width){
        
        
        this.height = height;
        this.width = width;
        this.ballReset();
        this.radius = 5;

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
            this.vy *= -1;
            var ping = new Audio('../sounds/pong-03.wav');
            ping.play();
        };
        
     }

     ballReset(){
         this.x = this.width/2;
         this.y = this.height/2;
         this.vy = Math.floor(Math.random()*11-5);
         this.vx = (9 - Math.abs(this.vy));
     }

     goal(p1Score,p2Score){
           if(this.x <= 0+this.radius) {
               this.ballReset();
               p1Score.score ++;
               var ping = new Audio('../sounds/pong-02.wav');
               ping.play();
           } ;
           if (this.x >= this.width-this.radius){
               this.ballReset();this.vx *= -1;
               p2Score.score ++;
               var ping = new Audio('../sounds/pong-02.wav');
               ping.play();
            } 
     }

    paddleCollision(p1, p2){
          if (this.x >= p2.x-this.radius) {
              if (this.y >= p2.y + this.radius && this.y <= (p2.y + p2.height)) {
                  this.vx *= -1;
                  var ping = new Audio('../sounds/pong-01.wav');
                  ping.play()
              }
          }

         else if (this.x <= p1.x +p1.width +this.radius) {
              if (this.y >= p1.y - this.radius && this.y <= (p1.y + p1.height)) {
                  this.vx *= -1;
                  var ping = new Audio('../sounds/pong-01.wav');
                  ping.play()
              }
          }
};

    render(context, p1, p2,p1Score,p2Score){

        this.bounce();
        this.x += this.vx;
        this.y += this.vy;
        this.draw(context);
        this.goal(p1Score,p2Score);
        this.paddleCollision(p1,p2);
    }

}
