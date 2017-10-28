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
      submenu: [
         {label: 'About', click: aboutDialog},
         separator,
         {role: 'quit'}
      ]
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
      separator
   ];

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
         buildAppMenuForMac(),
         fileMenu,
         editMenu,
         buildViewMenu()
      ];
      remote.Menu.setApplicationMenu(remote.Menu.buildFromTemplate(menu));
   }
   else {
      fileMenuItems.push({role: 'quit'});

      let menu: MenuItemOptions[] = [
         fileMenu,
         editMenu,
         buildViewMenu(),
         buildHelpMenu()
      ];
      getWindow().setMenu(remote.Menu.buildFromTemplate(menu));
   }
}