# obyte-devnet-config

Provides Obyte devnet protocol configuration and setup script. Use this package if you are planning to use [obyte-devnet](../../../obyte-devnet) in your project for development.

Normally you only want to use it in your development environment so install it as a dev dependency:

```
$ npm install --save-dev pmiklos/obyte-devnet-config
```

The command above will also install an executable in your node `bin` folder eg. under `node_modules/.bin/obyte-devnet-config` which can be used to install the devnet protocol. Installing the protocol means overwriting the `ocore/constants.js` with the devnet version. A convenient solution is to run this script in the `postinstall` phase so it would run automatically after all dependencies including `ocore` are installed:

```json
"scripts": {
    "postinstall": "obyte-devnet-config || echo 'Not a development environment'"
}
```


After that, every time `npm install` runs, the devnet protocol is going to be installed as well.

If your dependencies are already installed, running the `postinstall` manually will also deploy the devnet protocol:

```
$ npm run postinstall
```

Once you are ready to use your project in production, use the `--production` flag to install your dependencies without the devnet:

```
$ npm --production install
```

## Connecting to the devnet

While `obyte-devnet-config` helps you setting up the devnet protocol, you still have to do a manual configuration in your `conf.js` or `conf.json`. In order to use the devnet, you have to connect to the devnet hub which is by default exposed on `localhost:6611` via an unencrypted websocket protocol:

```
exports.WS_PROTOCOL='ws://';
exports.hub='localhost:6611';
```

## Learn more
* [obyte-devnet](../../../obyte-devnet) - devnet source code and documentation
* [pmiklos/obyte-devnet](https://hub.docker.com/r/pmiklos/obyte-devnet/) - prebuilt docker image to run the devnet

## Known issues

The `postinstall` script does not seem to be executed after running `npm update` so a manual execution of the postinstall might be necessary every time `ocore` is updated.