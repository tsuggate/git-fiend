import * as program from 'commander';
import * as path from 'path';
const packageJson = require('../../package.json');


program
   .version('0.0.1')
   .option('-d, --dev', 'Open dev tools on start.')
   .parse(atLeastTwoArgs(process.argv));


export const devMode = !!program['dev'];

global['devMode'] = devMode;

// Commander expects `args.length` to be at least 2 (node.exe followed
// by the JavaScript file), but electron can launch apps without any
// arguments. This adds a dummy argument.
function atLeastTwoArgs(args: string[]): string[] {
   if (path.basename(args[0]).startsWith(packageJson.name)) {
      return [ args[0], '', ...args.slice(1) ];
   }

   if (args.length >= 2)
      return args;
   return [ ...args.slice(), '' ];
}
