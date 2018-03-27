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
var Estados;
(function (Estados) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.call(this);
        }
        Preloader.prototype.preload = function () {
            console.log("Preloading...");
            //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start("Partida");
        };
        return Preloader;
    })(Phaser.State);
    Estados.Preloader = Preloader;
})(Estados || (Estados = {}));
//# sourceMappingURL=Preloader.js.map