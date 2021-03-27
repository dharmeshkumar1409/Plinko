class Particle {
    constructor(x,y,radius) {
      var options = {
          restitution:0.5
      }
       this.radius= radius;
      
      this.pa = Bodies.circle(x,y,this.radius,options);
      this.r=random(0,255);
      this.g=random(0,255);
      this.b=random(0,255);
     
      World.add(world, this.pa);
     
    }
    display(){
    var pos =this.pa.position;
    var angle=this.pa.angle;
       
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(this.r,this.g,this.b);
    
    ellipse(0,0, this.radius,this.radius);
     pop();
    }
  }