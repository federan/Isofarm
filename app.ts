/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="src/phaser.d.ts"/>
///<reference path="src/states/Preloader.ts"/>
///<reference path="src/states/Partida.ts"/>
class Isofarm {
    game: Phaser.Game;

    constructor(){
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "container", {preload: this.preload});
    }

    preload(){
        console.log("Booting..");

        this.game.stage.backgroundColor = '#5c9f32';

        this.game.state.add("Preload", Estados.Preloader);
        this.game.state.add("Partida", Estados.Partida);

        this.game.state.start("Preload");
    }

}

window.onload = () => {
    var isofarm = new Isofarm();
};