class Paper{
    constructor(x,y){
        var options= {
            'isStatic' : false,
            'friction':0.5,
            'restitution':0.3,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image,0,0,60,60);
      pop();
      
    }
    pvelocity(){
        Matter.Body.applyForce(this.body,this.body.position,{x:10,y:-21});

        if(this.body.position.x > 1000 ){
            Matter.Body.applyForce(this.body,this.body.position,{x:2,y:21});
        }
    }

}       