[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <img align="bottom" width="220" title="Electron" src="https://worldvectorlogo.com/logos/electron-4.svg" />
  <img width="220" height="125" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
</div>

## Install

```bash
$ npm i -S electron-posthtml
```

## Usage
This modules intercepts the **_file://_** Protocol using [Electrons Protocol API][api]. All HTML files will automatically processed by PostHTML.

[api]: http://electron.atom.io/docs/api/protocol/

```js
'use strict'

const { app, BrowserWindow }  = require('electron')

// Load PostHTML
require('electron-posthtml')([/* Plugins */])

app.on('ready', () => {
  let view = new BrowserWindow({ width: 800, height: 600 })

  view.loadUrl('file://' + __dirname + '/index.html')
})
```

## [Example](https://github.com/posthtml/electron-posthtml//tree/master/test)

## LICENSE

> MIT License (MIT)

> Copyright (c) 2016 Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/electron-posthtml.svg
[npm-url]: https://npmjs.com/package/electron-posthtml

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/electron-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/electron-posthtml

[devdeps]: https://david-dm.org/posthtml/electron-posthtml/dev-status.svg
[devdeps-url]: https://david-dm.org/posthtml/electron-posthtml#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/electron-posthtml.svg
[travis-url]: https://travis-ci.org/posthtml/electron-posthtml

[travis-rel]: http://img.shields.io/travis/posthtml/electron-posthtml.svg?branch=release/1.0.0
[travis-rel-url]:https://travis-ci.org/posthtml/electron-posthtml?branch=release/1.0.0

[travis-dev]: http://img.shields.io/travis/posthtml/electron-posthtml.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/posthtml/electron-posthtml?branch=develop

[cover]: https://coveralls.io/repos/github/posthtml/electron-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/electron-posthtml?branch=master

[cover-rel]: https://coveralls.io/repos/github/posthtml/electron-posthtml/badge.svg?branch=release/1.0.0
[cover-rel-url]: https://coveralls.io/github/posthtml/electron-posthtml?branch=release/1.0.0

[cover-dev]: https://coveralls.io/repos/github/posthtml/electron-posthtml/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/posthtml/electron-posthtml?branch=develop

[license]: https://img.shields.io/github/license/posthtml/electron-posthtml.svg
[license-url]: https://raw.githubusercontent.com/posthtml/electron-posthtml/master/LICENSE
