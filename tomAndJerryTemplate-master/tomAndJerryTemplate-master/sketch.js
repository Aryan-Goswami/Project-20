var bg
var cat,mouse
function preload() {
    bg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImage = loadAnimation("images/cat4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catSitting",catImg1)
    cat.addAnimation("catMoving",catImg2)
    cat.scale = 0.2
    mouse = createSprite(200,600)
    mouse.addAnimation("mouse",mouseImg)
    
    
    mouse.scale = 0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catImage",catImage)
        cat.changeAnimation("catImage")
        cat.x = 300
        cat.scale = 0.2
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25

    cat.velocityX = -5

    cat.addAnimation("catMoving",catImg2)

    cat.changeAnimation("catMoving")
  }


}
