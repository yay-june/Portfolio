
let snake;
let food;
let gridSize = 20;
let cols, rows;
let direction;
let snakeColor;
let foodColor;
let score = 1; 

function setup() {
  createCanvas(800, 600);
  frameRate(10); 
  cols = floor(width / gridSize);
  rows = floor(height / gridSize);
  snake = new Snake();
  snakeColor = color(0, 255, 0); 
  generateFood(); 
}

function draw() {
  background(220);
  if (snake.collidesWithSelf()) {
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2 - 20);
    textSize(16);
    text('Score: ' + score, width / 2, height / 2 + 20); 
    noLoop(); 
  } else {
    snake.move();
    snake.checkForFood();
    snake.show(); 
    fill(foodColor);
    rect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text('Score: ' + score, 10, 10); 
  }
}
function generateFood() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  do {
    foodColor = getRandomColor();
  } while (foodColor.toString() === snakeColor.toString()); 
}
class Snake {
  constructor() {
    this.body = [createVector(floor(cols / 2), floor(rows / 2))]; 
    this.dir = createVector(1, 0); 
    this.grow = false;
  }
  setDir(x, y) {
    if (this.body.length > 1) {
      let nextPos = createVector(this.body[0].x + x, this.body[0].y + y);
      if (nextPos.equals(this.body[1])) {
        return;
      }
    }
    this.dir = createVector(x, y);
  }
  move() {
    let head = this.body[0].copy();
    head.add(this.dir);
    head.x = (head.x + cols) % cols;
    head.y = (head.y + rows) % rows;
    this.body.unshift(head);
    if (!this.grow) {
      this.body.pop();
    } else {
      this.grow = false;
    }
  }
  checkForFood() {
    if (this.body[0].equals(food)) {
      this.grow = true;
      snakeColor = foodColor; 
      generateFood(); 
      score++; 
    }
  }
  collidesWithSelf() {
    for (let i = 1; i < this.body.length; i++) {
      if (this.body[0].equals(this.body[i])) {
        return true;
      }
    }
    return false;
  }

  show() {
    fill(snakeColor); 
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x * gridSize, this.body[i].y * gridSize, gridSize, gridSize);
    }
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  }
}
function getRandomColor() {
  let colors = [
    color(255, 0, 0),   
    color(0, 255, 0),   
    color(0, 0, 255),   
    color(255, 255, 0), 
    color(128, 0, 128)  
  ];
  return random(colors);
}
  






