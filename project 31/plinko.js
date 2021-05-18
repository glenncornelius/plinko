class plinko {
    constructor(x, y) {
        var  options = {
          'restitution': 1,
          'friction': 0,
          'isStatic': true
        }
        this.body = Bodies.circle(x, y, [options]) 
        this.radius = 10;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
}