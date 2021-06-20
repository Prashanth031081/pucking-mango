class launher
{
	constructor(body,anchor)
	{
		var options={
			bodyA:body,
            pointB:anchor,
            stifeness:0.004,
            length:1
			}
		this.bodyA = body
		this.pointB = anchor
        this.launher = Constraint.create(options)
		World.add(world, this.launher);

	}
    attach(body){
        this.launher.bodyA = body
    }
    fly(){
        this.launher.bodyA = null
    }
	display()
	{
	if( this.launher.bodyA ){
    var pointA = this.bodyA.position
    var pointB = this.pointB
    strokeWeight(2)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
        }
			
	}

}