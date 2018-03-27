/**
 * Created by Maximiliano on 13/07/2015.
 */
///<reference path="../phaser.d.ts"/>

class Semilla extends Phaser.Sprite {
    especie: string;
    constructor(juego: Phaser.Game, x: number, y: number, especie: string){
        super(juego, x, y, "Semilla.placeholder");
        juego.add.existing(this);
        this.especie = especie;
    }
}