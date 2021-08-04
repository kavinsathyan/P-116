nosex=0;
nosey=0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/Z5tyWb4t/mustache.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(245,280);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache, nosex, nosey, 60,60);
   
}

function take_snapshot()
{
    save('myFilterImage.png');
}