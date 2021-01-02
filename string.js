class string{

constructor(body,anchor)
{

var options = {

bodyA : body,
pointB : anchor, 
stiffness : 0.04,
length : 1

}

this.bodyA = body
this.pointB = anchor
this.launcher = Constraint.create(options)
World.add(world,this.string)

}

attach(body){

this.string.bodyA = body;

}

fly(){

this.string.bodyA = null;

}

display(){

if(this.string.bodyA){
  
var pointA = this.body.position;
var pointB = this.pointB


stoke("white")
strokeWeight(2);

line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}
}