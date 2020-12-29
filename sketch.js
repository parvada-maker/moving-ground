var sword,swordImg,fruit,fruitGroup,fruit1,fruit2,fruit3,fruit4;

function preload(){
  swordImg=loadImage("sword.png")
 fruit1=loadImage("fruit1.png")
  
 fruit2=loadImage("fruit2.png")
  
 fruit3=loadImage("fruit3.png")
  
 fruit4=loadImage("fruit4.png")
}
function setup()
{createCanvas(900,900)
  sword=createSprite(200,200)
 sword.addImage(swordImg);
}
function draw(){background("lightblue")
  sword.x=mouseX
  sword.y=mouseY
fruits()
  drawSprites();
}
function fruits()
{var ran_numx=Math.round(random(10,390))
 var ran_numy=Math.round(random(10,390))
 var ran=Math.round(random(1,4))
  if (frameCount%60 ===0)
    {fruit=createSprite(ran_numx,ran_numy)
     fruit.setLifetime=100
   
    switch(ran)

    {case 1: fruit.addImage(fruit1)
      break;
      case 2: fruit.addImage(fruit2)
      break;
      case 3: fruit.addImage(fruit3)
      break;
      case 4: fruit.addImage(fruit4)
      break;
      default: break; 
    }
     fruit.scale=0.2
    // fruit.velocityX=-5
     
   console.log(fruit.Lifetime)
}
}
