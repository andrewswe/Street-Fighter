const Controller = (player) => {
  $(document).keydown(function(e) {
  //if the user pressed 'D'
  if(e.keyCode === 65) {
    player.moveLeft();
  }
  else if(e.keyCode === 68) {
    player.moveRight();
  }
  else if(e.keyCode === 87) {
    player.jump();
  }
  });
};

export default Controller;
