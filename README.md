[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

## Install <img width="200" height="220" align="right" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

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

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/electron-posthtml.svg
[npm-url]: https://npmjs.com/package/electron-posthtml

[deps]: https://david-dm.org/posthtml/electron-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/electron-posthtml

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: http://img.shields.io/travis/posthtml/electron-posthtml.svg
[build-url]: https://travis-ci.org/posthtml/electron-posthtml

[cover]: https://coveralls.io/repos/github/posthtml/electron-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/electron-posthtml?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
