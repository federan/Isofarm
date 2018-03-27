/**
 * Created by Maximiliano on 13/07/2015.
 */
///<reference path="../phaser.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Semilla = (function (_super) {
    __extends(Semilla, _super);
    function Semilla(juego, x, y, especie) {
        _super.call(this, juego, x, y, "Semilla.placeholder");
        juego.add.existing(this);
        this.especie = especie;
    }
    return Semilla;
})(Phaser.Sprite);
//# sourceMappingURL=semilla.js.map