

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(200)
    var x = 100;

    for(var i=0; i<1250; i += 50) {
        fill(0);
        ellipse(i,x,50,50);

        if (i % 3 == 0){
            //if divisible by 3 = purple circle
        fill(153,30,240);
        ellipse(i,x,50,50);
        }


    if(i % 5 == 0) {
        // if divisible by 5 = green square
    fill(0,255,0);
    square(i + 25, x - 25 ,50);
    }

    if (i % 3 == 0 && i % 5 == 0){
        // if divisble by both = blue square
        fill(0,0,225);
        square(i + 25, x - 25, 50);
    }
}
}