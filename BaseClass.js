class BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
    this.image = loadImage("../images/snowflake.jpg");
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = 200;
    this.height = 200;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}