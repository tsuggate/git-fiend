import {getWindow} from "../global-menu";
import {remote} from 'electron';
import {openRepo} from "../../data/query-repo";
const packageJson = require('../../../package.json');


export function showOpenFolderWindow(): string | null {
   const paths: string[] | undefined = remote.dialog.showOpenDialog(getWindow(), {
      properties: ['openDirectory']
   });

   if (paths && paths.length > 0) {
      return paths[0];
   }
   return null;
}

export async function clickOpenRepo(): Promise<void> {
   const folderPath = showOpenFolderWindow();

   if (folderPath) {
      await openRepo(folderPath);
   }
}

export function showAboutDialog() {
   remote.dialog.showMessageBox(getWindow(), {
      type: 'info',
      title: packageJson.name,
      message: packageJson.name,
      detail: `Version ${packageJson.version}`
   });
}
