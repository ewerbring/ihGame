let score = 0;

function myFunction() {
    var number = score;
    document.getElementById("myText").innerHTML = number;
}

class VideoBlock{
    constructor(x,y,video,  column,row, isStatic, name, win){
        this.x = x 
        this.y = y
        this.row = row
        this.win = win
        this.name = name
        this.column = column
        this.isStatic = isStatic
        this.video = video
        this.overBox = false
        this.locked = false
        this.xOffset = 0.0
        this.yOffset = 0
    }
// videoBlockArray[0].scoreYmax=

    preload(){
    this.video = createVideo(`assets/${this.video}`)
    this.video.hide()
    }

    draw(){
            image(this.video,this.x,this.y,220,220)

            if (this.isStatic) {
                this.overBox = false
            }
            
            else {
                if(mouseX < this.x + 220 && mouseX > this.x && mouseY > this.y && mouseY < this.y + 220){
                    this.overBox = true;

                    if((this.x>this.column*110-10)&&(this.x<this.column*110+10)&& (this.y>this.row*110-10) && (this.y<this.row*110+10) ){
                        this.win = true;
                        console.log(this.name + ' is scoring ' + this.win)}
                        
                    else {
                        this.win= false;
                    }

                }else {
                    this.overBox = false
                }}

            myFunction()
        
            
    }
    
    mousePressed() {
        if (this.overBox) {
          this.locked = true;

        } else {
          this.locked = false;
        }
        this.xOffset = mouseX - this.x;
        this.yOffset = mouseY - this.y;
      }
      
      mouseDragged() {
        if (this.locked) {
          this.x = mouseX - this.xOffset;
          this.y = mouseY - this.yOffset;
        }
      }
      
      mouseReleased() {
        this.locked = false;
      }


    
}

