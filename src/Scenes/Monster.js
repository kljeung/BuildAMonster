class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.arm = this.add.sprite(this.bodyX+100, this.bodyY+40, "monsterParts", "arm_blueC.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX-100,this.bodyY+40,  "monsterParts", "arm_greenE.png");
        my.sprite.arm2.setFlipX(true);
        my.sprite.leg = this.add.sprite(this.bodyX-50,this.bodyY+110,  "monsterParts", "leg_whiteD.png");
        my.sprite.leg.setFlipX(true);
        my.sprite.leg2 = this.add.sprite(this.bodyX+40,this.bodyY+110,  "monsterParts", "leg_redA.png");
        my.sprite.acc = this.add.sprite(this.bodyX+100, this.bodyY-20, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.acc2 = this.add.sprite(this.bodyX-60, this.bodyY-60, "monsterParts", "detail_red_ear_round.png");
        my.sprite.acc2.setFlipX(true);
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkD.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_psycho_light.png");

        //if ()
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouth2.visible=false;
        
        this.keys = {
            A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            F: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        };

        
    }

    /*move(dx) {
        let my=this.my;
    }*/

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
            my.sprite.mouth.visible=true;
            my.sprite.mouth2.visible=false;
        }
        if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
            my.sprite.mouth.visible = false;
            my.sprite.mouth2.visible = true;
        }
        let moveDirection = 0;
        if (this.keys.A.isDown) {
            moveDirection = -1;
        } else if (this.keys.D.isDown) {
            moveDirection = 1;
        }
        if (moveDirection !== 0) {
            for (let part in my.sprite) {
                my.sprite[part].x += moveDirection // this.moveSpeed;
            }
        }

    }

}
