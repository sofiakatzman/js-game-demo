function drawBackground(){
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0,0, GAME_WIDTH, GAME_HEIGHT);
}

function setup(){
    drawBackground();
}



document.addEventListener('DOMContentLoaded', function(){
    setup()
})