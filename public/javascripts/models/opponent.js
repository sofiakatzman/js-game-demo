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
        const lasers = Laserbeam.all
        const opHit = lasers.find(laser =>   
            this.x < laser.x + laser.width &&
            this.x + this.width > laser.x &&
            this.y < laser.y + laser.height &&
            this.y + this.height > laser.y
        )
        
        // remove opponent
        if(opHit){
            console.log("op defeated!");
            const index = lasers.indexOf(opHit);
            if(index > -1){
                lasers.splice(index, 1);
            }

            const opIndex = Opponent.all.indexOf(this);
            if(opIndex) console.log(opIndex);
            if(opIndex > -1){
                Opponent.all.splice(opIndex, 1);
            }
        }
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}