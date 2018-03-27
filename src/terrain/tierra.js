/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../entities/semilla.ts"/>
///<reference path="../entities/planta.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Terrain;
(function (Terrain) {
    var Tierra = (function (_super) {
        __extends(Tierra, _super);
        function Tierra(game, x, y) {
            _super.call(this, game, x, y, "Tierra");
            this.id = 1;
            this.humedad = 0;
            this.regando = false;
            this.planta = null;
            this._minHumedad = 600;
            this._maxHumedad = 1000;
            this._regarHumedad = 10;
            game.add.existing(this);
            this.particulas = game.add.emitter();
            this.enableInput(this);
        }
        Tierra.prototype.enableInput = function (sprite) {
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(function () {
                if (cursor.almacenado == null) {
                    sprite.regando = true;
                }
                else if (this.planta == null) {
                    this.planta = new Planta(cursor.game, this.position.x, this.position.y, cursor.almacenado.especie);
                    cursor.borrar();
                }
            }, this);
        };
        Tierra.prototype.regar = function () {
            this.humedad += this._regarHumedad;
            if (this.humedad >= this._maxHumedad)
                return false;
            if (this.humedad >= this._minHumedad)
                this.tint = 0xAAAAAA;
            return true;
        };
        Tierra.prototype.secar = function () {
            if (this.humedad > 0)
                this.humedad -= 1;
            if (this.humedad < this._minHumedad)
                this.tint = 0xFFFFFF;
        };
        Tierra.prototype.actualizar = function () {
            if (this.regando == true)
                this.regando = this.regar();
            else
                this.secar();
        };
        Tierra.prototype.plantar = function (juego, semilla) {
            if (this.planta != null) {
                if (this.humedad >= this._minHumedad) {
                    this.planta = new Planta(juego, this.width / 2, this.height / 2, semilla.especie);
                    semilla.destroy();
                }
            }
        };
        return Tierra;
    })(Phaser.Sprite);
    Terrain.Tierra = Tierra;
})(Terrain || (Terrain = {}));
//# sourceMappingURL=tierra.js.map