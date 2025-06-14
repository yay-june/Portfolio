let particles = []; 

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0); 
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

function mousePressed() {
  let newParticlesCount = floor(random(1, 11));
  for (let i = 0; i < newParticlesCount; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 15); // Random size 
    this.xSpeed = random(-2, 2); // Random horiz spd
    this.ySpeed = random(-2, 2); // Random vert spd
    this.color = color(255, random(100, 255), random(100, 255), 150); // Random color
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // loops around edge
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }

  display() {
    noStroke();
    fill(this.color); 
    ellipse(this.x, this.y, this.size);
  }
}
