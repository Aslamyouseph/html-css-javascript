// 1 - varible decleration (This section is used to decleare all the varibles that are used for this program )
var cnvs = document.getElementById("canvas").getContext("2d"); // used for the drawing porpuse
var sPosx = 80;
var sPosy = 80;
var nPosx = 0;
var nPosy = 0;
var fPosx = 140;
var fPosy = 140;
var snaketail = [];
var snakesize = 1;
var score = 0;
var gamestatus = "Ready";

// 2 - onloade functions() (This section is used for work some function when this window is lode on the browser)
window.onload = function () {
  document.addEventListener("keydown", inputcontrol); // this function is used to move the snake when we click the arrow in keyboard(codes are written in inputcontroll block)
  game = setInterval(maingame, 200); // main function is call ,and setIntravel (1000)is used for the movement of the snake in 1 second
};

// 3 - maingame functon ()(Importent code are written inside this section )
function maingame() {
  document.getElementById("game-status").innerHTML = gamestatus;
  document.getElementById("score").innerHTML = score;
  sPosx += nPosx; // used for automatically movement
  sPosy += nPosy;

  //controlling snake movement (when the snake cover the border then start in opposite directiion )
  if (sPosx > 400) {
    sPosx = 0;
  }
  if (sPosy > 400) {
    sPosy = 0;
  }
  if (sPosx < 0) {
    sPosx = 400;
  }
  if (sPosy < 0) {
    sPosy = 400;
  }
  // game area
  //bachground colour of canvas (under function are used to fill the canvas  )
  cnvs.fillStyle = "black";
  cnvs.fillRect(0, 0, 400, 400);

  // used for creating coloum inside the canvas
  for (var i = 0; i < 400; i += 20) {
    // used for creating coloum lines
    cnvs.moveTo(i, 0);
    cnvs.lineTo(i, 400);
  }
  for (var j = 0; j < 400; j += 20) {
    // used for creating row lines
    cnvs.moveTo(0, j);
    cnvs.lineTo(400, j);
  }
  cnvs.strokeStyle = "grey";
  cnvs.stroke(); // calling the functions (moveTo and lineTO )

  // creating the snake (under function are used to fill the particular coloum by yellow colour )
  cnvs.fillStyle = "yellow";
  //cnvs.fillRect(sPosx, sPosy, 20, 20); // check line 3,4
  for (var i = 0; i < snaketail.length; i++) {
    cnvs.fillRect(snaketail[i].x, snaketail[i].y, 20, 20);
    // if the snake head hit on its tail
    if (sPosx == snaketail[i].x && sPosy == snaketail[i].y && snakesize > 1) {
      clearInterval(game);
      gamestatus = "Game over ";
      document.getElementById("game-status").innerHTML = gamestatus;
    }
  }

  // creating the fruite (under function are used to fill the particular coloum red colour)
  cnvs.fillStyle = "red";
  cnvs.fillRect(fPosx, fPosy, 20, 20);

  //if snake eat fruit :
  if (sPosx == fPosx && sPosy == fPosy) {
    snakesize++;
    score += 10;
    fPosx = Math.floor(Math.random() * 20) * 20;
    fPosy = Math.floor(Math.random() * 20) * 20;
  }
  snaketail.push({ x: sPosx, y: sPosy }); // used to add new x and y values to array
  while (snaketail.length > snakesize) {
    // if the size of the snake will increass morethan the actual size then it will delete the resent size
    snaketail.shift();
  }
}

// 4 - input control() (This section is used for controlling the snake movements (left,right,top,down))
function inputcontrol(e) {
  console.log(e.keyCode);
  console.log(e.key);
  switch (e.keyCode) {
    case 38: // key number of the up key
      // move upward the snake
      nPosy -= 20;
      nPosx = 0;
      break;
    case 40: // key number of the  down key
      // move downward the snake
      nPosy += 20;
      nPosx = 0;
      break;
    case 39: // key number of the right key
      // move right the snake
      nPosx += 20;
      nPosy = 0;
      break;
    case 37: // key number of the left key
      // move left the snake
      nPosx -= 20;
      nPosy = 0;
      break;
  }
  if (
    e.keyCode == 37 || // this section is used to display game over in game status section if the head is kike on the taile
    e.keyCode == 38 ||
    e.keyCode == 39 ||
    e.keyCode == 40
  ) {
    gamestatus = "Game started ";
    document.getElementById("game-status").innerHTML = gamestatus;
  }
}
