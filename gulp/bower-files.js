module.exports = {
	overrides: {
        'ng-grid': {
            main: [
            	"./ng-grid.css", 
            	"./build/ng-grid.js", 
            	"./ng-grid.bootstrap.css"
            ]
        },
        'angular-ui-grid': {
            main: [
              	'./ui-grid.css',
			    './ui-grid.eot',
			    './ui-grid.js',
			    './ui-grid.svg',
			    './ui-grid.ttf',
			    './ui-grid.woff',
			    './ui-grid.bootstrap.css'
            ]
        },
        'bootstrap-slider': {
            main: [
              	'./bootstrap-slider.js',
			    './bootstrap-slider.css'
            ]
        },
        'bootstrap-touchspin':{
        	main: [
              	'./dist/jquery.bootstrap-touchspin.js',
			    './dist/jquery.bootstrap-touchspin.css'
            ]
        },
        'bootstrap-chosen':{
        	main: [
			    "bootstrap-chosen.css",
			    "chosen-sprite.png",
			    "chosen-sprite@2x.png"
            ]
        },
        'chosen':{
        	main: [
			    "chosen.jquery.js"
            ]
        },
        'bootstrap-wysiwyg':{
        	main:[
        		'./bootstrap-wysiwyg.js',
        		'./external/jquery.hotkeys.js'
        	]
        },
        'angular-slider':{
        	main:[                		
        		'./build/angular-slider.css',
        		'./build/angular-slider.js'
        	]
        },
        'textAngular':{
        	main:[                		
        		'./src/textAngular.js',
        		'./src/textAngular-sanitize.js',
        		'./src/textAngularSetup.js'
        	]
        }
    }
};