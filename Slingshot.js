class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 400
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
      if (this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("lightBlue");
        strokeWeight(4);
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}