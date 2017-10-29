import {remote} from 'electron';
import {platform} from "os";
import {clickOpenRepo, showAboutDialog} from "./global-menu/menu-actions";


type MenuItemOptions = Electron.MenuItemConstructorOptions;


const separator: MenuItemOptions = {
   type: 'separator'
};

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
         click: showAboutDialog
      }]
   }
}

function buildAppMenuForMac() {
   return {
      label: 'Help',
      submenu: [
         {label: 'About', click: showAboutDialog},
         separator,
         {role: 'quit'}
      ]
   }
}

export function renderMainWindowMenu(): void {
   let fileMenuItems: MenuItemOptions[] = [
      {
         label: 'Open Local Repository...',
         click: clickOpenRepo,
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

export function getWindow(): Electron.BrowserWindow {
   return remote.getCurrentWindow();
}