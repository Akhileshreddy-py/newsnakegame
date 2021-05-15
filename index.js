// Import stylesheets
import './style.css';

// Write Javascript code!
var top=0;
var left=0;
var snake=document.getElementById("snake");
const appDiv = document.getElementById('app');

appDiv.innerHTML = `<h1>JS Starter</h1>`;
function ak(e)
{
  if(e.key=="ArrowUp")
{
top=top+10;
snake.style.top=top+"px";
}
if(e.key=="ArrowDown")
{
left=left+"px";
snake.style.top=top+"px";
}
console.log(e.key)
  }
addEventListener("keydown",ak);