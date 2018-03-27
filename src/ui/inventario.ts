/**
 * Created by Maximiliano on 13/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../ui/slot.ts"/>

class Inventario extends Phaser.Sprite {
    slots: Phaser.Group;
    activo: boolean = false;

    constructor(juego: Phaser.Game){
        super(juego,juego.width-117,3,"Inventario");
        juego.add.existing(this);
        //this.visible = false;
        this.slots = juego.add.group();

        this.dibujar(juego);

        this.slots.getTop();
    }

    dibujar(juego: Phaser.Game){
        var tempSprite;

        for (var i = 0; i<4; i++){
            for (var j = 0; j<7; j++){
                tempSprite = new Slot(juego, this.position.x + 3 + 28 * i, this.position.y + 3 + 28 * j);
                this.slots.add(tempSprite);
            }
        }
    }

    almacenar(semilla: Semilla){
        this.slots.getTop().regalar(semilla);
    }

}