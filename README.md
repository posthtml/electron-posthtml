[![npm][npm]][npm-1]
[![dependencies][deps]][deps-1]

<img align="bottom" width="220" title="ElectronJS" src="https://worldvectorlogo.com/logos/electron-4.svg" /> <img align="right" width="220" height="125" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

# Install

```bash
(sudo) npm i -S electron-posthtml
```

# Usage
This modules intercepts the **_file://_** Protocol using [Electrons Protocol API][api]. All HTML files will automatically be processed by [PostHTML](PostHTML).

```js
'use strict'

const app = require('electron').app
const BrowserWindow = require('electron').BrowserWindow

const posthtml = require('electron-posthtml')([/* Plugins */])

app.on('ready', () => {
  // Main Window
  view = new BrowserWindow({ width: 800, height: 600 })

  view.loadUrl('file://' + __dirname + '/index.html')
})
```

# [Example](https://github.com/michael-ciniawsky/electron-posthtml//tree/master/test)

[npm]: https://badge.fury.io/js/electron-posthtml.svg
[npm-1]: https://badge.fury.io/js/electron-posthtml
[deps]: https://david-dm.org/michael-ciniawsky/electron-posthtml.svg
[deps-1]: https://david-dm.org/michael-ciniawsky/electron-posthtml
[api]: http://electron.atom.io/docs/v0.36.7/api/protocol/
