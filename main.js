lipx="";
lipy="";

function preload(){
    moustache=loadImage("https://i.postimg.cc/WzwnfJ99/moustache-PNG.png")
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",getposes);
}
function draw(){
    image(video,0,0,500,500)
    image(moustache,lipx-50,lipy+10,100,35);
}
function modelloaded(){
    console.log("posenet model is loaded")
}
function getposes(results){
    if(results.length>0){
        console.log(results)
        lipx=results[0].pose.nose.x
        lipy=results[0].pose.nose.y
        console.log(lipx,lipy)
    }
}
function take_snapshot(){
    save('NeemayIsTheGreatest.jpg')
}