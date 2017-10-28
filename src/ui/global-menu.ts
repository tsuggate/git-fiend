import {remote} from 'electron';
import {platform} from "os";
const packageJson = require('../../package.json');

type MenuItemOptions = Electron.MenuItemConstructorOptions;


const separator: MenuItemOptions = {
   type: 'separator'
};

export function aboutDialog() {
   remote.dialog.showMessageBox(getWindow(), {
      type: 'info',
      title: packageJson.name,
      message: packageJson.name,
      detail: `Version ${packageJson.version}`//\nLatest ${latestVersion}`
   });
}

export function getWindow(): Electron.BrowserWindow {
   return remote.getCurrentWindow();
}

function buildViewMenu() {
   return {
      label: 'View',
      submenu: [
         {role: 'reload'},
         {role: 'toggledevtools'},
         {type: 'separator'},
         {role: 'resetzoom'},
         {role: 'zoomin'},
         {role: 'zoomout'},
      ] as MenuItemOptions[]
   };
}

function buildHelpMenu() {
   return {
      label: 'Help',
      submenu: [{
         label: 'About',
         click: aboutDialog
      }]
   }
}

function buildAppMenuForMac() {
   return {
      label: 'Help',
      submenu: [{
         label: 'About',
         click: aboutDialog
      }]
   }
}

export function renderMainWindowMenu(): void {

   let fileMenuItems: MenuItemOptions[] = [
      {
         label: 'Open Local Repository...',
         click: () => {},
         accelerator: 'CmdOrCtrl+O',
         enabled: true
      },
      {
         label: 'Open Folder...',
         click: () => {},
         accelerator: 'CmdOrCtrl+Shift+O',
         enabled: true
      },
      separator
   ];

   fileMenuItems.push({role: 'quit'});

   const fileMenu = {
      label: 'File',
      submenu: fileMenuItems
   };

   const editMenuItems: MenuItemOptions[] = [
      {role: 'copy'},
      {role: 'selectall'}
   ];

   const editMenu = {
      label: 'Edit',
      submenu: editMenuItems
   };

   if (platform() === 'darwin') {
      let menu: MenuItemOptions[] = [
         buildHelpMenu(),
         fileMenu,
         editMenu,
         buildViewMenu()
      ];
      remote.Menu.setApplicationMenu(remote.Menu.buildFromTemplate(menu));
   }
   else {
      let menu: MenuItemOptions[] = [
         buildHelpMenu(),
         fileMenu,
         editMenu,
         buildViewMenu()
      ];
      getWindow().setMenu(remote.Menu.buildFromTemplate(menu));
   }
}