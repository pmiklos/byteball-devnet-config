#!/usr/bin/node

var fs = require('fs');

var developmentMode = process.env.NODE_ENV == 'dev'
        || process.env.NODE_ENV == 'development'
        || process.env.npm_config_dev
        || process.env.npm_config_development;

if (! developmentMode) {
    console.log('Skipping devnet configuration: not a development environment');
    process.exit(1);
}

fs.createReadStream('node_modules/byteball-devnet-config/constants.js')
    .pipe(fs.createWriteStream('node_modules/byteballcore/constants.js'));

console.log('Byteball devnet configured');