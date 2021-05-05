
function preload() {
    //load the images here
bgImg= loadImage("images/garden.png")
tomImg1= loadImage("images/cat1.png")
tomImg2= loadAnimation("images/cat2.png","images/cat3.png")
tomImg3= loadImage("images/cat4.png")

jerryImg1= loadImage("images/mouse1.png")
jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png")
jerryImg3= loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    tom=createSprite(870,600)
    tom.addImage(tomImg1)
tom.scale=0.2;
jerry=createSprite(70,600)
jerry.addImage(jerryImg1)
jerry.scale=0.2;
}

function draw() {

    background(bgImg);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=o
        tom.addImage(tomImg3)
        tom.x=300
        tom.scale-0.2
        tom.ChangeAnimation("tom running")
        jerry.addImage(jerryImg3)
        jerry.scale=0.15
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode=== LEFT_ARROW){
        tom.velocityX=-5
        tom.addAnimation("tom running",tomImg2)
        jerry.addAnimation("jerry teasing",jerryImg2)
        jerry.frameDelay=25
    }

  


}
