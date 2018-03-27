/**
 * Created by Maximiliano on 14/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../entities/semilla.ts"/>
class Cursor {
    game: Phaser.Game;
    almacenado: Semilla = null;
    constructor(game: Phaser.Game){
        this.game = game;
    }
    recolectar(semilla: Semilla){
        this.almacenado = semilla;
    }
    desvincular(){
        this.almacenado = null;
    }

    borrar(){
        this.almacenado.destroy();
        this.desvincular();
    }

    actualizar(){
        if (this.almacenado != null){
            this.almacenado.x = this.game.input.mousePointer.x;
            this.almacenado.y = this.game.input.mousePointer.y;
        }
    }
}