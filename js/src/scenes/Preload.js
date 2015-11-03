app = app || {};

define("Preload", ['Phaser', 'LoaderBar'], function (Phaser, LoaderBar) {
    var Preload = function () {
    };

    Preload.prototype = {
        preload: function () {
            this.load.image('white', 'assets/images/general/white.png');
            this.load.image('black', 'assets/images/general/black.png');
            this.load.image('transparent', 'assets/images/general/transparent.png');
            // Not load assets here.
        },

        create: function () {
            this.stage.backgroundColor = '#000000';

            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.maxWidth = this.game.width;
            this.scale.maxHeight = this.game.height;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);

            this.mLoaderBar = new LoaderBar(app.game);
            this.mLoaderBar.create();

            this.load.onLoadStart.add(this.loadStart, this);
            this.load.onFileComplete.add(this.fileComplete, this);
            this.load.onLoadComplete.add(this.loadComplete, this);

            this.start();
        },

        loadStart: function () {
        },

        start: function () {
            // Load assets here.

            this.load.start();
        },

        fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
            this.mLoaderBar.updateProgress(totalLoaded / totalFiles);
        },

        loadComplete: function () {
            this.mLoaderBar.updateProgress(1);
            // Load Complete move to main scene.
        },

        update: function () {
        }
    };

    return Preload;
});