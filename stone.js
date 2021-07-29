class Stone{
    constructor(x,y,width,height){
        var options={
        restitution:0,
        friction:1,
        density:1.2
        }
        this.body= Matter.Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=this.width
        this.height=this.height
    }
    display(){
        var pos=this.body.position
        fill(0)
        rect(100,600,20,20);
        }
        }