class Opponent{
    static all = [];
    constructor(){
        this.x = 100;
        this.y = 200;
        this.color = 'yellow';
        this.width = 10;
        this.height = 10;

        Opponent.all.push(this);
    }

    update(){

    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}