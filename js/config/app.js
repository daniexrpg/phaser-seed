var app = {};

var config = {
    prod: {
        name: "PhaserSeed",
        version: "1.0",
        description: "",

        authors: [
            "Author <email@email.com>"
        ],

        license: "MIT",
        baseUrl: 'js/min',
        paths: {
            "Phaser": "../config/vendor/phaser.min",
            "Preload": "scenes/Preload",
            "LoaderBar": "model/LoaderBar"
        }
    },

    dev: {
        name: "PhaserSeed",
        version: "1.0",
        description: "",

        authors: [
            "Author <email@email.com>"
        ],

        license: "MIT",
        baseUrl: 'js/src',
        paths: {
            "Phaser": "../config/vendor/phaser.min",
            "Preload": "scenes/Preload",
            "LoaderBar": "model/LoaderBar"
        }
    }
};

// Configure environment
requirejs.config(config.dev);

require(['Phaser', 'Preload'], function (Phaser, Preload) {
    app.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', Preload);
});