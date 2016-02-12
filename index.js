// ------------------------------------
// #POSTHTML - ELECTRON
// ------------------------------------

var fs = require('fs')
var path = require('path')
var mime = require('mime')

var posthtml = require('posthtml')

var app = require('electron').app

var getPath = function (url) {
  var parsed = require('url').parse(url)
  var result = parsed.pathname

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
      var file = getPath(request.url)
      var source = null

      // Check if file exists
      try {
        source = fs.readFileSync(file)

        var ext = path.extname(file)

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
