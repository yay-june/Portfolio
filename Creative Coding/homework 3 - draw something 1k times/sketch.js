function setup() {
    createCanvas(800, 600);
    background(255); 
  
    let shapeSize = 7; 
  
    for (let y = 0; y < height; y += 20) {  
      for (let x = 0; x < width; x += 20) { 
        let shapeIndex = (x / 20 + y / 20) % 3; 
  
        noStroke();
        if (shapeIndex == 0) {
          fill(255, 255, 0);
          ellipse(x, y, shapeSize, shapeSize);
        } else if (shapeIndex == 1) {
          fill(255,0,0);
          triangle(x, y - shapeSize / 2, x - shapeSize / 2, y + shapeSize / 2, x + shapeSize / 2, y + shapeSize / 2);
        } else if (shapeIndex == 2) {
          fill(0, 0, 255);
          rect(x - shapeSize / 2, y - shapeSize / 2, shapeSize, shapeSize);
        }
      }
    }
  }
  
  function draw() {
    
  }
  