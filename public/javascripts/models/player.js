class Player{
    constructor(){
        this.x = (GAME_WIDTH / 2) - 10;
        this.y = (GAME_HEIGHT / 2) - 10;
        this.color = 'red';
        this.width = 20;
        this.height = 20;
        this.direction = {
            up: true,
            down: false,
            left: false,
            right: false
        }

        this.xspeed=0;
        this.yspeed=0;
        this.addMovement = this.addMovement.bind(this);
        this.stopMovement = this.stopMovement.bind(this);
        this.canFire = true;
        this.fireLaserBeam = this.fireLaserBeam.bind(this);
    }

    controls(){
        this.setupMovement()
    }
    
    setupMovement(){
        document.addEventListener('keydown', this.addMovement)
        document.addEventListener('keyup', this.stopMovement)
        document.addEventListener('keydown', this.fireLaserBeam)
    }

    addMovement(e){
        // console.log(e);
        switch(e.keyCode){
            case UP_KEY:
                if(this.y >= 0){
                    this.yspeed = -2;
                } else{
                    this.yspeed = 0;
                    this.y = 0;
                }
                this.xspeed = 0;
                this.resetDirection();
                this.direction.up = true;
                break;
            case DOWN_KEY:
                if(this.y < (GAME_HEIGHT - this.height)){
                    this.yspeed = 2;
                }else{
                    this.yspeed = 0;
                    this.y = GAME_HEIGHT - this.height
                }
                this.xspeed = 0;
                this.resetDirection();
                this.direction.down = true;
                break;
            case LEFT_KEY:
                if (this.x > 0){
                    this.xspeed = -2;
                }else {
                    this.xspeed = 0;
                    this.x = 0;
                }
                this.yspeed = 0;
                this.resetDirection();
                this.direction.left = true;
                break;
            case RIGHT_KEY:
                if (this.x < (GAME_WIDTH - this.width)){
                    this.xspeed = 2;
                }else {
                    this.xspeed = 0;
                    this.x = GAME_WIDTH - this.width;
                }
                this.yspeed = 0;
                this.resetDirection();
                this.direction.right = true;
                break;
        }
    }

    stopMovement(e){
        // console.log(e);
        switch(e.keyCode){
            case UP_KEY:
                this.yspeed = 0;
                break;
            case DOWN_KEY:
                this.yspeed = 0;
                break;
            case LEFT_KEY:
                this.xspeed = 0;
                break;
            case RIGHT_KEY:
                this.xspeed = 0;
                break;
        }
    }

    fireLaserBeam(e){
        switch (e.keyCode){
            case SPACE_BAR:
                if(this.canFire == true){
                    console.log("pew pew!");
                    let laserBeamAttr = {};
                    if(this.direction.up){
                        laserBeamAttr.height = 25;
                        laserBeamAttr.width = 5;
                        laserBeamAttr.y = this.y - laserBeamAttr.height - 5;
                        laserBeamAttr.x = this.x + 7.5;
                        laserBeamAttr.direction = "up";
                    } else if(this.direction.down){
                        laserBeamAttr.height = 25;
                        laserBeamAttr.width = 5;
                        laserBeamAttr.y = this.y + laserBeamAttr.height + 5;
                        laserBeamAttr.x = this.x + 7.5;
                        laserBeamAttr.direction = "down";
                    } else if(this.direction.left){
                        laserBeamAttr.height = 5;
                        laserBeamAttr.width = 25;
                        laserBeamAttr.x = this.x - laserBeamAttr.width - 5;
                        laserBeamAttr.y = this.y + 7.5;
                        laserBeamAttr.direction = "left";
                    } else if(this.direction.right){
                        laserBeamAttr.height = 5;
                        laserBeamAttr.width = 25;
                        laserBeamAttr.x = this.x + laserBeamAttr.width + 5;
                        laserBeamAttr.y = this.y + 7.5;
                        laserBeamAttr.direction = "right";
                    } 
                    new Laserbeam(laserBeamAttr)
                    this.canFire = false;
                    setTimeout(()=> this.canFire = true, 500)
                }
                break;
        }
    }

    resetDirection(){
        this.direction = {
            up: false,
            down: false,
            left: false,
            right: false,
        }
    }

    update(){
        //used for updating position
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    draw(){
        //used for drawing player on canvas
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}