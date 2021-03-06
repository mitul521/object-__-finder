status="";
object=[];
function setup(){
 canvas= createCanvas(380,380);
 canvas.center();
 video= createCapture(VIDEO);
 video.size(380,380);
 video.hide()
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects";
      object_name = document.getElementById("object_name").value; 

}
function draw(){
    image(video,0,0,480,380);
    if(status =!""){
     objectDetector.detect(video,gotResult);
     for ( i = 0; i <object.length; i++) {
      document.getElementById("status").innerHTML="Status : object detected";
      document.getElementById("number_objects").innerHTML="number_object  "+object.length;
      fill("#FF0000");
      percent=floor(object[i].confidence*100);
      text(object[i].label+"  "+percent+"%",object[i].x+15,object[i].y+15);
      noFill();
      stroke("#FF0000")
      rect(object[i].x,object[i].y,object[i].width,object[i].height);
     }
    }
}
function gotResult(error,result){
 if(error){
console.log(error);
 }
 else{
     console.log(result);
     object=result;
    }
}
function modelLoaded(){
    console.log("model is on");
    status=true;
}