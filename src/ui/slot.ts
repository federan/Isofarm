/**
 * Created by Maximiliano on 13/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../entities/semilla.ts"/>

var cursor;

class Slot extends Phaser.Sprite {
    game: Phaser.Game;
    almacenado: Semilla = null;
    constructor(juego: Phaser.Game, x: number, y: number){
        super(juego, x, y, "Slot");
        juego.add.existing(this);
        this.game = juego;
        this.inputEnabled = true;
        this.events.onInputDown.add(function(){
            this.click();
        }, this);
    }
    regalar(semilla: Semilla){
        this.almacenado = semilla;
        this.almacenado.position.x = this.position.x;
        this.almacenado.position.y = this.position.y;
        semilla.position.x+=3;
        semilla.position.y+=3;
    }

    guardar(semilla: Semilla){
        this.regalar(semilla);
        cursor.desvincular();
    }

    extraer(){
        cursor.recolectar(this.almacenado);
        this.almacenado = null;
    }

    click(){
        if (this.almacenado != null && cursor.almacenado == null){
            this.extraer();
        } else if(this.almacenado == null && cursor.almacenado != null) {
            this.guardar(cursor.almacenado);
        }
    }
}