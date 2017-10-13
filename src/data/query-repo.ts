import * as Git from 'nodegit';
import {Commit, Repository} from 'nodegit';
import * as path from 'path';
import * as moment from 'moment';


const pathToRepo = path.resolve(__dirname, '..');

export async function printQuery() {
   const repo: Repository = await Git.Repository.open(pathToRepo);

   const commit: Commit = await repo.getMasterCommit();

   const date = moment(new Date(commit.date())).fromNow();

   console.log(commit.message(), date);

   await walkHistory(commit);
}

export function walkHistory(commit: Commit) {
   return new Promise(resolve => {
      const history = commit.history();

      // History emits "commit" event for each commit in the branch's history
      history.on("commit", function(commit: any) {
         console.log("commit " + commit.sha());
         console.log("Author:", commit.author().name() +
            " <" + commit.author().email() + ">");
         console.log("Date:", commit.date());
         console.log("\n    " + commit.message());
      });

      history.on('end', () => {
         resolve();
      });

      history.on('error', () => {
         resolve();
      });

      (history as any).start();
   })

}
