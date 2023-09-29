const particulas = []
const n = 20

function setup() {
  // const dims = document.body.getBoundingClientRect()
  const canvas = createCanvas(document.body.scrollWidth, document.body.scrollHeight);
  canvas.parent('fondo');
  for(let i = 0; i < n; i++){
    particulas.push(new Particula())
  }
}

function draw() {
  background(255, 10);
  stroke(229, 178, 50);
  
  for (const p of particulas) p.updraw()
  
}

class Particula{
  
  constructor(){
    
    if(random() > 0.5){
      this.p = createVector(random(0, width), 0)
      this.v = createVector(0, random(0.5, 1.2))
    }else{
      this.p = createVector(0, random(0, width))
      this.v = createVector(random(0.5, 1.2), 0)
    }
    
  }
  
  update(){
    this.p.add(this.v)
    this.limites()
    this.cambio()
  }
  
  limites(){
    if(this.p.x > width) this.p.x = 0
    if(this.p.y > width) this.p.y = 0
  }
  
  cambio(){
    if(random() < 0.01){  // 1%
      const swap = this.v.x
      this.v.x = this.v.y
      this.v.y = swap
    }
  }
  
  draw(){
    circle(this.p.x, this.p.y, 2)
  }
  
  updraw(){
    this.update()
    this.draw()
  }
}