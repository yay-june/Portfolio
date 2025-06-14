function setup() {
    createCanvas(400, 400);
    noLoop(); 
  }
  
  function draw() {
    background(255); 
    drawCatFace(); 
  }
  
  function mousePressed() {
    draw(); 
  }
  
  function drawCatFace() {
    let faceColor = color(random(150, 255), random(150, 200), random(150, 200));
    let earColor = color(random(150, 255), random(100, 150), random(100, 150));
    let eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
    let noseColor = color(random(200, 100, 100));
    let whiskerColor = color(random(0, 0, 0, 150));
  
    let centerX = width / 2;
    let centerY = height / 2;
    let faceSize = 150;
    let earSize = 50;
    let eyeSize = 20;
  
    fill(faceColor);
    noStroke();
    ellipse(centerX, centerY, faceSize, faceSize);
  
    fill(earColor);
    triangle(centerX - faceSize / 2.5, centerY - faceSize / 3,
             centerX - faceSize / 5, centerY - faceSize / 2,
             centerX - faceSize / 3, centerY - faceSize / 1.5);
    
    triangle(centerX + faceSize / 2.5, centerY - faceSize / 3,
             centerX + faceSize / 5, centerY - faceSize / 2,
             centerX + faceSize / 3, centerY - faceSize / 1.5);
  
    fill(eyeColor);
    ellipse(centerX - faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize * 1.5); // Left eye
    ellipse(centerX + faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize * 1.5); // Right eye
  
    fill(noseColor);
    triangle(centerX - 10, centerY + 10, centerX + 10, centerY + 10, centerX, centerY + 20);
  
    stroke(whiskerColor);
    strokeWeight(1);
    line(centerX - 20, centerY + 15, centerX - 50, centerY + 10); // Left whisker 1
    line(centerX - 20, centerY + 20, centerX - 50, centerY + 20); // Left whisker 2
    line(centerX - 20, centerY + 25, centerX - 50, centerY + 30); // Left whisker 3
    line(centerX + 20, centerY + 15, centerX + 50, centerY + 10); // Right whisker 1
    line(centerX + 20, centerY + 20, centerX + 50, centerY + 20); // Right whisker 2
    line(centerX + 20, centerY + 25, centerX + 50, centerY + 30); // Right whisker 3
  }
  