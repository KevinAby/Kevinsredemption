class Top{
    constructor(x,y,width,height){
        var Topoptions={
    
            isStatic:true
        }
    
      this.body= Bodies.rectangle(x,y,width,height,Topoptions)
     
     this.width = width
     this.height = height
     
      World.add(world,this.body)
    }
    display(){
    
    var pos= this.body.position
    rectMode(CENTER)
    push ()
    fill ("silver")
    rect(pos.x,pos.y,this.width,this.height)
    
    pop ()
    }
    
    }