/*
 * diecast - A single-page JS app template.
 * https://github.com/osmose/diecast/
 *
 * Copyright (c) 2013 Michael Kelly
 * Licensed under the MIT License.
 */
(function(exports) {
    'use strict';

    exports.description = 'Create a single-page JS app that can be published to Github Pages.';
    exports.warnOn = '*';
    exports.after = ('You should now install project dependencies with _npm install_ and ' +
                     'frontend dependencies with _bower install_. After that, you may execute ' +
                     'project tasks with _grunt_. For more information about installing and ' +
                     'configuring Grunt, please see the Getting Started guide:' +
                     '\n\n' +
                     'http://gruntjs.com/getting-started');

    exports.template = function(grunt, init, done) {
        init.process({}, [
            init.prompt('name'),
            init.prompt('description'),
            init.prompt('version'),
            init.prompt('author_name'),
            init.prompt('repository'),
            init.prompt('licenses')
        ], function(err, props) {
            props.devDependencies = {
                'connect': '~2.8.5',
                'grunt': '~0.4.1',
                'requirejs': '~2.1.8',
                'uglify-js': '~2.3.6',
                'grunt-contrib-requirejs': '~0.4.1',
                'grunt-preprocess': '~2.3.0',
                'grunt-gh-pages': '~0.7.1',
                'grunt-contrib-less': '~0.7.0',
                "grunt-contrib-copy": "~0.4.1",
            };

            var files = init.filesToCopy(props);
            init.addLicenseFiles(files, props.licenses);
            init.copyAndProcess(files, props);
            init.writePackageJSON('package.json', props);
            done();
        });
    };
})(exports);
