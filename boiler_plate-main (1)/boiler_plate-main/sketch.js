var side_b,side_t,side_r, side_l





function setup() {
  createCanvas(600,600);
  
}

function draw() {
  background(255,255,255);  

  if(frameCount===10){

    side_r=createSprite(600,300, 5, 600);

    side_l=createSprite(0,300, 5, 600);
  
    side_t=createSprite(300,0, 600, 5);
  
    side_b=createSprite(300,600, 600, 5);

  }
  if(frameCount===200){



    side_b.visible=false;
    side_t.visible=false;
    side_r.visible=false;
    side_l.visible=false;

    side_r=createSprite(550,300, 5, 500);

    side_l=createSprite(50,300, 5, 500);

    side_t=createSprite(300,50, 500, 5);
  
    side_b=createSprite(300,550, 500, 5);



    

  }else if(frameCount===400)
  {

    side_b.visible=false;
    side_t.visible=false;
    side_r.visible=false;
    side_l.visible=false;



    side_r=createSprite(500,300, 5, 400);

    side_l=createSprite(100,300, 5, 400);

    side_t=createSprite(300,100, 400, 5);
  
    side_b=createSprite(300,500, 400, 5);





  }
  else if(frameCount===600)
  {

    side_b.visible=false;
    side_t.visible=false;
    side_r.visible=false;
    side_l.visible=false;



    side_r=createSprite(450,300, 5, 300);

    side_l=createSprite(150,300, 5, 300);

    side_t=createSprite(300,150, 300, 5);
  
    side_b=createSprite(300,450, 300, 5);





  }
  

  drawSprites();
}