/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../entities/semilla.ts"/>
///<reference path="../entities/planta.ts"/>

module Terrain {
    export class Tierra extends Phaser.Sprite {
        id: number = 1;
        humedad: number = 0;
        particulas: any;
        regando: boolean = false;
        planta: Planta = null;

        _minHumedad: number = 600;
        _maxHumedad: number = 1000;
        _regarHumedad: number = 10;

        constructor(game: Phaser.Game, x: number, y: number){
            super(game, x, y, "Tierra");
            game.add.existing(this);
            this.particulas = game.add.emitter();
            this.enableInput(this);
        }

        private enableInput(sprite: Tierra){
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(function(){
                if (cursor.almacenado == null) {
                    sprite.regando = true;
                } else if(this.planta == null){
                    this.planta = new Planta(cursor.game, this.position.x, this.position.y, cursor.almacenado.especie);
                    cursor.borrar();
                }
            },this);
        }

        regar(): boolean{ // MOJAR TIERRA
            this.humedad+=this._regarHumedad;
            if (this.humedad >= this._maxHumedad) return false;
            if (this.humedad >= this._minHumedad)
                this.tint = 0xAAAAAA;
            return true;
        }

        secar(){ // SECADO DE ACTUALIZACION
            if (this.humedad > 0)
                this.humedad-=1;
            if(this.humedad < this._minHumedad)
                this.tint = 0xFFFFFF;
        }

        actualizar(){ // ACTUALIZACION GLOBAL DE ESTA TIERRA
            if (this.regando == true)
                this.regando = this.regar();
            else
                this.secar();
        }

        plantar(juego: Phaser.Game, semilla: Semilla){
            if (this.planta != null) {
                if (this.humedad >= this._minHumedad) {
                    this.planta = new Planta(juego, this.width / 2, this.height / 2, semilla.especie);
                    semilla.destroy();
                }
            }
        }
    }
}