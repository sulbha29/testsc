class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/asling.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attachback(body){
        this.sling.bodyA=body;
    }

    display(){
     
        image(this.sling1,185,540);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);
            if(pointA.x>220){
                strokeWeight(5);
            
            line(pointA.x-30,pointA.y,pointB.x+100,pointB.y);
            line(pointA.x-30, pointA.y, pointB.x, pointB.y);
           
            
             image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x-30,pointA.y,pointB.x+100,pointB.y);
            line(pointA.x-30, pointA.y, pointB.x, pointB.y);
            
           image(this.sling3,pointA.x-40,pointA.y+10,15,30);
        }
    }
    }
    
}
