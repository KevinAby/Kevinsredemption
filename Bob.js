class Bob{
    constructor(x,y,width,height){
        var boboptions={
    
    'restitution':0,
   'friction':0.6,
  'density':1.1
            
        }
    
      this.body= Bodies.rectangle(x,y,width,height,boboptions)
     
     this.width = width
     this.height = height
     
      World.add(world,this.body)
    }
    display(){
    
    var pos= this.body.position
    rectMode(CENTER)
    push ()
    fill ("blue")
    rect(pos.x,pos.y,this.width,this.height)
    
    pop ()
    }
    
    }