class Umbrella{
    constructor(x,y) {
        var options = {
          isStatic: true
      }
      this.radius = 100;
      this.body = Bodies.circle(x,y,this.radius,options)
      
      this.image = loadImage("Walking Frame/walking_5.png")
      World.add(world, this.body);
    }
    display(){
    
      var pos =this.body.position;
    
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius*3,this.radius*3)
      
      
     
    }
  }

