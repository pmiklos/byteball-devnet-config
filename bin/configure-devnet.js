#!/usr/bin/node

var fs = require('fs');

var productionMode = process.env.NODE_ENV == 'production' || process.env.npm_config_production;

if (productionMode) {
    console.log('Skipping devnet configuration: not a development environment');
    process.exit(1);
}

fs.createReadStream('node_modules/byteball-devnet-config/constants.js')
    .pipe(fs.createWriteStream('node_modules/byteballcore/constants.js'));

console.log('Byteball devnet configured');