var path = require('path');

exports.description = 'empty grunt template.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {
    init.process( {}, [
        init.prompt('name'),
        init.prompt('description')
    ], function(err, props) {
        // Set project name automatically
        props.name = path.basename(init.destpath());

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props, {
            noProcess: ['img/**']
        });

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', {
            name            : props.name,
            version         : '0.1.0',
            node_version    : '>=0.8.0 <0.9.1',
            devDependencies : {
                'grunt'                   : '~0.4.0',
                'grunt-koko'              : '~0.1.0'
            }
        });

        // All done!
        done();
    });
};
