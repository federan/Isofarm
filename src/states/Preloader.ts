/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
module Estados {
    export class Preloader extends Phaser.State{
        game: Phaser.Game;
        constructor(){
            super();
        }

        preload(){
            console.log("Preloading...");

            //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.game.state.start("Partida");
        }
    }
}