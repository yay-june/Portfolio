let port;
let connectionButton, zeroButton;
let cursorX, cursorY;
let speed = 0.01;
let off = "0,0,0" + "\n";
let green = "0,255,0" + "\n";
let red = "255,0,0" + "\n";

let dingSound, breakSound, shotSound;
let soundDelay = 1000; 
let lastSound = 0;

let hit = false;
let isLedOn = false;
let blinkInterval = 500; 
let lastBlinkTime = 0;

let targets = [];
let score = 0;
const TARGET_RADIUS = 25;
const TARGET_DIAMETER = TARGET_RADIUS * 2;
const NUM_TARGETS = 14;
let timer = 30;             
let lastSecond = 0;       
let gameOver = false;    

function preload(){
  dingSound = loadSound('super-mario-world-coin.mp3');
  breakSound = loadSound('wii target break.wav');
  shotSound = loadSound('wii target shoot.wav');
}

function setup() {
  createCanvas(1000, 700);

  port = createSerial();
  connectionButton = createButton('Connect');
  connectionButton.mousePressed(connect);

  zeroButton = createButton('zero Joystick');
  zeroButton.mousePressed(zero);

  cursorX = width/2;
  cursorY = height/2;
  
  targets = generateTargets(NUM_TARGETS, TARGET_RADIUS);

  shotSound.setVolume(0.5);
  dingSound.setVolume(1.8);
  breakSound.setVolume(0.25);
}

function draw() {
  background(220);

  let str = port.readUntil('\n');
  if(str != ""){
    const values = str.split(',');
    if(values.length == 3){
      let x = Number(values[0]);
      let y = Number(values[1]);
      let shoot = Number(values[2]);

      cursorX += x * speed;
      cursorY += y * speed;

      //Runs the game as long as theres time
      if (!gameOver && frameCount % 60 === 0) {
        timer--;
        if (timer <= 0) {
          gameOver = true;
        }
      }
      
      if (!gameOver) {
        // move & draw targets
        for (let t of targets) {
          t.x += t.vx;
          t.y += t.vy;
          if (t.x < TARGET_RADIUS || t.x > width - TARGET_RADIUS) t.vx *= -1;
          if (t.y < TARGET_RADIUS || t.y > height - TARGET_RADIUS) t.vy *= -1;
          drawTarget(t.x, t.y);
        }

        // Hit detection
        if (shoot === 1) {
          normalShotSound();
          for (let i = targets.length - 1; i >= 0; i--) {
            let t = targets[i]; 
            if (dist(cursorX, cursorY, t.x, t.y) < TARGET_RADIUS) {
              targets.splice(i, 1); 
              score++; 
              hit = true; 
              dingSound.play();
              breakSound.play();
              for (let t of targets) { //this function speeds up other moving targets
                t.vx *= 1.2;
                t.vy *= 1.2;
              }
              break; // Only one target can be hit at a time
            }
          }

          // LED blinking logic
          let currentTime = millis();
          if (currentTime - lastBlinkTime > blinkInterval) {
            lastBlinkTime = currentTime;
            if (isLedOn) {
              port.write(off); 
            } else {
              if (hit) {
               port.write(green); 
              } else {
                port.write(red); 
              }
            }
            isLedOn = !isLedOn;
          }   
        }
        else {
          // Turn off LED if not shooting
          if (isLedOn) {
            port.write(off);
            isLedOn = false;
          }
          hit = false; // Reset hit when shoot ends
        }
        
        //Crosshair blink on shoot
        if (shoot === 1) {
          stroke(255);     
          fill(255);        
        } else {
          stroke(0);       
          fill(0);          
        }
      
        // Draw horizontal and vertical lines
        line(cursorX - 20, cursorY, cursorX - 5, cursorY); // Left line
        line(cursorX + 5, cursorY, cursorX + 20, cursorY); // Right line
        line(cursorX, cursorY - 20, cursorX, cursorY - 5); // Top line
        line(cursorX, cursorY + 5, cursorX, cursorY + 20); // Bottom line
    
        // Draw center dot
        noStroke();
        fill(0);
        ellipse(cursorX, cursorY, 4, 4); // Tiny dot in the center
      
        // Score and timer
        fill(0);
        textSize(24);
        textAlign(LEFT, TOP);
        text("Score: " + score, 10, 10);
        text("Time: " + timer, 10, 40);  
        }   

      if (gameOver) {
        textAlign(CENTER, CENTER);
        textSize(64);
        fill(0);
        text("GAME OVER", width / 2, height / 2);
      }
    }
  }
}

function connect(){
  port.open('Arduino', 9600);
}

function zero(){
  if (port.opened()){
    port.write('zero\n');
  }
}

function normalShotSound(){ //shot sound plays only once even when button is held down
  let now = millis();
  if (now - lastSound >= soundDelay) {
    shotSound.play();
    lastSound = now;
  }
}

// Draws a target with concentric rings
function drawTarget(x, y) {
  let colors = ['white', 'red', 'white', 'red', 'yellow'];
  let size = TARGET_DIAMETER;
  for (let i = colors.length - 1; i >= 0; i--) {
    fill(colors[i]);
    stroke(0);
    strokeWeight(1);
    ellipse(x, y, size, size);
    size -= 10; // Larger decrement to match bigger size
  }
}

// Separate function to generate non-overlapping targets
function generateTargets(count, radius) {
  let generated = [];
  let maxAttempts = 1000;
  let attempts = 0;

  while (generated.length < count && attempts < maxAttempts) {
    let tx = random(radius, width - radius);
    let ty = random(radius, height - radius);
    let valid = true;

    for (let t of generated) {
      let d = dist(tx, ty, t.x, t.y);
      if (d < radius * 2 + 10) {
        valid = false;
        break;
      }
    }

    if (valid) {
      // Add random speed and direction
      generated.push({
        x: tx,
        y: ty,
        vx: random(-2, 2),
        vy: random(-2, 2)
      });
    }
    attempts++;
  }
  return generated;
}



  
