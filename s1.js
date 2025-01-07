function setup() {
    createCanvas(windowWidth, windowHeight);  // fullscreen canvas
    background(0);                         // White background
  }
  

function draw() {
  strokeWeight(2);          //  line thickness
  stroke(random(255), random(255), random(255)); // Random RGB colors
  line(random(width), random(height), random(width), random(height)); //  random lines
}
