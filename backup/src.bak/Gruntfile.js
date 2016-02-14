module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./src/*.html', './src/css/*.css', './src/js/*.js'],
        tasks: 'inline',
      },
    },
    inline: {
      dist: {
        options:{
          cssmin: true,
          uglify: true,
        },
        src: './src/index.html',
        dest: './build/index.html'
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-inline');
  grunt.registerTask('default', 'inline');
};
