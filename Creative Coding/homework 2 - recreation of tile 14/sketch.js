function setup(){
    createCanvas(400, 269);
}

function draw(){
    background(100);

    //the chin(?)
    fill(247,193,155);
    strokeWeight(9)
    ellipse(128,40,540,230)

    //left coat background shape
    beginShape();
    fill(255,218,70) //mustard yellow
    strokeWeight(4);
    vertex(0,20)
    vertex(60,20)
    curveVertex(170,70)
    vertex(255,269)
    vertex(264,269)
    vertex(0,269)
    endShape(CLOSE);

    ellipse(200,135,5,5)

    //that balck triangle thing
    beginShape();
    fill(0,0,0);
    strokeWeight(3);
    vertex(210,150)
    vertex(314,123)
    vertex(301,250)
    vertex(309,269)
    vertex(258,269)
    endShape(CLOSE);

    beginShape();
    fill(255,218,70)
    strokeWeight(4);
    vertex(339,112)
    vertex(400,183)
    vertex(400,269)
    vertex(309,269)
    vertex(301,250)
    vertex(314,123)
    endShape(CLOSE);

    beginShape();
    fill(0,0,128)
    strokeWeight(3);
    vertex(369,94)
    vertex(400,123)
    vertex(400,183)
    vertex(339,112)
    endShape(CLOSE);

    beginShape();
    fill(225,225,225)
    strokeWeight(5)
    vertex(386,80)
    vertex(400,90)
    vertex(400,123)
    vertex(369,94)
    endShape(CLOSE);

    beginShape();
    fill(0,0,0)
    curveVertex(11,207)
    curveVertex(0,200)
    curveVertex(0,235)
    curveVertex(16,228)
    endShape(CLOSE);

    beginShape();
    fill(0,0,0)
    curveVertex(8,55)
    curveVertex(0,45)
    curveVertex(0,80)
    curveVertex(4,75)
    endShape(CLOSE);

    beginShape();
    fill(0)
    curveVertex(26,120)
    curveVertex(0,110)
    curveVertex(0,120)
    curveVertex(24,128)
    endShape(CLOSE);

    beginShape();
    fill(0)
    vertex(200,269)
    vertex(190,220)
    vertex(161,260)
    vertex(115,240)
    vertex(125,269)
    endShape();

    beginShape();
    fill(0)
    vertex(60,270)
    vertex(45,253)
    vertex(69,235)
    vertex(101,269)
    endShape();

    ellipse(365,220,80,40)
    ellipse(350,170,60,60)

    beginShape();
    curveVertex(101,215)
    curveVertex(73,210)
    curveVertex(90,180)
    curveVertex(105,195)
    endShape(CLOSE);

    beginShape();
    curveVertex(33,175)
    curveVertex(50,200)
    curveVertex(70,160)
    curveVertex(40,160)
    endShape(CLOSE);

    beginShape();
    vertex(190,115)
    vertex(170,138)
    vertex(176,171)
    vertex(151,177)
    vertex(130,187)
    vertex(140,208)
    vertex(153,196)
    vertex(177,197)
    vertex(229,208)
    endShape(CLOSE);

    beginShape();
    vertex(77,62)
    vertex(47,54)
    vertex(30,72)
    vertex(41,97)
    vertex(70,104)
    vertex(60,79)
    endShape(CLOSE);

    beginShape();
    vertex(92,63)
    vertex(116,68)
    vertex(128,93)
    vertex(120,120)
    vertex(92,113)
    vertex(105,90)
    endShape(CLOSE);
}