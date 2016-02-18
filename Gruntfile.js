module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      // options: {
      //   separator: ';',
      // },
      js: {
        src: ['src/js/htmlToMarkdown.js', 'src/js/background.js'],
        dest: 'build/js/background.js',
      },
      contentscript: {
        src: ['src/js/csContextMenu.js', 'src/js/csReddit.js', 'src/js/csQuora.js'],
        dest: 'build/js/contentscript.js',
      },
    },

    copy: {
      main: {
        files: [
          // need to use cwd so that src folder isn't copied into dest
          {expand: true, cwd: 'src/', src: ['*'], dest: 'build/', filter: 'isFile'},
          {expand: true, cwd: 'src/', src: ['css/**'], dest: 'build/'},
          {expand: true, cwd: 'src/', src: ['lib/**'], dest: 'build/'}
        ],
      },
    },

    watch: {
      files: ['src/**'],
      tasks: ['concat', 'copy:main'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'copy', 'watch']);
};
