class Laserbeam{
    static all = [];
    constructor(attr){
        this.x = attr.x;
        this.y = attr.y;
        this.width = attr.width;
        this.height = attr.height;
        this.color = 'green';
        Laserbeam.all.push(this);
    }

    update(){

    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}