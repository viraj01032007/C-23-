class  Log{

constructor(x,y,height,angle){

var options ={

    'restitution':0.3,
     'friction' :2.0,
     'density' :1.2
}
this.body=Bodies.rectangle(x,y,20,height,options);
World.add(world,this.body)
this.width=20
this.height=height
Matter.Body.setAngle(this.body,angle);
}

display(){
 
    var pos= this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill("orange");
    rect(0,0,this.width,this.height);
    pop();
}







};