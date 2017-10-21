# byteball-devnet-config

Provides Byteball devnet protocol configuration and setup script. Use this package if you are planning to use byteball-devnet in your project for development.

Normally you only want to use it in your development environment so install it as a dev dependency:

```
$ npm install --save-dev pmiklos/byteball-devnet-config
```

The command above will also install an executable in your node `bin` folder eg. under `node_modules/.bin/byteball-devnet-config` which can be used to install the devnet protocol. A convenient solution is to run this script in the `postinstall` phase so it would run automatically after all dependencies including `byteballcore` is installed:

```json
"scripts": {
    "postinstall": "byteball-devnet-config || echo 'Not a development environment'"
}
```

When installing your dependencies or byteballcore, you have to explicitly indicate you are going to install it in a development environment:

```
$ npm --dev install
``` 
or
```
$ npm --development install
``` 

or running the postinstall manually:

```
$ npm --dev run postinstall
```
