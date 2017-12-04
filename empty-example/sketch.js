var diam1=2;
function setup() {
    createCanvas(900,900);
}

function draw() {
    background('rgb(92,117,144)');
    fill("#ADD8E6");
    stroke("#FFFF00");
    strokeWeight(2.2);
    ellipse(mouseX,mouseY,diam1,diam1);
    fill('rgb(128,128,0)');
    ellipse(mouseX,mouseY,20,20);
    fill('rgb(218,247,166)');
    triangle(300,350,400,400,200,400);
    diam1=diam1+5;
}