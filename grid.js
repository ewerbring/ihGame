class Game {
  constructor(){
    this.level = 1;
  }
    drawGrid() {
      let x = 0;
  
      for (let i = 0; i <= 14; i++) {
        line(x, 0, x, 1000);
        line(0, x, windowWidth, x)
        stroke(255, 204, 0);
        strokeWeight(1.5)
       

        x+=110;
      }
    }
  }
  