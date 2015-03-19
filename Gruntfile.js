module.exports = function(grunt) {

	grunt.initConfig({
		serve: {
	        options: {
	            port: 9000
	        }
	    },
	    bower: {
	    	install: {

	    	}
	    },
	    vulcanize: {
			default: {
		    	options: {},
		      	files: {
		        	'build.html': 'index.html',
		        	'demos_dist/binds.html': './demos/binds.html',
		        	'demos_dist/event-handler.html': './demos/event-handler.html',
		        	'demos_dist/lifecycle.html': './demos/lifecycle.html',
		        	'demos_dist/simple-cards.html': './demos/simple-cards.html',
		      	}
		    }
		}
	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-vulcanize');
	grunt.loadNpmTasks('grunt-bower-task');


	grunt.registerTask("default", ["bower", "serve"]);



};
