// Add some header info
// For TM template code

// Video
let video;
let label='under process...';
let classifier;
let modelURL='https://teachablemachine.withgoogle.com/models/8yCXMPKLV/';
// STEP 1: Load the model!
function preload(){
  classifier=ml5.imageClassifier(modelURL+ 'model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();

  // STEP 2: Start classifying
}

// STEP 2 classify!
function  classifyVideo(){
  classifier.classify(video,gotResults);
  
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(244);//255 try out
  text(label,width/2,height-16);
  
  let emoji='😓';
  if(label =='Mask'){
    emoji='😷'
  }
    
  textSize(256);
  text(emoji,width/2,height/2);
}


// STEP 3: Get the classification!
function gotResults(error,results){
  if(error){
    console.error(error);
    return
  }
    label=results[0].label;
    classifyVideo();
    //console.log(results[0].label);
  
}
