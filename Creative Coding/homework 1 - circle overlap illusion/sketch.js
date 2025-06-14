function setup(){
    createCanvas(windowWidth, windowHeight);
    background(100);
    version1();
}

function version1(){

    cnv1 = createGraphics(width,height);
    cnv1.noStroke();

    //this the yellow
    cnv1.fill(255,255,0)
    cnv1.ellipse(265,220, 150, 150);
    cnv1.noStroke();

    //this the red circle and its center
    cnv1.fill(254,0,0)
    cnv1.ellipse(304, 155, 150, 150);

    //this the green circle and its center
    cnv1.fill(0,255,0)
    cnv1.ellipse(380, 155, 150, 150);

    //this the blue and its center
    cnv1.fill(0,0,255)
    cnv1.ellipse(415, 223, 150, 150);

    //this the purp circle and its center
    cnv1.fill(160,32,240)
    cnv1.ellipse(375, 288, 150, 150);

    //this the orange that gets overlapped by the yellow
    cnv1.fill(225,100,0)
    cnv1.ellipse(299,280,150,150)
    ctx1 = cnv1.canvas.getContext("2d");
    ctx1.clip();
    cnv1.fill(225,225,0)
    cnv1.ellipse(265,220,150,150)

    image(cnv1,0,0);

    //yellow overlapped by the red
    cnv3 = createGraphics(width,height);
    cnv3.noStroke();
    cnv3.fill(255,255,0)
    cnv3.ellipse(265,220, 150, 150);
    ctx3=cnv3.canvas.getContext("2d");
    ctx3.clip();
    cnv3.fill(254,0,0);
    cnv3.ellipse(304, 155, 150, 150);

    image(cnv3,0,0)
    
}

function draw(){
    
}