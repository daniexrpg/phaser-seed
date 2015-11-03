app = app || {};

define("LoaderBar", ['Phaser'], function (Phaser) {
    var LoaderBar = function (game) {
        this.game = game;
        this.position = new Phaser.Point(200, 400);
        this.width = 400;
        this.height = 20;

        this.progress = 0;
        this.sprite = null;
    };

    LoaderBar.prototype = {
        create: function () {
            this.sprite = this.game.add.sprite(this.position.x, this.position.y, "white");
            this.scaleSprite();
        },

        updateProgress: function (progress) {
            this.progress = progress;
            this.scaleSprite();
        },

        scaleSprite: function () {
            this.sprite.scale.set(this.width * this.progress, this.height);
        }
    };

    return LoaderBar;
});