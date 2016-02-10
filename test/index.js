'use strict'

var app = require('electron').app

var bem = require('posthtml-bem')
var include = require('posthtml-include')

var posthtml = require('electron-posthtml')([include({root: './client/'}), bem()])

const BrowserWindow = require('electron').BrowserWindow

// require('electron').crashReporter.start()

app.on('ready', () => {
  // Main Window
  let main = new BrowserWindow({
    width: 1200,
    height: 900,
    position: 'center',
    resizable: true,
    frame: false
  })
  main.loadURL(`file://${__dirname}/client/index.html`)
  main.webContents.openDevTools()
  main.on('closed', () => {
    main = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
