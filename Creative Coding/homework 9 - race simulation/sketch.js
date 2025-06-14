let racecars = []; 
let numCars;        

function setup() {
  createCanvas(600, 400);
  
  numCars = int(random(3, 11)); 

  // Initialize racecars with random speeds and colors
  for (let i = 0; i < numCars; i++) {
    let speed = random(2, 5); 
    let color = [random(100, 255), random(100, 255), random(100, 255)]; 
    let yPosition = (i + 1) * (height / (numCars + 1)); 
    racecars.push(new Racecar(0, yPosition, color, speed));
  }
}

function draw() {
  background(220);
  drawFinishLine();

  for (let car of racecars) {
    car.move();
    car.display();
    car.checkForFinish();
  }
}

class Racecar {
  constructor(x, y, color, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
  }

  //how to racecar looks
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, 40, 20); 
    fill(0); 
    ellipse(this.x + 5, this.y + 20, 10, 10); 
    ellipse(this.x + 35, this.y + 20, 10, 10); 
  }

 
  move() {
    this.x += this.speed;
  }

  checkForFinish() {
    if (this.x + 40 >= width - 10) { 
      noLoop();
      fill(0);
      textSize(24);
      textAlign(CENTER, CENTER);
      text('Race Over!', width / 2, height / 2);
    }
  }
}

function drawFinishLine() {
  stroke(0);
  strokeWeight(4);
  line(width - 10, 0, width - 10, height); 
  for (let i = 0; i < height; i += 20) {
    if (i % 40 === 0) fill(255);
    else fill(0);
    rect(width - 10, i, 10, 20); 
  }
}
