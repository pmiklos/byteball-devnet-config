#!/usr/bin/env node

var fs = require('fs');

var productionMode = process.env.NODE_ENV == 'production' || process.env.npm_config_production;

if (productionMode) {
    console.log('Skipping devnet configuration: not a development environment');
    process.exit(1);
}

function devnetize(module, resolve, reject) {
    console.log('Configuring ' + module + ' for devnet protocol');

    fs.createReadStream('node_modules/byteball-devnet-config/constants.js')
	.on('error', reject)
        .pipe(fs.createWriteStream(module + '/constants.js'))
	.on('error', reject)
	.on('close', function() {
            resolve(module);
        });
}

var candidateModules = [
	'node_modules/byteballcore',
        'node_modules/headless-byteball/node_modules/byteballcore'];

var configurators = candidateModules
    .filter(fs.existsSync)
    .map(function(module) {
        return new Promise(function(resolve, reject) {
            devnetize(module, resolve, reject);
        });
    });

Promise.all(configurators).then(function(modules) {
    if (modules.length > 0) {
        console.log('Byteball devnet configured: ' + modules);
    } else {
        console.error('Failed to configure devnet: no byteballcore module found');
        process.exit(2);
    }
}, function(err) {
    console.error('Failed to configure devnet:' + err);
});

