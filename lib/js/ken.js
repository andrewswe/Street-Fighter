import Sprite from './sprite.js';

class Ken {
  constructor(context){

    this.props = {
      numFrames: 0,
      ctx: context,
      img: "lib/images/ken.png",
      moving: false,
      srcX: 0,
      srcY: 80,
      width: 65,
      height: 80,
      dx: 0,
      dy: 170
    };


    this.go = this.go.bind(this);
    this.render = this.render.bind(this);
  }

  go(){
    if(!this.moving){
      this.render();
    }
  }

  update(){

  }

  chill(){
    this.props.numFrames = 4;
    for(let i = 0; i < this.props.numFrames; i++){
      this.props.srcX += 65 * i;
      this.render();
    }
    this.props.srcX = 0;
  }

  clear(){
    this.props.ctx.clearRect(
      this.props.dx,
      this.props.dy,
      this.props.width * 1.4,
      this.props.height * 1.4
    );
  }

  moveLeft(){
    this.props.numFrames = 4;
    this.clear();
    this.props.dx -= 10;
    this.render();
  }

  moveRight(){
    this.clear();
    this.props.dx += 10;
    this.render();
  }

  jump(){
    this.clear();
    this.props.dy -= 40;
    this.render();
  }

  render(){
    let spr = new Image();
    spr.src = this.props.img;

    spr.onload = () => {
      this.props.ctx.drawImage(
        spr,
        this.props.srcX,
        this.props.srcY,
        this.props.width,
        this.props.height,
        this.props.dx,
        this.props.dy,
        this.props.width * 1.4,
        this.props.height * 1.4
      );
    };
  }
}

export default Ken;
