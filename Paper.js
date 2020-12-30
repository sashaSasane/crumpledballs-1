class Paper {
    constructor(x, y) {
      var options ={
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body= Bodies.circle (this.x,this.y,this.r/2,options); 
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
}

function display(){
    var paperpos = this.body.position;

    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeweight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop()



}
function keyPressed(){

    if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:125,y:125});
    }
}