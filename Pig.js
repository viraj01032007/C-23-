class Pig{

    constructor(x,y){
        var options={
            'restitution':1.0,
            'friction' :0.3,
            'density' :1.0
        }

this.body= Bodies.rectangle(x,y,40,40,options);
  World.add (world,this.body)

   this. width=40 
   this.height=40
   }

display(){

var pos = this.body.position;
var angle = this.body.position;
push();
translate(pos.x,pos.y)
rotate(angle);
rectMode(CENTER);
fill("green")
rect(0,0,this.width,this.height)
pop();
}
     
    
}
