const { app, BrowserWindow } = require('electron');

/////////////////////////////////////////////////////////////////////////

const createWindow = () => {
    const win = new BrowserWindow({
        width: 433,
        height: 800,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }   
    })

    win.loadFile('index.html')
}
                                            //creates the window
app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
////////////////////////////////////////////////////////////////////////////////////