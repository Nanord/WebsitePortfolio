module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        outputStyle: 'expanded'
      },
      dist: {
          files: {
              'css/style.css': ['scss/style.scss']
          }
      }
    },
    watch: {
      scripts: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};