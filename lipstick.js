mouthX=0;
mouthY=0;

function preload() {
   lipstick_face = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mouthX = results[0].pose.nose.x-25;
    mouthY = results[0].pose.nose.y+17;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(lipstick_face, mouthX, mouthY, 50, 20);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function mustache(){
    window.location = "mustache.html";
}