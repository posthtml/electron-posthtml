[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <img width="260" title="Electron" src="https://worldvectorlogo.com/logos/electron-4.svg" />
  <img width="220" height="125" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Electron PostHTML Plugin</h1>
</div>

## Install

```bash
npm i -S electron-posthtml
```

## Usage

This modules intercepts the **_file://_** Protocol using [Electrons Protocol API][api]. All HTML files will automatically processed by PostHTML.

[api]: http://electron.atom.io/docs/api/protocol/

```js
'use strict'

import { app, BrowserWindow } from 'electron'
import posthtml from 'electron-posthtml'

// Use PostHTML
posthtml([/* Plugins */])

app.on('ready', () => {
  const view = new BrowserWindow({ width: 800, height: 600 })

  view.loadUrl(`file://${__dirname}/index.html`)
})
```

## [Example](https://github.com/posthtml/electron-posthtml//tree/master/test)

## LICENSE

> MIT License (MIT)

> Copyright (c) 2016 PostHTML Michael Ciniawsky <michael.ciniawsky@gmail.com>

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

[deps]: https://david-dm.org/posthtml/electron-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/electron-posthtml

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/electron-posthtml.svg
[travis-url]: https://travis-ci.org/posthtml/electron-posthtml

[cover]: https://coveralls.io/repos/github/posthtml/electron-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/electron-posthtml?branch=master
