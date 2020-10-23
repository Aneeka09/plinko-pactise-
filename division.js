class Division{
    constructor(x,y,width,height) {
         var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.height = height;
    this.width= width;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");rectangle(x,y,width,height,options);
    this.width = width;
    rect(pos.x, pos.y, this.width, this.height);
  }
};

    
    
    
