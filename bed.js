status="";
img="";
objects=[];


 function preload(){
     img = loadImage('bed.jpeg');

 }

 function setup()
 {
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
console.log("Model is loaded");
status = true;
objectdetector.detect(img, gotresult);
}

function gotresult(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
    }
    
    function draw() 
    {
      image(img, 0, 0, 740, 480);
    
          if(status != "")
          {
            for (i = 0; i < objects.length; i++) 
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";
              fill("#FF0000");
              percent = floor(objects[i].confidence * 100);
              text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
              noFill();
              stroke("#FF0000");
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
          }
    }