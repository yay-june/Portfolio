let images = [];
let numImages = 5;
let imgPaths = [
  'babycuttlefish.jfif',  
  'dolphin.webp',  
  'clownfish.jpg',  
  'killerwhale.webp',
  'images.jfif'  
];

let positions = []; 

function preload() {
  for (let i = 0; i < imgPaths.length; i++) {
    images[i] = loadImage(imgPaths[i]);
  }
}

function setup() {
  createCanvas(600, 600); 
  background(0,90,225); 
  noLoop(); 

  let imgWidth = 150;
  let imgHeight = 150;

  for (let i = 0; i < numImages; i++) {
    let img = images[i];
    let validPosition = false;
    let randomX, randomY;

    while (!validPosition) {
      randomX = random(0, width - imgWidth);   
      randomY = random(0, height - imgHeight); 

      validPosition = checkNoOverlap(randomX, randomY, imgWidth, imgHeight);
    }

    positions.push({ x: randomX, y: randomY, w: imgWidth, h: imgHeight });

    image(img, randomX, randomY, imgWidth, imgHeight);
  }
}

function checkNoOverlap(x, y, w, h) {
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    if (x < pos.x + pos.w && x + w > pos.x && y < pos.y + pos.h && y + h > pos.y) {
      return false;
    }
  }
  return true;
}