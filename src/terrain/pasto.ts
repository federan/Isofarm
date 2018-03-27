/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
module Terrain {
    export class Pasto extends Phaser.Sprite {
        id = 0;
        constructor(game: Phaser.Game, x: number, y: number){
            super(game, x, y, "Pasto");
            game.add.existing(this);
        }
        actualizar(){}
    }
}