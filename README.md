[![Electron Logo](http://electron.atom.io/images/electron-logo.svg)](http://electron.atom.io/) <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

# [PostHTML](https://github.com/posthtml/posthtml) Electron
File Interceptor for [Electron](electron.atom.io)

[PostHTML Plugins](https://maltsev.github.io/posthtml-plugins/)

[PostHTML Packages](https://michael-ciniawsky.github.io/posthtml-packages)

# Install

```bash

(sudo) npm i -S electron-posthtml
```

[![npm](https://badge.fury.io/js/electron-posthtml.svg)](https://badge.fury.io/js/electron-posthtml) [![dependencies](https://david-dm.org/michael-ciniawsky/electron-posthtml.svg)](https://david-dm.org/michael-ciniawsky/electron-posthtml)

# Usage
This modules intercepts the **_file://_** Protocol using [Electrons Protocol API](http://electron.atom.io/docs/v0.36.7/api/protocol/). All HTML files will automatically be processed by [PostHTML](PostHTML).

```js
'use strict'

const app = require('electron').app
const BrowserWindow = require('electron').BrowserWindow

const posthtml = require('electron-posthtml')([/* PostHTML Plugins */])

app.on('ready', () => {
  // Main Window
  view = new BrowserWindow({ width: 800, height: 600 })

  view.loadUrl('file://' + __dirname + '/index.html')
})
```

# [Example](https://github.com/michael-ciniawsky/electron-posthtml//tree/master/test)
