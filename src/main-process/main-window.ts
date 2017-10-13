import {app, BrowserWindow} from "electron";
import * as path from "path";
import {devMode} from "./args";

// import * as windowState from "electron-window-state";
const windowState = require('electron-window-state');

let mainWindow: Electron.BrowserWindow | null = null;


export function runCreateWindow(): void {
   app.on('ready', createWindow);

   app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
         app.quit();
      }
   });

   app.on('activate', () => {
      if (mainWindow === null) {
         createWindow();
      }
   });
}

function createWindow(): void {
   const mainWindowState = windowState({
      defaultWidth: 1200,
      defaultHeight: 800
   });

   mainWindow = new BrowserWindow({
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height
   });

   const htmlPath = `file://${path.join(__dirname, '..', 'resources', 'index.html')}`;

   mainWindow.loadURL(htmlPath);

   if (devMode) {
      mainWindow.webContents.openDevTools();
   }

   mainWindow.on('closed', () => {
      mainWindow = null
   });

   mainWindowState.manage(mainWindow);
}
