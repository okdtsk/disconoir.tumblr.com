module.exports = function (grunt) {

  grunt.initConfig({
    inline: {
      dist: {
        options:{
          cssmin: true,
          uglify: true,
        },
        src: './dist/index.html', // インライン化したいファイルのパス
        dest: './build/index.html'  // 出力ファイルのパス
      }
    }
  });
  grunt.loadNpmTasks('grunt-inline'); // grunt-inlineの取り込み
  grunt.registerTask('default', 'inline'); // defaultタスクに設定

};
