class stone{
    constructor(x,y,radius){
        var options={
        isStatic:false,
        density:0.8
        }
        this.path=[];
        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
        this.im=loadImage("sprites/smoke.png");
       this.image=loadImage("sprites/stonesa.png");
       World.add(world,this.body);
    }
display(){
    imageMode(CENTER);
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    var pos=[this.body.position.x,this.body.position.y];
    this.path.push(pos);
    }
    for(var i=0;i<this.path.length;i=i+3){
    image(this.im,this.path[i][0],this.path[i][1]);
    
    }
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,70,70)
}
}
