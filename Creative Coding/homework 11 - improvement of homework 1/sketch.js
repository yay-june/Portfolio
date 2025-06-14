function setup() {
    createCanvas(400, 400);
    noLoop();  
  }
  
  function draw() {
    drawSky();
    drawSun();
    drawClouds();
    drawGrassField();
  }
  
  function drawSky() {
    for (let i = 0; i <= height / 2; i++) {
      let inter = map(i, 0, height / 2, 150, 255); 
      stroke(inter, 200, 255); 
      line(0, i, width, i); 
    }
    
    for (let i = height / 2; i < height; i++) {
      let inter = map(i, height / 2, height, 255, 180); 
      stroke(inter, 200, 255); 
      line(0, i, width, i); 
    }
  }
  
  function drawSun() {
    fill(255, 204, 0);
    noStroke();
    ellipse(width - 70, 70, 120, 120); 
  }
  
  function drawClouds() {
    fill(255); 
    noStroke();

    for (let i = 0; i < 3; i++) {
      let cloudX = random(width / 4, width - 100);
      let cloudY = random(50, height / 2);
      ellipse(cloudX, cloudY, random(60, 120), random(40, 80));
      ellipse(cloudX + random(15, 30), cloudY - random(10, 30), random(60, 120), random(40, 80)); 
    }
  }

  function drawGrassField() {
    fill(34, 139, 34); 
    noStroke();
  
    for (let i = 0; i < width; i++) {
      let grassHeight = random(15, 50); 
      let grassX = i;
      let grassY = height; 
      let angle = random(-PI / 6, PI / 6); 
  
      push();
      translate(grassX, grassY); 
      rotate(angle); 
      rect(0, 0, 2, -grassHeight); 
      pop();
    }
  }

  function mousePressed() {
    drawSky();
    drawSun();
    drawClouds();
    drawGrassField();
    let randomFace = int(random(3)); 
    
    if (randomFace === 0) {
      drawCatFace();
    } else if (randomFace === 1) {
      drawDogFace();
    } else {
      drawChickenFace();
    }
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
    line(centerX - 20, centerY + 15, centerX - 50, centerY + 10); 
    line(centerX - 20, centerY + 20, centerX - 50, centerY + 20); 
    line(centerX - 20, centerY + 25, centerX - 50, centerY + 30); 
    line(centerX + 20, centerY + 15, centerX + 50, centerY + 10); 
    line(centerX + 20, centerY + 20, centerX + 50, centerY + 20); 
    line(centerX + 20, centerY + 25, centerX + 50, centerY + 30); 
  }
  
  function drawDogFace() {
    let faceColor = color(random(150, 255), random(100, 150), random(50, 100));
    let earColor = color(random(100, 150), random(50, 100), random(50, 100));
    let eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
    let noseColor = color(random(0, 0, 0));
    let whiskerColor = color(random(0, 0, 0));
  
    let centerX = width / 2;
    let centerY = height / 2;
    let faceSize = 150;
    let earSize = 50;
    let eyeSize = 20;
  
    fill(faceColor);
    noStroke();
    ellipse(centerX, centerY, faceSize, faceSize);
  
    fill(earColor);
    ellipse(centerX - faceSize / 3, centerY - faceSize / 3, earSize, earSize * 1.5);
    ellipse(centerX + faceSize / 3, centerY - faceSize / 3, earSize, earSize * 1.5); 
  
    fill(eyeColor);
    ellipse(centerX - faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize * 1.5); 
    ellipse(centerX + faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize * 1.5); 
    fill(0);
    ellipse(centerX - faceSize / 6, centerY - faceSize / 8, 10, 10); 
    ellipse(centerX + faceSize / 6, centerY - faceSize / 8, 10, 10); 
  
    fill(noseColor);
    ellipse(centerX, centerY + 30, 20, 20);
  
    stroke(0);
    line(centerX, centerY + 35, centerX, centerY + 45); 
    arc(centerX - 10, centerY + 45, 20, 10, 0, PI); 
    arc(centerX + 10, centerY + 45, 20, 10, 0, PI);
  
    stroke(whiskerColor);
    strokeWeight(1);
    line(centerX - 20, centerY + 25, centerX - 50, centerY + 25); 
    line(centerX - 20, centerY + 30, centerX - 50, centerY + 30); 
    line(centerX - 20, centerY + 35, centerX - 50, centerY + 35); 
    line(centerX + 20, centerY + 25, centerX + 50, centerY + 25); 
    line(centerX + 20, centerY + 30, centerX + 50, centerY + 30); 
    line(centerX + 20, centerY + 35, centerX + 50, centerY + 35); 
  }
  
  function drawChickenFace() {
    let faceColor = color(random(200, 255), random(200, 255), random(100, 150));
    let combColor = color(random(255, 255), random(0, 100), random(0, 0)); 
    let eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
    let beakColor = color(random(255, 200, 0));
    let wattleColor = color(random(255, 0, 0));
  
    let centerX = width / 2;
    let centerY = height / 2;
    let faceSize = 150;
    let eyeSize = 20;
  
    fill(faceColor);
    noStroke();
    ellipse(centerX, centerY, faceSize, faceSize);

    fill(combColor);
    ellipse(centerX, centerY - faceSize / 2.5, 50, 50); 
    ellipse(centerX - 30, centerY - faceSize / 3, 40, 40); 
    ellipse(centerX + 30, centerY - faceSize / 3, 40, 40); 
  
    fill(eyeColor);
    ellipse(centerX - faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize); 
    ellipse(centerX + faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize); 
    fill(0);
    ellipse(centerX - faceSize / 6, centerY - faceSize / 8, 8, 8); 
    ellipse(centerX + faceSize / 6, centerY - faceSize / 8, 8, 8); 
  
    fill(beakColor);
    triangle(centerX - 10, centerY + 20, centerX + 10, centerY + 20, centerX, centerY + 30);
  }
  