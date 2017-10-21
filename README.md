# byteball-devnet-config

Provides Byteball devnet protocol configuration and setup script. Use this package if you are planning to use [byteball-devnet](../../../byteball-devnet) in your project for development.

Normally you only want to use it in your development environment so install it as a dev dependency:

```
$ npm install --save-dev pmiklos/byteball-devnet-config
```

The command above will also install an executable in your node `bin` folder eg. under `node_modules/.bin/byteball-devnet-config` which can be used to install the devnet protocol. Installing the protocol means overwriting the `byteballcore/constants.js` with the devnet version. A convenient solution is to run this script in the `postinstall` phase so it would run automatically after all dependencies including `byteballcore` is installed:

```json
"scripts": {
    "postinstall": "byteball-devnet-config || echo 'Not a development environment'"
}
```

In order for the `byteball-devnet-config` to run you have to install your dependencies with the development environment flag on:

```
$ npm --dev install
``` 
or
```
$ npm --development install
``` 

or if you have already installed your dependencies, running the `postinstall` manually:

```
$ npm --dev run postinstall
```

## Setting the devnet hub

While `byteball-devnet-config` helps you setting up the devnet protocol, you still have to do a manual configuration in your `conf.js` or `conf.json`. In order to use the devnet, you have to connect to the devnet hub which is by default exposed on `localhost:6611` via an unencrypted websocket protocol:

```
exports.WS_PROTOCOL='ws://';
exports.hub='localhost:6611';
```

## Learn more
* [byteball-devnet](../../../byteball-devnet) - devnet source code and documentation
* [pmiklos/byteball-devnet](https://hub.docker.com/r/pmiklos/byteball-devnet/) - prebuilt docker image to run the devnet 