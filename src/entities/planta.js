/**
 * Created by Maximiliano on 12/07/2015.
 */
///<reference path="../phaser.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Planta = (function (_super) {
    __extends(Planta, _super);
    function Planta(juego, x, y, especie) {
        _super.call(this, juego, x, y, "Planta.Bulto");
        juego.add.existing(this);
        this.especie = especie;
    }
    return Planta;
})(Phaser.Sprite);
//# sourceMappingURL=planta.js.map