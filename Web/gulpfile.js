/// <binding Clean='clean' />
// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
var project = require('./project.json');
var buildTasks = project.webroot + '/build/tasks';
require('require-dir')(buildTasks);
