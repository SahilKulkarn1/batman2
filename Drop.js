class Drop{
    constructor(x,y) {
        var options = {
          friction:0.001,
          restitution: 0.1
      }
      this.body = Bodies.circle(x,y,10,options)
      this.radius = 10;
      
      World.add(world, this.body);
    }

    updateYPos(){

      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,400)} )
      }

    }
    display(){
       
      var pos =this.body.position;
      fill ("blue")
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.radius,this.radius)
      
      
     
    }
  }

