/**
 * Created by Maximiliano on 14/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../entities/semilla.ts"/>
var Cursor = (function () {
    function Cursor(game) {
        this.almacenado = null;
        this.game = game;
    }
    Cursor.prototype.recolectar = function (semilla) {
        this.almacenado = semilla;
    };
    Cursor.prototype.desvincular = function () {
        this.almacenado = null;
    };
    Cursor.prototype.borrar = function () {
        this.almacenado.destroy();
        this.desvincular();
    };
    Cursor.prototype.actualizar = function () {
        if (this.almacenado != null) {
            this.almacenado.x = this.game.input.mousePointer.x;
            this.almacenado.y = this.game.input.mousePointer.y;
        }
    };
    return Cursor;
})();
//# sourceMappingURL=cursor.js.map