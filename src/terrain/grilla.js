/**
 * Created by Maximiliano on 11/07/2015.
 */
///<reference path="../phaser.d.ts"/>
///<reference path="../terrain/pasto.ts"/>
///<reference path="../terrain/tierra.ts"/>
var Grilla = (function () {
    function Grilla(game) {
        this.contador = 0;
        this.tierras = game.add.group();
        this.dibujar(game);
    }
    Grilla.prototype.dibujar = function (game) {
        var tempSprite;
        for (var i = 0; i < 7; i++) {
            if (i % 2 == 0) {
                tempSprite = new Terrain.Pasto(game, 330 + 50 * i, 50 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 280 + 50 * i, 79 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 230 + 50 * i, 108 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 180 + 50 * i, 137 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 130 + 50 * i, 166 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 80 + 50 * i, 195 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 30 + 50 * i, 224 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
            }
            else {
                tempSprite = new Terrain.Pasto(game, 330 + 50 * i, 50 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Tierra(game, 280 + 50 * i, 79 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 230 + 50 * i, 108 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Tierra(game, 180 + 50 * i, 137 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 130 + 50 * i, 166 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Tierra(game, 80 + 50 * i, 195 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
                tempSprite = new Terrain.Pasto(game, 30 + 50 * i, 224 + 29 * i);
                game.add.existing(tempSprite);
                this.tierras.add(tempSprite);
            }
        }
    };
    Grilla.prototype.actualizar = function () {
        this.tierras.forEach(function (item) {
            item.actualizar();
        }, this);
        this.contador += 1;
        if (this.contador >= 600) {
            this.contador = 0;
            this.almacenar();
        }
    };
    Grilla.prototype.almacenar = function () {
        localStorage.setItem("isofarm.date", Date.now().toString());
        var i = 0;
        this.tierras.forEach(function (item) {
            if (item.id == 1) {
                i++;
                localStorage.setItem("isofarm.t" + i + ".humedad", item.humedad.toString());
            }
        }, this);
    };
    return Grilla;
})();
//# sourceMappingURL=grilla.js.map