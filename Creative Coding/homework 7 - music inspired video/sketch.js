let circles = [];
let numCircles = 20; 
let duration = 15000; 
let startTime;
let sound; 

function preload() {
  sound = loadSound('Memories-of-Spring(chosic.com).mp3');
}

function setup() {
  createCanvas(800, 600);
  noStroke();
  startTime = millis(); 

  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 100), 
      color: color(random(255), random(255), random(255)), 
      speed: random(0.3, 2.5), 
      phaseOffset: random(TWO_PI) 
    });
  }
}

function draw() {
  background(0); 

  let elapsed = millis() - startTime; 
  let progress = elapsed / duration; 

  for (let i = 0; i < numCircles; i++) {
    let circle = circles[i];

    let phase = progress * TWO_PI * circle.speed + circle.phaseOffset;
    let pulseSize = circle.size * (0.5 + 0.5 * sin(phase)); 
    
    if (sin(phase) < -0.99) { 
      let validPosition = false;
      let newX, newY;

      while (!validPosition) {
        newX = random(width);
        newY = random(height);
        validPosition = checkNoOverlap(newX, newY, circle.size, i); // Check for overlap
      }

      circle.x = newX;
      circle.y = newY;
    }

    fill(circle.color);
    ellipse(circle.x, circle.y, pulseSize);
  }

  if (elapsed > duration) {
    noLoop(); 
  }
}

function checkNoOverlap(x, y, size, currentIndex) {
  for (let j = 0; j < circles.length; j++) {
    if (j !== currentIndex) { 
      let other = circles[j];
      let distance = dist(x, y, other.x, other.y);
      if (distance < (size + other.size) / 2) {
        return false;
      }
    }
  }
  return true; 
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.loop(); 
    clear(); 
  }
}
