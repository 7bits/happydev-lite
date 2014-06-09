module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			options: {
				bare: true
			},
			scripts: {
				expand: true,
				flatten: true,
				cwd: 'coffee',
				src:['*.coffee'],
				dest: 'js/',
				ext: '.js'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['coffee/*.coffee'],
				tasks: ['newer:coffee']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
};