class Mango{
    constructor(x,y,radius){
        this.radius=this.radius;
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
            }
    this.body=Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body)

    }
    display(){
    var pos=this.body.position
    ellipseMode(CENTER);
    fill(255);
    ellipse(pos.x,pos.y,this.radius);
    }
    }   