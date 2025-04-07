function clearFrame(){
    ctx.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT)
}

function drawBackground(){
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0,0, GAME_WIDTH, GAME_HEIGHT);
}

function update(){
    // console.log('xspeed', player.xspeed)
    // console.log('yspeed', player.yspeed)
    player.update();
    Laserbeam.all.forEach(laserbeam => laserbeam.update())
    Opponent.all.forEach(opponent => opponent.update())
}

function draw(){
    drawBackground();
    player.draw();
    Laserbeam.all.forEach(laserbeam => laserbeam.draw())
    Opponent.all.forEach(op => op.draw());
}

function gameLoop(){
    clearFrame()
    update()
    draw()

    animate(gameLoop)
}

function setup(){
    player = new Player();
    player.controls();
    new Opponent();
    
    animate(gameLoop)
}

document.addEventListener('DOMContentLoaded', function(){
    setup()
})