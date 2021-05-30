class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.radius = radius
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(176.219,83);
      circle(pos.x, pos.y, this.radius);
    }
  };