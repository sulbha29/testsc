class Box2{
    constructor(x, y, width, height){
      var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.1
      }
    this.body=Bodies.rectangle(x,y,40,40,options);
    this.width=40;
    this.height=40;
    this.Visiblity=255;
    this.image=loadImage("sprites/greensqaure2.jpg");
    World.add(world,this.body);

    }
  display(){
   
    if(this.body.speed<7){
     imageMode(CENTER);
     
      image(this.image,this.body.position.x,this.body.position.y, 40,40);
    }
    else{
   World.remove(world,this.body);
   push();
    this.Visiblity=this.Visiblity-30;
   tint(255,this.Visiblity);
   image(this.image,this.body.position.x,this.body.position.y,40,40);
    pop();
    }
   
  }
  score(){
    if(this.Visiblity<0&&this.Visiblity>-20){
     score=score+1;
    }
  }
   
    
   
};

 