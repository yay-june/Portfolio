function setup() {
    createCanvas(400, 400);
    background(255); 
    
    strokeWeight(2);
    stroke(0); 
    noFill();
  
    let squareSize = 300;
    
    translate((width - squareSize) / 2, (height - squareSize) / 2);
  
    rect(0, 0, squareSize, squareSize); 
  
    stroke(255, 0, 0); 
    push();
    translate(squareSize / 2, squareSize / 2); 
    scale(0.6, 1); 
    line(-squareSize / 2, 0, squareSize / 2, 0); 
    pop();
  
    push();
    translate(squareSize / 2, squareSize / 2); 
    rotate(-QUARTER_PI); 
    scale(0.7); 
    line(-squareSize / 2, 0, squareSize / 2, 0); 
    pop();
  }
  