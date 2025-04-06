class Player{
    constructor(){
        this.x = (GAME_WIDTH / 2) - 10;
        this.y = (GAME_HEIGHT / 2) - 10;
        this.color = 'red';
        this.width = 20;
        this.height = 20;
    }

    update(){
        //used for updating position

    }

    draw(){
        //used for drawing player on canvas
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}