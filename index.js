// ------------------------------------
// #POSTHTML - ELECTRON
// ------------------------------------

var fs = require('fs')
var path = require('path')

var app = require('electron').app
var mime = require('mime')
var posthtml = require('posthtml')

var getPath = function (url) {
  var parsed = require('url').parse(url)
  var result = parsed.pathname

  // Local files in windows start with slash if no host is given
  // file:///c:/file.html
  if (process.platform === 'win32' && !parsed.host.trim()) {
    result = result.substr(1)
  }

  return result
}

module.exports = function (plugins) {
  app.on('ready', function () {
    var protocol = require('electron').protocol
    var plugins = plugins || []

    protocol.interceptBufferProtocol('html', function (request, callback) {
      var file = getPath(request.url)
      var content = null

      // See if file actually exists
      try {
        content = fs.readFileSync(file)

        var ext = path.extname(file)
        if (ext === '.html') {
          var compiled = posthtml(plugins).process(file).then(result => result.html)

          return callback({data: new Buffer(compiled), mimeType:'text/html'})
        } else {
          return callback({data: content, mimeType: mime.lookup(ext)})
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
    }, function (error, scheme) {
      if (!error) {
        console.log('PostHTML interceptor registered successfully')
      } else {
        console.error('PostHTML interceptor error:', error)
      }
    })
  })
}
