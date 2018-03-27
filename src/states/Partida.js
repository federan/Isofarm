/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../terrain/pasto.ts"/>
///<reference path="../terrain/tierra.ts"/>
///<reference path="../terrain/grilla.ts"/>
///<reference path="../entities/semilla.ts"/>
///<reference path="../entities/cursor.ts"/>
///<reference path="../ui/inventario.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cursor;
var Estados;
(function (Estados) {
    var Partida = (function (_super) {
        __extends(Partida, _super);
        function Partida() {
            _super.call(this);
        }
        Partida.prototype.init = function () {
            console.log("EN PARTIDA!");
        };
        Partida.prototype.preload = function () {
            this.game.load.image("Pasto", "resources/images/pasto.png");
            this.game.load.image("Tierra", "resources/images/tierra.png");
            this.game.load.image("Gota", "resources/images/lluvia.png");
            this.game.load.image("Inventario", "resources/images/inventario_fondo.png");
            this.game.load.image("Slot", "resources/images/inventario_slot.png");
            this.game.load.image("Semilla.placeholder", "resources/images/semillas/placeholder.png");
            this.game.load.image("Planta.Bulto", "resources/images/bulto.png");
            this.game.load.audio("Cancion", "resources/music/theme.ogg");
            //PLANTAS
            this.game.load.image("Planta.Bulto", "resources/images/bulto.png");
            this.game.add.audio("Cancion").play('', 1, 0.35);
            var tiempoUltimaSesion = localStorage.getItem("isofarm.date"); // CONTROL DEL TIEMPO EN INICIO
            if (tiempoUltimaSesion != null) {
                tiempoUltimaSesion = ((Date.now() - tiempoUltimaSesion) / 1000) / 60;
            }
        };
        Partida.prototype.create = function () {
            this.grilla = new Grilla(this.game);
            this.inventario = new Inventario(this.game);
            cursor = new Cursor(this.game);
            var sem = new Semilla(this.game, 0, 0, "placeholder");
            this.inventario.almacenar(sem);
        };
        Partida.prototype.update = function () {
            this.grilla.actualizar();
            cursor.actualizar();
        };
        return Partida;
    })(Phaser.State);
    Estados.Partida = Partida;
})(Estados || (Estados = {}));
//# sourceMappingURL=Partida.js.map