'use strict'
import {app, BrowserWindow} from 'electron'
let mainWindow



const mainWinURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:${require('../../../config').port}`
    : `file://${__dirname}/index.html`

function createWindows() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        title: "Ug OBS Background",
        icon: 'file://' + __dirname + '/../../icons/256x256.png',
    })

    mainWindow.loadURL(mainWinURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    // eslint-disable-next-line no-console
    console.log('mainWindow opened')

}

app.on('ready', () => {
    createWindows();
})

app.on('window-all-closed', () => {
   app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindows()
    }
})
