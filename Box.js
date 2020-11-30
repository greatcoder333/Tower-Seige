class Box {

constructor(x,y,width,height){

var options = {
    restitution :0.4,
    friction :0.0
}
this.Boxbody = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
World.add(world,this.Boxbody)
}

display(){
var pos = this.Boxbody.position
var angle = this.Boxbody.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill("pink")
rect(0,0,this.width,this.height)
pop()
}
}