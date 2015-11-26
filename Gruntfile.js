module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./dist/*.html', './dist/css/*.css', './dist/js/*.js'],
        tasks: 'inline',
      },
    },
    inline: {
      dist: {
        options:{
          cssmin: true,
          uglify: true,
        },
        src: './dist/index.html',
        dest: './build/index.html'
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-inline');
  grunt.registerTask('default', 'inline');
};
