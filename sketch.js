var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(displayWidth,displayHeight); 
    textSize(30);
angleMode(DEGREES);   
}

function draw(){
    background(0);
      
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    fill("white");
    stroke(243,180,120);
    text(hr + ':'+ mn + ':' + sc , 450,450 );
    
    fill ("pink");
    stroke(255,255,255);
    strokeWeight(2);
    
    text("pink", 200,200);
    
    fill ("white");
    noStroke();
    text("hand represents hours",280,200);

    fill ("purple");
    stroke(255,255,255);
    strokeWeight(2);
   
    text("purple", 200,250);
    
    
    fill ("white");
    noStroke();
    text("hand represents minutes",290,250);
    
    fill ("teal");
    stroke(255,255,255);
    strokeWeight(2);
    text("teal", 200,300);

    fill ("white");
    noStroke();
    text("hand represents seconds",280,300);

    translate(500,500);
    rotate(-90);
    
    
  
    
    
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

   
    push();
    rotate(scAngle); 
    stroke("teal");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

  
    push();
    rotate(mnAngle);
    stroke("pink");
    strokeWeight(7);
    line(0,0,75,0);
    pop()


    push();
    rotate(hrAngle);
    stroke("purple");
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)


    strokeWeight(10);
    noFill();
    
    stroke("teal");
    arc(0,0,300,300,0,scAngle);

    stroke("pink");
    arc(0,0,280,280,0,mnAngle);

    stroke("purple");
    arc(0,0,260,260,0,hrAngle);

    stroke (255);
    point(0,0);
}