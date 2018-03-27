/**
 * Created by Maximiliano on 13/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../ui/slot.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Inventario = (function (_super) {
    __extends(Inventario, _super);
    function Inventario(juego) {
        _super.call(this, juego, juego.width - 117, 3, "Inventario");
        this.activo = false;
        juego.add.existing(this);
        //this.visible = false;
        this.slots = juego.add.group();
        this.dibujar(juego);
        this.slots.getTop();
    }
    Inventario.prototype.dibujar = function (juego) {
        var tempSprite;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 7; j++) {
                tempSprite = new Slot(juego, this.position.x + 3 + 28 * i, this.position.y + 3 + 28 * j);
                this.slots.add(tempSprite);
            }
        }
    };
    Inventario.prototype.almacenar = function (semilla) {
        this.slots.getTop().regalar(semilla);
    };
    return Inventario;
})(Phaser.Sprite);
//# sourceMappingURL=inventario.js.map