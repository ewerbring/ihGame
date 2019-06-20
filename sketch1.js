const game = new Game();

let score = 0;
let playing = false;
let button;

let videoBlockArray =[
  new VideoBlock(330,110,'video/dynamite/d11.mp4', 3,1, true, "bottomleft", true),

  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d12.mp4', 3,2, false, "topright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d13.mp4', 3,3, false, "topleft", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d14.mp4', 3,4, false, "bottomright", false),

  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d21.mp4', 4,1, false, "topright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d22.mp4', 4,2, false, "topright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d23.mp4', 4,3, false, "topleft", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d24.mp4', 4,4, false, "bottomright", false),

  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d31.mp4', 5,1, false, "topright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d32.mp4', 5,2, false, "topleft", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d33.mp4', 5,3, false, "bottomright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d34.mp4', 5,4, false, "topright", false),

  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d41.mp4', 6,1, false, "topright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d42.mp4', 6,2, false, "topleft", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d43.mp4', 6,3, false, "bottomright", false),
  new VideoBlock(Math.random()*900,Math.random()*500,'video/dynamite/d44.mp4', 6,4, false, "bottomright", false),
]

let videoBlockArrayLvl =[
  new VideoBlockLvl(110,110,'video/newpulp/p21.mp4', 1,1, true, "bottomleft", true),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p22.mp4', 1,2, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p23.mp4', 1,3, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p24.mp4', 1,4, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p25.mp4', 1,5, false, "topright", false),
  
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p31.mp4', 2,1, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p32.mp4', 2,2, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p33.mp4', 2,3, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p34.mp4', 2,4, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p35.mp4', 2,5, false, "topright", false),
  
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p41.mp4', 3,1, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p42.mp4', 3,2, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p43.mp4', 3,3, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p44.mp4', 3,4, false, "topright", false),
  new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p45.mp4', 3,5, false, "topright", false),
  
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p51.mp4', 4,1, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p52.mp4', 4,2, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p53.mp4', 4,3, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p54.mp4', 4,4, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p55.mp4', 4,5, false, "topright", false),
  
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p61.mp4', 5,1, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p62.mp4', 5,2, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p63.mp4', 5,3, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p64.mp4', 5,4, false, "topright", false),
  // new VideoBlockLvl(Math.random()*900,Math.random()*500,'video/newpulp/p65.mp4', 5,5, false, "topright", false),
]

var x = 200;
var y = 200;
var startX = 0;
var startY = 0;

function preload() {
  videoBlockArray.forEach(video => {
    video.preload()
  });
  videoBlockArrayLvl.forEach(video => {
    video.preload()
  })
  winningImage = loadImage('assets/win.png');
}   

function setup() {
  canvas = createCanvas(1100, 770);
  canvas.position((windowWidth-1100)/2,(windowHeight-770)/2 );
  canvas.parent("bodywrapper")
  button = createButton('play');
  button.mousePressed(toggleVid); 
  nextLevel =  createA('lvl1.html/', 'NEXT LEVEL');
  nextLevel.style('display', 'none')
  
  frameRate(24)
}


function toggleVid() {
  console.log("plays")

    if (game.level===1){
  if (playing) {
    
    videoBlockArray.forEach(v => v.video.pause())
    button.html('play');
  } else {
    console.log("paused")
    videoBlockArray.forEach(v => v.video.loop())
    button.html('pause');
  }
}
if (game.level===2){
  if (playing) {
    videoBlockArrayLvl.forEach(v => v.video.pause())
    button.html('play');
  } else {
    videoBlockArrayLvl.forEach(v => v.video.loop())
    button.html('pause');
  }
}
  playing = !playing;
}


function myFunction() {
  if(score<videoBlockArray.length){
  score = score+1;
  document.getElementById("myText").innerHTML = score;
}}
function myFunction2() {
  if(score<videoBlockArrayLvl.length){
  newscore = score+videoBlockArrayLvl.length;
  document.getElementById("myText").innerHTML = newscore;
}}


function draw() { 
    if(game.level ===1){
        clear()
        game.drawGrid();
        videoBlockArray.forEach(video => video.draw())
        let winTest = videoBlockArray.filter(obj=> obj.win==false)
        if(winTest.length==0 && playing){
        image(winningImage, (width-900)/2, (height-800)/2, 900, 400)
        videoBlockArray.forEach(video => myFunction())
        nextLevel.style('display', 'block')
        

            
        setTimeout(()=>{
        nextLevel.style('display', 'none')
        if(playing)
        toggleVid()
        console.log("toggle")
        game.level = 2},7000)
        };
    }

      if(game.level ===2){

          clear()
          game.drawGrid();
          videoBlockArrayLvl.forEach(video => video.draw())
          let winTest = videoBlockArrayLvl.filter(obj=> obj.win==false)
          if(winTest.length==0){
          image(winningImage, (width-900)/2, (height-400)/2, 900, 400)
          videoBlockArray.forEach(video => myFunction2())

        };
  }
}

function mousePressed() {  
  if(game.level ===1){
    videoBlockArray.forEach(video => video.mousePressed())
  }
  if(game.level ===2){
    videoBlockArrayLvl.forEach(video => video.mousePressed())
    // button.mousePressed(toggleVid); 
  }
}
  
  function mouseDragged() {
    if(game.level ===1){
    videoBlockArray.forEach(video => video.mouseDragged())
    }
    if(game.level ===2){
    videoBlockArrayLvl.forEach(video => video.mouseDragged())
    }
  }