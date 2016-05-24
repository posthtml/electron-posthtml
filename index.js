// ------------------------------------
// #ELECTRON - POSTHTML
// ------------------------------------

const fs = require('fs')
const path = require('path')
const mime = require('mime')

const posthtml = require('posthtml')

let app = require('electron').app

let getPath = function (url) {
  let parsed = require('url').parse(url)
  let result = parsed.pathname

  // Local files in windows start with a slash if no host is given
  // file:///C:/file.html
  if (process.platform === 'win32' && !parsed.host.trim()) {
    result = result.substr(1)
  }

  return result
}

module.exports = function (plugins) {
  plugins = plugins || []

  app.on('ready', function () {
    const protocol = require('electron').protocol

    protocol.interceptBufferProtocol('file', function (request, callback) {
      let file = getPath(request.url)
      let source = null

      // Check if file exists
      try {
        source = fs.readFileSync(file)

        let ext = path.extname(file)

        if (ext === '.html') {
          posthtml(plugins)
            .process(source)
            .then(result => callback({data: new Buffer(result.html), mimeType: 'text/html'}))
        } else {
          return callback({data: source, mimeType: mime.lookup(ext)})
        }
      } catch (e) {
        // See here for error numbers:
        // https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h
        if (e.code === 'ENOENT') {
          // NET_ERROR(FILE_NOT_FOUND, -6)
          return callback(6)
        }

        // All other possible errors return a generic failure
        // NET_ERROR(FAILED, -2)
        return callback(2)
      }
    }, (error, scheme) => {
      if (!error) {
        console.log('PostHTML loaded')
      } else {
        console.error('PostHTML error', error)
      }
    })
  })
}
