# Winds [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/winds/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/winds)

Get a list of running applications.

[![NPM Badge](https://nodei.co/npm/winds.png)](https://npmjs.com/package/winds)

## Install

```sh
npm install winds
```

## Usage

```js
const winds = require("winds");

(async () => {
    await winds()
    //=> ['Richienb/winds: Get a list of running applications. - Google Chrome', 'index.js - winds - Visual Studio Code']
})()
```

## API

### winds()
