/* global module */

module.exports = function( grunt ) {

    "use strict";

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "css/styles.min.css":"scss/styles.scss"
                }
            }
        },
        watch: {
            files: [ 'scss/**/*.scss' ],
            tasks: [ 'sass' ]
        }
    });

    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-sass" );

    grunt.registerTask( "default", [ 'watch' ] );

};
