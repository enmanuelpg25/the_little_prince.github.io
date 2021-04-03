let bg, glasses;
function preload() {
  bg = loadImage('https://i.ibb.co/9yRzDK1/IMG-20210322-132024-211.png');
  glasses = loadImage('https://i.ibb.co/y4fV169/glasses-PNG5424466.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(400, 400);
  console.log("loaded")
  }



function draw() {
  
  background(bg);

  drawCursor()
  
  
  textSize(30)
  fill(0,0,0)
  stroke('#222222');
strokeWeight(1);
  text("MOTHER OF GOD!",70,370,290,150)
}


// draws glasses where the mouse is
function drawCursor() {
    image(glasses, mouseX-270, mouseY-50, 400,100);
}