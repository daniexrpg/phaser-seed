module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            js: {
                files: [{
                    cwd: 'js/src/',
                    expand: true,
                    src: '**/*.js',
                    dest: 'js/min/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('minify', ['uglify']);
};