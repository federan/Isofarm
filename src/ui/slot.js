/**
 * Created by Maximiliano on 13/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../entities/semilla.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cursor;
var Slot = (function (_super) {
    __extends(Slot, _super);
    function Slot(juego, x, y) {
        _super.call(this, juego, x, y, "Slot");
        this.almacenado = null;
        juego.add.existing(this);
        this.game = juego;
        this.inputEnabled = true;
        this.events.onInputDown.add(function () {
            this.click();
        }, this);
    }
    Slot.prototype.regalar = function (semilla) {
        this.almacenado = semilla;
        this.almacenado.position.x = this.position.x;
        this.almacenado.position.y = this.position.y;
        semilla.position.x += 3;
        semilla.position.y += 3;
    };
    Slot.prototype.guardar = function (semilla) {
        this.regalar(semilla);
        cursor.desvincular();
    };
    Slot.prototype.extraer = function () {
        cursor.recolectar(this.almacenado);
        this.almacenado = null;
    };
    Slot.prototype.click = function () {
        if (this.almacenado != null && cursor.almacenado == null) {
            this.extraer();
        }
        else if (this.almacenado == null && cursor.almacenado != null) {
            this.guardar(cursor.almacenado);
        }
    };
    return Slot;
})(Phaser.Sprite);
//# sourceMappingURL=slot.js.map