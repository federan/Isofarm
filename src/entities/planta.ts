/**
 * Created by Maximiliano on 12/07/2015.
 */
///<reference path="../phaser.d.ts"/>

class Planta extends Phaser.Sprite {
    especie: string;
    constructor(juego: Phaser.Game, x: number, y: number, especie: string){
        super(juego, x, y, "Planta.Bulto");
        juego.add.existing(this);
        this.especie = especie;
    }
}