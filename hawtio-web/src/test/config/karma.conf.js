// Karma configuration
// Generated on Wed Jul 09 2014 10:49:52 GMT+0200 (CEST)

module.exports = function(config) {
  var basedir = 'src/main/webapp/';
  var libdir = basedir + 'lib/';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      libdir + 'logger.min.js',
      libdir + 'loggingInit.js',
      libdir + 'jquery-1.8.2.min.js',
      libdir + 'jolokia-min.js',
      libdir + 'debug/angular.js',
      libdir + 'angular-resource.min.js',
      libdir + 'angular-route.min.js',
      libdir + 'angular-sanitize.min.js',
      libdir + 'ui-bootstrap-tpls-0.12.0-SNAPSHOT.min.js',
      libdir + 'sugar-1.3.6-custom.min.js',
      libdir + 'camelModel.js',
      libdir + 'jsonschema.js',
      libdir + 'hawtio-plugin-loader.js',
      'src/test/specs/lib/angular-mocks.js',
      'src/main/webapp/app/app.js',
      'src/test/specs/spec-js/**/*.js',
      'src/test/fixtures/*.html'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['html2js']
      //'**/*.ts': ['typescript'] // too slow
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

//    typescriptPreprocessor: {
//      options: {
//        target: 'ES5'
//      },
//      transformPath: function(path) {
//        return path.replace(/\.ts$/, '.js');
//      }
//    }

  });
};
