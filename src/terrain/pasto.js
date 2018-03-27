var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
var Terrain;
(function (Terrain) {
    var Pasto = (function (_super) {
        __extends(Pasto, _super);
        function Pasto(game, x, y) {
            _super.call(this, game, x, y, "Pasto");
            this.id = 0;
            game.add.existing(this);
        }
        Pasto.prototype.actualizar = function () {
        };
        return Pasto;
    })(Phaser.Sprite);
    Terrain.Pasto = Pasto;
})(Terrain || (Terrain = {}));
//# sourceMappingURL=pasto.js.map