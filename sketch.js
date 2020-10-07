var gameState = 0; 
var pet, intro, petHappy;
var trampGameState = 0;

function setup() {
  createCanvas(350, 500);

  pet = new Pet("images/petHappy.png");
  
  intro = new Intro();

  features = new Features();

  kitchenBg = loadImage("images/kitchen.png");

  bed = loadImage("images/bed.png");

  trampolineImg = loadImage("images/trampoline.png");

  trampoline = createSprite(180, 365, 280, 100);
  trampoline.addImage(trampolineImg);

  trampolineGround = createSprite(0, 530, 400, 200);
  trampolineGround.visible = false;

  petTrampoline = createSprite(180, 190, 100, 200);
  petTrampoline.visible = false;

  trampolineCollider = createSprite(190, 350, 276, 47);
    trampolineCollider.visible = false;
}

function draw() {
  if (gameState === 0) {
    background("#FFFDD0"); 
  
    intro.display();

    features.hide();
  } else if (gameState === 1) {

    intro.hide();

    fill(0, 255, 255);
    rect(-5, -5, 400, 400);

    fill("green");
    rect(0, 380, 400, 125);

    defaultText();

    pet.display();

    features.display(); 
  } else if (gameState === 2) {
    background("#90D8C9");

    fill("blue");
    rect(0, 380, 400, 125);

    drawSprites();

    pet.display();

    trampolineGame();   

    defaultText();
  } else if (gameState === 3) {
    background("#F65959");

    defaultText();

    image(kitchenBg, 0, 70, 350, 331);  

    fill("#DDF0EE");
    rect(0, 380, 400, 125);
  } else if (gameState === 4) {
    background("#DBC5F7");

    fill("#D4EBF2");
    rect(0, 380, 400, 125);

    image(bed, 26, 275, 300, 150);

    defaultText();
  } else if (gameState === 5) {
    background("#FFFDD0");

    fill("#D4EBF2");
    rect(0, 380, 400, 125);

    defaultText();
  }
}

function defaultText() {
    fill("blue")
    textSize(30);
    text("Take care of " + pet.petName + "!", 26, 36);
}

function trampolineGame(){
  if(trampGameState === 0) {
    pet.x = petTrampoline.x - 50;
    pet.y = petTrampoline.y - 35;

    trampoline.x = World.mouseX;
    trampolineCollider.x = World.mouseX;
    
    //petTrampoline.velocityY = 0;

    if(petTrampoline.collide(trampolineGround)) {
      trampGameState === 1;
    }

    petTrampoline.bounceOff(trampolineCollider);

    petTrampoline.velocityY = petTrampoline.velocityY + 1; 
  } else if (trampGameState === 1) {
    gameState === 4;
  }
}