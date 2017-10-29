import * as path from "path";
import * as fs from "fs";
import {BrowserWindow, app, remote} from 'electron';
import {platform} from "os";


export function setupReactDevToolsPath() {
   addExtensionIfFound('React Dev Tools', 'fmkadmapgofadopljbjfkapdkoienihi');
   addExtensionIfFound('Redux DevTools', 'lmhkpmbekcpmknklioeibfkpmmfibljd');
}


function addExtensionIfFound(name: string, id: string) {
   const path = findExtensionPath(id);
   if (path) {
      console.log(`Installing Chrome extension "${name}" from here "${path}"`);
      remote.BrowserWindow.addDevToolsExtension(path);
   }
   else {
      console.log(`Couldn't find Chrome extension "${name}" with id "${id}"`);
   }
}


function findExtensionPath(id: string) {

   const extensionFolder = platform() === 'darwin' ?
      getExtensionFolderMac(id) : getExtensionFolderWin(id);

   if (!fs.existsSync(extensionFolder) || !fs.statSync(extensionFolder).isDirectory())
      return null;

   const versionFolderName = fs.readdirSync(extensionFolder).find(name =>
      fs.statSync(path.join(extensionFolder, name)).isDirectory()
   );

   if (!versionFolderName)
      return null;

   return path.join(extensionFolder, versionFolderName);
}

function getExtensionFolderMac(id: string) {
   const appData = remote.app.getPath('appData');

   return path.join(
      appData,
      'Google',
      'Chrome',
      'Default',
      'Extensions',
      `${id}`
   );
}

function getExtensionFolderWin(id: string) {
   // Ensure path.join is passed only strings.
   return path.join(
      `${process.env.LOCALAPPDATA}`,
      'Google',
      'Chrome',
      'User Data',
      'Default',
      'Extensions',
      `${id}`
   );
}