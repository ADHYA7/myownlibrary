var frect,mrect,object;
 function setup() {
    createCanvas(800,400);
   frect=createSprite(150,200,80,30) 
   frect.shapeColor="green"
    mrect=createSprite(300,200,30,80)
    mrect.shapeColor="green";
    object = createSprite(250,240,80,30);
     object.shapeColor="green"
     }
      function draw() {
      background(255,255,255);
      mrect.x=mouseX
      mrect.y=mouseY
        if(  COLLISION(mrect,object)){
         mrect.shapeColor="red"
         object.shapeColor="red"
        }
        else{ mrect.shapeColor="green"
        object.shapeColor="green"
      
        }
        if(  COLLISION(mrect,frect)){
            mrect.shapeColor="red"
            frect.shapeColor="red"
           }
           else{ mrect.shapeColor="green"
           frect.shapeColor="green"
         
           }
        drawSprites()
       }

