import Paddle from "/src/paddle";
import inputHandler from "/src/input";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

new inputHandler(paddle);

let lastTime = 0;
function gameloop(timestamp) {
  let deltTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameloop);
}
gameloop();
