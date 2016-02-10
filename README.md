[![Electron Logo](http://electron.atom.io/images/electron-logo.svg)](http://electron.atom.io/) <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

# [PostHTML](https://github.com/posthtml/posthtml) Electron
File Interceptor for [electron](electron.atom.io)

[PostHTML Plugins Catalog](https://maltsev.github.io/posthtml-plugins/)

# Install

```bash

(sudo) npm i -S electron-posthtml
```

# Usage

```javascript

var app = require('electron').app
var posthtml = require('electron-posthtml')([/* PostHTML Plugins */])

var BrowserWindow = require('electron').BrowserWindow

app.on('ready', function () {
  view = new BrowserWindow({ width: 800, height: 600 })

  view.loadUrl('file://' + __dirname + '/index.html')
})
```
