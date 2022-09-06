const { app, BrowserWindow } = require("electron")

function CreateWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,

        resizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false
        },
        icon: "./public/favicon.png"
    })

    win.loadFile("./dist/index.html")
}

app.whenReady().then(CreateWindow)
