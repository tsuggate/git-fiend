import {app, BrowserWindow} from "electron";
import * as path from "path";
import {devMode} from "./args";
import installExtension, {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} from 'electron-devtools-installer';

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
   // installExtension(REACT_DEVELOPER_TOOLS)
   //    .then((name) => console.log(`Added Extension:  ${name}`))
   //    .catch((err) => console.log('An error occurred: ', err));
   //
   // installExtension(REDUX_DEVTOOLS)
   //    .then((name) => console.log(`Added Extension:  ${name}`))
   //    .catch((err) => console.log('An error occurred: ', err));

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
