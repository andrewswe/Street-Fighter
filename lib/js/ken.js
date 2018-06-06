class Ken {
  constructor(context){

    this.props = {
      numFrames: 0,
      framesTicked: 0,
      groundedY: 170,
      ctx: context,
      img: "lib/assets/images/ken.png",
      hv: 0,
      vv: 0,
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
    this.chill();
  }

  update(){
    if(this.props.framesTicked === 0 || this.props.srcX >= 270){
      this.props.dx = 0;
      this.props.framesTicked = 0;
    }else{
      this.props.dx += 65;
      this.props.framesTicked += 1;
    }
  }

  chill(){
    this.props.numFrames = 4;
    for(let i = 0; i < this.props.numFrames; i++){
      this.props.srcX = i * 65;
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
    this.props.spr = new Image();
    this.props.spr.src = this.props.img;
    this.clear();

    this.props.spr.onload = () => {
      this.props.ctx.drawImage(
        this.props.spr,
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
